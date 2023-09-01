import {FC, Suspense, useEffect, useState} from 'react';
import {
  Card,
  CardScroll,
  Group, Header, Panel, Placeholder, SimpleCell, View,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import { useMediaQuery } from 'react-responsive';
import PanelHeaderWithBack from '../components/PanelHeaderWithBack';
import { Day } from '../../../shared/lessons';
import { getLessons } from '../methods/getLessons';
import { formatLessonDate } from '../utils/formatLessonDate';

const Profile: FC<{ id: string }> = ({ id }) => {
  const { panel: activePanel, panelsHistory } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();

  const [lessonsState, setLessons] = useState<Day[] | null>();

  useEffect(() => {
    const gettedLessons = async () => {
      const data = await getLessons();
      setLessons(data);
    };

    gettedLessons();
  }, []);

  const isDesktopOrLaptop = useMediaQuery({ maxWidth: 1224 });

  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel as string}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Расписание' />
        <Group header={<Header mode='secondary'>Расписание занятий</Header>}>
          <Suspense fallback={<div>Загрузочка</div>}>
           <CardScroll size={isDesktopOrLaptop ? 'm' : 'l'}>
             {lessonsState?.length! > 0 && lessonsState?.map(({ date, lessons }: Day) => (
               <Suspense fallback={<div>Загрузочка</div>}>
                 <Card key={date as unknown as string}>
                   <Group
                     style={{ height: '100%', marginTop: '4px' }}
                     header={<Header mode='secondary'>{formatLessonDate(date)}</Header>}
                   >
                     {lessons
                     && lessons?.length > 0
                       ? lessons?.map(({
                                         name, endTime, startTime, timetable,
                                       }) => (
                         <SimpleCell
                           key={startTime as unknown as string}
                           subtitle={!name
                             || (
                               <>
                                 <div>
                                   {`${startTime} — ${endTime}, каб. ${timetable?.classroom.name}`}
                                 </div>
                                 <div>
                                   {timetable?.teacher.lastName}
                                   {' '}
                                   {timetable?.teacher.firstName}
                                   {' '}
                                   {timetable?.teacher.middleName}
                                 </div>
                               </>
                             )}
                         >
                           {name || 'Можно спать'}
                         </SimpleCell>
                       ))
                       : <Placeholder>Пар нет</Placeholder>}
                   </Group>
                 </Card>
               </Suspense>
             ))}
           </CardScroll>
         </Suspense>
        </Group>
      </Panel>
    </View>
  );
};

export default Profile;
