import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


function Navbar() {
let navLinks = [
    {name:'Home' ,link: '/Home', id: 0},
    {name:'Apps' ,link: '/Apps', id: 1},
    {name:'News' ,link: '/News', id: 2},
]

const [open, setOpen] = useState(false)

    return ( 
    <header className='top-0 left-0 shadow-2xl w-full sticky z-[50]'>
        <div className=" flex md:justify-between justify-center flex-col md:flex-row  z-[10]
             p-2 md:items-center bg-[#062c43] h-[75px]">

            <div>
                <h1 className="text-white ml-4 text-2xl font-bold ">
                    <span className="text-glow">CoinWatch</span>
                <span className="span-material text-3xl">.Io</span> </h1>
            </div>

            <div className="absolute right-5 top-6 text-3xl text-[#9ccddc] md:hidden
            hover:text-[white] duration-150 ease-in-out hover:scale-[1.04] cursor-pointer">
                    <ion-icon onClick={()=>setOpen(!open)} name={open ? 'close': 'apps-outline'}></ion-icon>
            </div>

            <div className="md:static md:z-[1] z-[-1] ">
            <ul className={`flex md:flex-row flex-col  mr-4 flex md:static absolute
             w-full  md:bg-[transparent] md:mt-6 mt-[30px] ${open ? 'top-[45px]   bg-[#054569] ' : 'top-[-360px] '} 
            duration-500 ease-in-out left-[-0.1px]  pb-[25px]` }>
                {
                navLinks.map(link => 
                    <Link to={link.link} key={link.id}> 
                    {/* <a href={link.link}> */}
                        <li 
                        className="text-white md:ml-6 ml-7 h font-semibold 
                        hover:underline hover:text-[white] duration-150 ease-in-out 
                        hover:scale-[1.02] md:p-2 py-4" 
                        
                        key={link.id}>
                        {link.name}
                        </li>
                    {/* </a> */}
                    </Link>
                )
                }
                <button className=" text-white border-[2px] rounded-md px-2 md:py-1 py-1 md:w-[100px] w-[200px] 
                mx-5 border-[#9ccddc]  md:bg-[#054569] bg-[#062c43] font-semibold hover:bg-[#9ccddc] md:mt-0 mt-2 
                hover:text-[white] duration-200 ease-in-out hover:scale-[1.04]">
                    LOGIN</button>
                
            </ul>
                
            </div>
        </div>
    </header>
     );
}

export default Navbar;