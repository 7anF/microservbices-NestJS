import { useState } from 'react'
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("Home");

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img  
                src={logo}
                alt="hoo bank"
                className='w-[124px] h-[32px]' 
            />

            <ul className='sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li 
                        key={nav.id}
                        className= {`font-poppins font-normal cursor-pointer text-[16px]
                            ${ index === navLinks.lengh-1 ? " mr-0" : "mr-10"}
                            ${active === nav.title ? "text-white" : "text-dimWhite"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a 
                            href={`#${nav.id}`}
                        >
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>  

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img 
                    src={toggle ? close : menu} 
                    alt="menu image" 
                    className='w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle((e) => !e)}
                />

                <div className={`${toggle ? 'flex' : "hidden"} p-6 bg-black-gradient
                    absolute top-20 right-0 my-2 w-full rounded-xl sidebar`}> 
                    <ul className='flex flex-col justify-start items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li 
                                key={nav.id}
                                className= {`font-poppins font-normal cursor-pointer text-[16px] 
                                text-white ${ index === navLinks.lengh-1 ? " mr-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a 
                                    href={`#${nav.id}`}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>  
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
