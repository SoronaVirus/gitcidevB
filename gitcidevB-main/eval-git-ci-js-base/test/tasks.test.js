const { getTasks, reset, toggleTask, addTask, countDone } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('addTask trims name and sets done=false', () => {
  const task = addTask('  Acheter du pain  ');
  expect(task.name).toBe('Acheter du pain');
  expect(task.done).toBe(false);
});

test('toggleTask inverts done', () => {
  const t = addTask('Tâche test');
  expect(toggleTask(t.id).done).toBe(true);
  expect(toggleTask(t.id).done).toBe(false);
});

test('countDone counts correctly', () => {
  const names = ['T1', 'T2', 'T3', 'T4'];
  const tasks = names.map(addTask);

  // On complète T1 et T3
  [tasks[0], tasks[2]].forEach(t => toggleTask(t.id));

  expect(countDone()).toBe(2);

  // On décoche T3
  toggleTask(tasks[2].id);
  expect(countDone()).toBe(1);

  // On complète toutes
  tasks.forEach(t => toggleTask(t.id));
  expect(countDone()).toBe(4);
});
