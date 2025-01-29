function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-teal-50'>
      <div className='box-content h-2/4 w-2/4 p-4 shadow-md bg-teal-100 rounded-md'>
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <h1 className='font-semibold text-xl'>Vite & React Template</h1>
          <div className='w-2/4 flex flex-row justify-center items-center'>
            <div className='w-20 mx-4 my-3'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png'
                alt='Vite logo'
              />
            </div>
            <div className='w-20 mx-4 my-3'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                alt='Vite logo'
              />
            </div>
          </div>

          <div className='mt-10'>
            <h2 className='text-lg'>With ESlint, Prettier & Husky</h2>
            <div className='w-full flex flex-row justify-center items-center'>
              <div className='w-10 mx-4 my-3'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png'
                  alt='ESLint logo'
                />
              </div>
              <div className='w-10 mx-4 my-3'>
                <img src='https://cdn.worldvectorlogo.com/logos/prettier-1.svg' alt='Prettier logo' />
              </div>
              <p className='text-3xl mx-4 my-3'>
                <span role='img' aria-label='Husky Logo'>
                  🐶
                </span>
              </p>
            </div>
          </div>

          <div className='mt-10'>
            <h3 className='text-md'>
              Start your project by deleting the elements present in <code>{'App.tsx'}</code>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
