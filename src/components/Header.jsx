import { useState } from 'react';
import LogoImg from '../assets/logo.webp'
import ButtonSkeleton from './ui/ButtonSkeleton';
import CartIcon from './icons/CartIcon';


export default function Header() {
    const [isRegistered] = useState(false);
    const sections = ["Competitions", "Popular", "Sales"];

    // TODO: Add cart on hover to the cart icon

    return (
        <header className="fixed z-10 top-4 left-0 right-0 w-[90dvw] max-w-250 h-20 mx-auto flex items-center justify-between px-8 py-10 rounded-xl bg-gray-100/80 custom-border custom-shadow">
            <img src={LogoImg} alt="Jersey Lab logo" width={60} />

            <div className="flex flex-1 gap-20 justify-center items-center">
                {sections.map((name, index) => (
                    <label key={index} className='text-gray-900/60 cursor-pointer hover:text-primary '>{name}</label>
                ))}
            </div>

            <div className="flex items-center justify-end gap-10 w-fit">
                <CartIcon />

                {isRegistered ? (
                    <label>icon person</label>
                ) : (
                    <div className="flex gap-3">
                        <ButtonSkeleton className="text-black px-4 py-2">
                            Log In
                        </ButtonSkeleton>

                        <ButtonSkeleton className="bg-black/80 text-white px-4 py-2">
                            Sign Up
                        </ButtonSkeleton>
                    </div>


                )}
            </div>

        </header>

    )
}