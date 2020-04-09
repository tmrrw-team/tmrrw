import { startOfTomorrow } from 'date-fns';

export const newTask = (title, dayX = startOfTomorrow()) => {

  return {
    title,
    dayX,
    done: false,
  };
};
