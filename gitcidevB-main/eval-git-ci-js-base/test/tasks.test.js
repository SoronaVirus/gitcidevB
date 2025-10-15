const { getTasks, reset, toggleTask, addTask, countDone} = require('../lib/tasks');

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

test('toggleTask change le statut done d’une tâche existante', () => {
  const t = addTask('Shifumi en 18');
  expect(t.done).toBe(false);

  const toggled = toggleTask(t.id);
  expect(toggled.done).toBe(true);

  const toggledAgain = toggleTask(t.id);
  expect(toggledAgain.done).toBe(false);
});

test('toggleTask retourne null si l’id n’existe pas', () => {
  const result = toggleTask(999);
  expect(result).toBeNull();
});

test('countDone returns correct number of done tasks', () => {
  const t1 = addTask('Faire les courses');
  const t2 = addTask('Envoyer le mail');
  const t3 = addTask('Réviser examen');

  // Simule des tâches terminées
  t1.done = true;
  t3.done = true;

  expect(countDone()).toBe(2);
});

test('countDone handles empty task list', () => {
  expect(countDone()).toBe(0);
});