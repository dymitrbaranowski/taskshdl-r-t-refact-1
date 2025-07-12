import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';

import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = value => {
    dispatch(setStatusFilter(value));
  };
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
// The StatusFilter component provides buttons to filter tasks by their status.
// It uses the Button component to render three buttons: "All", "Active", and "Completed".
// The selected prop is used to highlight the currently active filter.
// The component uses the useSelector hook to access the current status filter from the Redux store.
