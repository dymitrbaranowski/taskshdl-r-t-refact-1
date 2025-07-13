import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/taskSlice';

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Функція для обробки видалення завдання
  const handleDelete = () => {
    // Викликаємо екшен для видалення завдання
    dispatch(deleteTask(task.id));
  };
  // Додаємо обробник події на кнопку видалення
  // const handleButtonClick = event => {
  //   // Запобігаємо подальшій обробці події, щоб не спрацьовував клік на чекбокс
  //   event.stopPropagation();
  //   handleDelete();
  // };
  // // Повертаємо JSX для відображення завдання
  // // Додаємо обробник події на весь блок завдання
  // const handleTaskClick = () => {
  //   // Тут можна додати логіку для обробки кліку на завдання, наприклад, перемикання стану виконання
  // };
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        onClick={event => event.stopPropagation()} // Запобігаємо спрацьовуванню події на батьківському елементі
        className={css.checkbox}
        checked={task.completed}
        readOnly
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete /*handleButtonClick*/}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
