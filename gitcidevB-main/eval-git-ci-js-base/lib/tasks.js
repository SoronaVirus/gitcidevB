
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
  return tasks[id];
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, toggleTask, addTask };
