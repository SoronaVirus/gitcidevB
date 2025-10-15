
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name){

  const trimmedName = name.trim();
  
  const newTask = {
  id: nextId++,
  name: trimmedName,
  done: false
  };

  tasks.push(newTask);

  return newTask;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  task.done = !task.done;
  return task;
}

function countDone() {
  return tasks.filter(t => t.done).length;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, toggleTask, addTask, countDone };
