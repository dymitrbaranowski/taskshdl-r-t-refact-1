import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';
// Import the addTask action from actions.js
import { addTask } from 'redux/actions';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value.trim();
    if (text === '') {
      alert('Please enter a task');
      return;
    }
    // Dispatch the addTask action with the text from the form
    dispatch(addTask(text));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
//
// The TaskForm component allows users to add new tasks by submitting a form.
// It uses the Redux dispatch function to send the addTask action with the task text.
//
