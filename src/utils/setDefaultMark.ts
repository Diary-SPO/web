import { Task } from 'diary-shared';
import { TextMark } from '../types';
// TODO: можно с помощью неё фиксить ошибки с неправильными оценами
const setDefaultMark = (task: Task): TextMark => {
  if (task.isRequired && !task.mark) {
    return 'Д';
  }

  if (task.type === 'Home' && !task.mark) {
    return 'ДЗ';
  }

  return task.mark || '';
};

export default setDefaultMark;