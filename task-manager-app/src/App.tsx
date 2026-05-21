import { useMemo, useState } from 'react';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedText = taskText.trim();
    if (!trimmedText) {
      return;
    }

    setTasks((current) => [
      ...current,
      { id: crypto.randomUUID(), text: trimmedText, completed: false },
    ]);
    setTaskText('');
  };

  const handleToggle = (id: string) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return (
    <main className="app-shell">
      <section className="panel">
        <header className="hero">
          <h1>Task Manager</h1>
          <p>Track your work, finish more, and keep your day organized.</p>
        </header>

        <form className="task-form" onSubmit={handleSubmit}>
          <label htmlFor="task-input">New task</label>
          <div className="task-input-row">
            <input
              id="task-input"
              type="text"
              value={taskText}
              onChange={(event) => setTaskText(event.target.value)}
              placeholder="Enter a task"
              aria-label="Task description"
            />
            <button type="submit">Add</button>
          </div>
        </form>

        <div className="summary">
          <span>{tasks.length} task{tasks.length === 1 ? '' : 's'}</span>
          <span>{completedCount} completed</span>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">No tasks yet. Add one to get started.</div>
        ) : (
          <ul className="task-list" aria-live="polite">
            {tasks.map((task) => (
              <li key={task.id} className={task.completed ? 'task completed' : 'task'}>
                <button
                  type="button"
                  className="check-button"
                  aria-pressed={task.completed}
                  onClick={() => handleToggle(task.id)}
                >
                  <span>{task.completed ? '✓' : ''}</span>
                </button>
                <span className="task-text">{task.text}</span>
                <button className="delete-button" type="button" onClick={() => handleDelete(task.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
