import { startOfTomorrow } from 'date-fns';
import { nanoid } from 'nanoid';

export const newTask = (title, dayX = startOfTomorrow()) => {

  return {
    id: nanoid(),
    title,
    dayX,
    done: false,
  };
};
