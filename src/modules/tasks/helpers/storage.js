import { parseISO } from 'date-fns';

const LS_TASKS_KEY = 'tm-tasks';

export const loadTasksFromLocalStorage = () => {
  const data = localStorage.getItem(LS_TASKS_KEY);
  if (!data) {
    return [];
  }

  const tasks = JSON.parse(data);
  return tasks.map(item => ({
    ...item,
    dayX: parseISO(item.dayX)
  }))
}

export const saveTasksToLocalStorage = (tasks) => {
  // JSON.stringify converts Date to date ISO string
  const data = JSON.stringify(tasks);

  localStorage.setItem(LS_TASKS_KEY, data);
}
