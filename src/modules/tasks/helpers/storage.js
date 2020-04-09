const LS_TASKS_KEY = 'tm-tasks';

export const loadTasksFromLocalStorage = () => {
  const data = localStorage.getItem(LS_TASKS_KEY);
  return data ? JSON.parse(data) : [];
}

export const saveTasksToLocalStorage = (tasks) => {
  const data = JSON.stringify(tasks);
  localStorage.setItem(LS_TASKS_KEY, data);
}
