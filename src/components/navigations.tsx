import {Link} from 'react-router-dom'


export function Navigations () {
    return(
        <nav className="h-[5] flex justify-between px-5 py-3 bg-black items-center text-white" >
            <span className="font-bold">React 2023</span>

            <span>
                <Link className='mr-2' to="/" >Product</Link>
                <Link to="/about" >About</Link>
            </span>
        </nav>
    )
}