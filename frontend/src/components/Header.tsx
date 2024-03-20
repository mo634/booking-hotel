import { Link } from 'react-router-dom'

function Header() {
    return (
        <header
            className='p-7  bg-main-color text-slate-100'
        >
            <div className="container mx-auto flex justify-between items-center">
            <Link to={"/"}
                className='text-2xl font-bold text-secondary-color'
            >MernHoliday.com</Link>

            <Link to={"/sign-in"}
                className=' bg-[#eee] text-main-color p-2 rounded-md capitalize duration-500 hover:opacity-80'
            >
                sign in
            </Link>

            </div>
        </header>
    )
}

export default Header