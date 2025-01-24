
const App = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-8 py-36 bg-gradient-to-tl min-h-screen from-emerald-200 to-gray-200'>
                <h1 className='text-4xl md:text-7xl font-semibold'>Ooops!</h1>
                <p className="text-xl">This page does not exist</p>
                <a href='/'>
                    <button className='bg-emerald-800 hover:border hover:border-emerald-800 hover:bg-white text-white hover:text-emerald-800  outline-none px-4 py-3 hover:scale-105 transition-all duration-300 ease-in-out'>Back to Home</button>
                </a>
            </div>

        </div>
    )
}

export default App;