import { PerformanceCurrent } from '@diary-spo/shared'
import { createSubjectMarksMap } from '@utils'
import {
  Card,
  CardGrid,
  Div,
  Group,
  Header,
  HorizontalScroll,
  Title
} from '@vkontakte/vkui'
import { FC } from 'preact/compat'
import AverageMarkCell from './AverageMarkCell'
import MarksList from './MarksList'

interface IMarksByGroup {
  marksForSubject: PerformanceCurrent | null
}

const MarksByGroup: FC<IMarksByGroup> = ({ marksForSubject }) => {
  console.log(marksForSubject)
  if (!marksForSubject?.daysWithMarksForSubject.length) {
    return
  }

  const subjectMarksMap = createSubjectMarksMap(marksForSubject)
  return (
    <Group
      mode='plain'
      header={<Header mode='secondary'>Оценки по дисциплинам</Header>}
    >
      {Object.keys(subjectMarksMap).map((subjectName, i) => {
        console.log(subjectMarksMap[subjectName])
        return (
          <CardGrid key={i} size='l'>
            <Card mode='shadow'>
              <Div>
                {/*//@ts-ignore типы React не совсем совместимы с Preact*/}
                <Title level='3'>{subjectName}</Title>
              </Div>
              <HorizontalScroll>
                <MarksList marks={subjectMarksMap[subjectName]} />
              </HorizontalScroll>
              <AverageMarkCell
                marks={subjectMarksMap[subjectName].flatMap(
                  ({ marks }) => marks
                )}
              />
            </Card>
          </CardGrid>
        )
      })}
    </Group>
  )
}

export default MarksByGroup
