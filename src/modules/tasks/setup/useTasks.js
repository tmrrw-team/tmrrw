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


const useTasks = () => {

  return {
    tasks,
    todayTasks,
    tomorrowTasks,
    setTasks,
  };
};

export default useTasks;
