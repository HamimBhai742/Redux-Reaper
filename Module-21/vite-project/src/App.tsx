import './App.css';
import { decrement, increment } from './redux/counter/CounterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks/hook';

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const handelIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handelDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };
  return (
    <div>
      <div>
        <h3>Redux ToolKit </h3>
      </div>
      <div>
        <button onClick={() => handelIncrement(10)}>Increment by 10</button>
        <button onClick={() => handelIncrement(1)}>Increment</button>
        <p>{count}</p>
        <button onClick={() => handelDecrement(10)}>Decrement by 10</button>
        <button onClick={() => handelDecrement(1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
