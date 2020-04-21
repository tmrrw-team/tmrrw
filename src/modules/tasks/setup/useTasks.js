import { ref, computed } from 'vue';
import {
  startOfToday,
  startOfTomorrow,
  isEqual,
  isBefore
} from 'date-fns';
import { generateTasks } from '../helpers/index';
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage
} from '../helpers/storage';

const tasksInitValue = loadTasksFromLocalStorage();

const tasks = ref(tasksInitValue);

const pastTasks = computed(() => {
  return tasks.value.filter(task => isBefore(task.dayX, startOfToday()));
});

const todayTasks = computed(() => {
  return tasks.value.filter(task => isEqual(task.dayX, startOfToday()));
});

const tomorrowTasks = computed(() => {
  return tasks.value.filter(task => isEqual(task.dayX, startOfTomorrow()));
});

const todayDoneTasks = computed(() => {
  return todayTasks.value.filter(task => task.done === true);
});

const setTasks = (tasksToSet) => {
  tasks.value = tasksToSet;

  saveTasksToLocalStorage(tasks.value);
};

const seedTasks = () => {
  const fakeTasks = generateTasks();

  setTasks(fakeTasks);
};

const addTask = (taskToAdd) => {
  tasks.value = [...tasks.value, taskToAdd];

  saveTasksToLocalStorage(tasks.value);
};

const removeTask = (taskId) => {
  tasks.value = tasks.value.filter(task => {
    return task.id !== taskId;
  });

  saveTasksToLocalStorage(tasks.value);
};

const updateTask = (taskToUpdate) => {
  if (!taskToUpdate.title) {
    removeTask(taskToUpdate.id);
    return;
  }

  tasks.value = tasks.value.map(task => {
    if (task.id !== taskToUpdate.id) {
      return task;
    }
    return taskToUpdate;
  });

  saveTasksToLocalStorage(tasks.value);
};


const useTasks = () => {

  return {
    tasks,
    pastTasks,
    todayTasks,
    tomorrowTasks,
    todayDoneTasks,
    setTasks,
    seedTasks,
    addTask,
    updateTask,
    removeTask
  };
};

export default useTasks;
