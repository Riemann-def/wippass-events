export default function LoadingPage() {
  return (
    <div className='flex justify-center items-center bg-white h-screen overflow-hidden dark:invert'>
        <span className='sr-only'>Loading...</span>
        <div className='flex space-x-2'>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
        </div>
    </div>
  );
}
