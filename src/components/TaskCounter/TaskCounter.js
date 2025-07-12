import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';

import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);

  // На базі стану Redux  отримуємо похідні значення для активних та завершених завдань
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.text}>Active: {count.active} </p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
// The TaskCounter component displays the count of active and completed tasks.
// It uses the useSelector hook to access the tasks from the Redux store and calculates the counts
//
// The component renders two paragraphs showing the number of active and completed tasks.
// The styles are imported from a CSS module for styling the text.
