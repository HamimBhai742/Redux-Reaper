import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { clearSubs, subtraction } from './redux/substraction/subsSlice';

function App() {
  const dispatchs = useAppDispatch();
  const { sub } = useAppSelector((state) => state.sub);
  const handelSubmitBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const value1 = form.value1.value;
    const value2 = form.value2.value;
    dispatchs(subtraction({ value1, value2 }));
    form.reset();
    console.log(value1, value2);
  };
  return (
    <div>
      <h1 className='text-center font-semibold text-3xl my-6'>
        Substarction Two Number
      </h1>
      <div className='flex items-center justify-center'>
        <form onSubmit={handelSubmitBtn}>
          <div className='flex gap-4 items-center'>
            <input
              name='value1'
              type='number'
              className='max-w-20 border py-2'
            />
            <span className='font-bold'>{'-'}</span>
            <input
              name='value2'
              type='number'
              className='max-w-20 border py-2'
            />
            <span className='font-bold'>{'='}</span>
            <span>{sub}</span>
          </div>

          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded-sm mt-5'
          >
            Submit
          </button>
        </form>

        <button
          onClick={() => dispatchs(clearSubs())}
          className='bg-red-500 btn text-white py-2 px-4 rounded-sm'
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
