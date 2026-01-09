import { useState } from 'react';
import LogoImg from '../assets/logo.webp';
import ButtonSkeleton from './ui/ButtonSkeleton';
import CartIcon from './icons/CartIcon';
import { useNavigate, useLocation } from 'react-router-dom';
import { sections } from '../data/sections';


export default function Header() {
    // TODO: Add cart on hover to the cart icon
    // TODO: Private route for user profile when logged in

    const [isRegistered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRedirect = (route) => () => {
        navigate(route);
    }

    return (
        <header className="fixed z-10 top-4 left-0 right-0 w-[90dvw] max-w-250 h-20 mx-auto flex items-center justify-between px-8 py-10 bg-gray-100/80 rounded-xl backdrop-blur custom-shadow">
            <img onClick={handleRedirect('')} src={LogoImg} alt="Jersey Lab logo" width={60} className='cursor-pointer' />

            <div className="flex flex-1 gap-20 justify-center items-center">
                {sections.map((section, index) => (
                    <label key={index} onClick={handleRedirect(section.route)} className={`cursor-pointer hover:text-primary ${location.pathname === section.route ? 'text-secondary scale-110 font-bold' : 'text-gray-900/60'}`}>{section.name}</label>
                ))}
            </div>

            <div className="flex items-center justify-end gap-10 w-fit">
                <CartIcon />

                {isRegistered ? (
                    <label>TODO: icon person</label>
                ) : (
                    <div className="flex gap-3">
                        <ButtonSkeleton colorText={"text-black"} colorBg={"bg-white/60"} handleClick={handleRedirect('logIn')}>
                            Log In
                        </ButtonSkeleton>

                        <ButtonSkeleton colorText={"text-white"} colorBg={"bg-black/90"} >
                            Sign Up
                        </ButtonSkeleton>
                    </div>
                )}
            </div>

        </header>

    )
}