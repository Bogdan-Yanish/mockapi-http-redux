import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "redux/operations";
import { getTasks } from "redux/selectors";


export const App = () => {
  const dispatch = useDispatch();
  const {items, isLoading, error} = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch]);


  return (
    <div>
      {isLoading && <b>Loading ...</b>}
      {error && <b>{error}</b>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};
