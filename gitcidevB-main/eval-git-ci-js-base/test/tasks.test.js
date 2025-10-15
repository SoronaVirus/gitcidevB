const { getTasks, reset, toggleTask, addTask} = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('addTask adds a new task with trimmed name and done=false', () => {
  const task = addTask('  Acheter du pain  ');
  expect(task).toEqual({
    id: 1,
    name: 'Acheter du pain',
    done: false
  });

  // Vérifie que la tâche est bien ajoutée dans la liste
  expect(getTasks()).toHaveLength(1);
  expect(getTasks()[0]).toEqual(task);
});

test('addTask increments id for each new task', () => {
  const t1 = addTask('Première tâche');
  const t2 = addTask('Deuxième tâche');
  expect(t2.id).toBe(t1.id + 1);
});
