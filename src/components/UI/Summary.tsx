import { FC } from 'react';
import {
  Group, Header, MiniInfoCell,
} from '@vkontakte/vkui';
import { Icon20EducationOutline, Icon28BrainOutline } from '@vkontakte/icons';
import Mark from './Mark';
import { TMark } from '../../types';

interface ISummary {
  totalNumberOfMarks: string | null;
  averageMark: string | null;
  markCounts: Record<number, number> | null;
}

const Summary: FC<ISummary> = ({ markCounts, totalNumberOfMarks, averageMark }) => (
  <Group header={<Header mode='tertiary'>Статистика</Header>}>
    <MiniInfoCell
      before={<Icon20EducationOutline style={{ marginTop: 4 }} />}
      after={<Mark size='s' mark={totalNumberOfMarks as TMark} />}
    >
      Суммарное количество оценок:
    </MiniInfoCell>
    <MiniInfoCell
      before={<Icon28BrainOutline style={{ marginTop: 4 }} width={20} height={20} />}
      after={<Mark size='s' mark={averageMark as TMark} />}
    >
      Общий средний балл:
    </MiniInfoCell>
    {markCounts && (
    <div style={{
      display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around', gap: 5,
    }}
    >
      {[2, 3, 4, 5].map((mark) => (
        markCounts[mark] > 0 && (
        <MiniInfoCell
          key={mark}
          before={<Mark mark={mark} size='s' />}
        >
          x
          {' '}
          {markCounts[mark]}
        </MiniInfoCell>
        )
      ))}
    </div>
    )}
  </Group>
);

export default Summary;