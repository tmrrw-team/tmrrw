import { ref, computed } from '@vue/composition-api';
import { parseISO, startOfToday, startOfTomorrow, isEqual } from 'date-fns';

import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from '../helpers/storage';

const tasksInitValue = loadTasksFromLocalStorage();

const tasks = ref(tasksInitValue);

const todayTasks = computed(() => {
  return tasks.value.filter(task => {
    return isEqual(parseISO(task.dayX), startOfToday())
  })
})

const tomorrowTasks = computed(() => {
  return tasks.value.filter(task => {
    return isEqual(parseISO(task.dayX), startOfTomorrow())
  })
})

const setTasks = (tasks) => {
  saveTasksToLocalStorage(tasks);
}

const updateTask = (taskToUpdate) => {
  tasks.value = tasks.value.map(task => {
    if (task.id !== taskToUpdate.id) {
      return task;
    }
    return taskToUpdate;
  })

  saveTasksToLocalStorage(tasks.value)
}


const useTasks = () => {

  return {
    tasks,
    todayTasks,
    tomorrowTasks,
    setTasks,
    updateTask,
  };
};

export default useTasks;
