import LogoImg from '../assets/logo.webp';
import linkedInSVG from '../assets/linkedIn.svg';
import githubSVG from '../assets/github.svg';

export default function Footer() {

    return (
        <div className=" bg-gray-800/70 p-5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <label className="text-4xl text-white font-semibold">Jersey Lab</label>
                <img src={LogoImg} alt="Jersey Lab logo" width={50} />
            </div>

            <p className='text-white text-sm'>
                Esto no es un E-commerce de camisetas de futbol esto es un proyecto de programación para practicar.
                El proyecto esta realizado con React, TailwindCSS y Vite. <br /> El autor del proyecto es Carlos Fulgencio.
                Puedes contactar conmigo a través de <a href="https://www.linkedin.com/in/carlos-fulgencio/" target="_blank" rel="noreferrer" className='underline'>LinkedIn <img src={linkedInSVG} alt="LinkedIn logo" width={12} className='inline-block mb-1' /></a>
            </p>
            <div className='flex gap-5'>
                <img src={linkedInSVG} alt="LinkedIn logo" width={30} className='inline ml-1' />
                <img src={githubSVG} alt="GitHub logo" width={30} className='inline ml-1' />
            </div>
            {/* Add links to github repo */}


            <div className='flex gap-4 text-white text-sm'>
                <label>Privacy Policy</label>

                <label>Cookies</label>

                <label>Legal Notice - {new Date().getFullYear()} ©</label>
            </div>


        </div>
    )
}