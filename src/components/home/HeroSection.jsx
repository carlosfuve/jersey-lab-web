import ButtonSkeleton from "../ui/ButtonSkeleton";
import image6x6 from "../../assets/6x6.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    // TODO: Animate background of animated jerseys
    // TODO: Add Text Gsap to the hero section

    return (
        <div className="h-screen flex flex-col gap-10 pt-35">
            <div className=" flex flex-col gap-8 items-center ">
                <h1 className="text-6xl text-center leading-tight font-bold text-black/80">
                    Craft your jersey,<br /> represent your <span className="bg-linear-to-r from-primary via-primary to-secondary bg-clip-text text-transparent font-semibold">team</span>
                </h1>

                <p className="text-center text-sm  text-black/50">
                    Discover all the 25/26 season jerseys from Europe’s top football leagues, <br />
                    including iconic clubs like Barcelona, PSG, Bayern Munich, and more — all in one place.
                </p>

                <div className="flex gap-8">
                    <ButtonSkeleton colorBg={"bg-linear-to-r from-primary via-tertiary to-primary"} colorText={"text-white"} className="px-6 py-3 font-bold" handleClick={() => navigate('/jerseys')}>
                        Shop now
                    </ButtonSkeleton>
                </div>
            </div>

            <div className="overflow-hidden flex-1 bg-cover bg-center bg-no-repeat brightness-75">
                <img src={image6x6} alt="Jerseys Hero" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}