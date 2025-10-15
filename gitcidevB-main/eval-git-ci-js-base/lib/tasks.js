
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name){

  const newTask = {
  id: nextId++,
  name: trimmedName,
  done: false
  };

  tasks.push(newTask);

  return newTask;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, addTask };
