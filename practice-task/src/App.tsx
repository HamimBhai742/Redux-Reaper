import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { addTowNumber, clearSum } from './redux/sum/SumSlice';
function App() {
  const dispatch = useAppDispatch();
  const { sum } = useAppSelector((state) => state.sum);
  console.log(sum);
  const handelSubmitBtn = (e) => {
    e.preventDefault();
    const value1 = e.target.value1.value;
    const value2 = e.target.value2.value;
    dispatch(addTowNumber({ value1, value2 }));
    e.target.reset();
    console.log(value1, value2);
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handelSubmitBtn}>
        <div className='flex gap-4 items-center'>
          <input
            name='value1'
            type='number'
            className='border-2 py-1 pl-2'
            placeholder='0'
          />
          <p className='font-bold'>{'+'}</p>
          <input
            name='value2'
            type='number'
            className='border-2 py-1 pl-2'
            placeholder='0'
          />
          <p className='font-bold'> {'='}</p>
          <p className='font-bold'>{sum}</p>
        </div>
        <div className='flex gap-4'>
          <input
            type='submit'
            value='SUM'
            className='bg-blue-500 text-white py-1 mt-2 px-3 rounded-lg'
          />
        </div>
      </form>
      <button
        onClick={() => dispatch(clearSum())}
        className='bg-red-500 text-white py-1 mt-2 px-3 rounded-lg'
      >
        Clear
      </button>
    </div>
  );
}

export default App;
