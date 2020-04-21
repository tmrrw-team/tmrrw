import { startOfToday, startOfYesterday, startOfTomorrow } from 'date-fns';
import { nanoid } from 'nanoid';

export const newTask = (title, dayX = startOfTomorrow()) => {

  return {
    id: nanoid(),
    title,
    dayX,
    done: false
  };
};

export const generateTasks = () => {
  const pastTasks = [
    newTask('Task from the past 1', startOfYesterday()),
    newTask('Task from the past 2', startOfYesterday())
  ];

  const todayTasks = [
    newTask('First task', startOfToday()),
    newTask('Second task', startOfToday()),
    newTask(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit veritatis quasi minus non dignissimos ipsum vel tempore libero sint necessitatibus vero voluptatem ea nemo, esse deserunt! Quasi maxime tempora blanditiis officiis nisi a dolor perferendis distinctio asperiores nulla? Distinctio perferendis odit repellat quae aut architecto fugit nobis sapiente nesciunt.',
      startOfToday()
    ),
    newTask('Another task', startOfToday())
  ];

  const tomorrowTasks = [
    newTask('Task from the future 1'),
    newTask(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit veritatis quasi minus non dignissimos ipsum vel tempore libero sint necessitatibus vero voluptatem ea nemo, esse deserunt! Quasi maxime tempora blanditiis officiis nisi a dolor perferendis distinctio asperiores nulla? Distinctio perferendis odit repellat quae aut architecto fugit nobis sapiente nesciunt.'
    ),
    newTask('Task from the future 2')
  ];

  return [...pastTasks, ...todayTasks, ...tomorrowTasks];
};
