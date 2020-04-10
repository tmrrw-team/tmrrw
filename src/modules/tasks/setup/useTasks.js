import { ref, computed } from '@vue/composition-api';
import { startOfToday, startOfTomorrow, isEqual } from 'date-fns';

import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from '../helpers/storage';

const tasksInitValue = loadTasksFromLocalStorage();

const tasks = ref(tasksInitValue);

const todayTasks = computed(() => {
  return tasks.value.filter(task => isEqual(task.dayX, startOfToday()))
})

const tomorrowTasks = computed(() => {
  return tasks.value.filter(task => isEqual(task.dayX, startOfTomorrow()))
})

const setTasks = (tasks) => {
  saveTasksToLocalStorage(tasks);
}

const addTask = (taskToAdd) => {
  tasks.value = [...tasks.value, taskToAdd]

  setTasks(tasks.value);
}

const updateTask = (taskToUpdate) => {
  tasks.value = tasks.value.map(task => {
    if (task.id !== taskToUpdate.id) {
      return task;
    }
    return taskToUpdate;
  })

  setTasks(tasks.value);
}


const useTasks = () => {

  return {
    tasks,
    todayTasks,
    tomorrowTasks,
    setTasks,
    addTask,
    updateTask,
  };
};

export default useTasks;
