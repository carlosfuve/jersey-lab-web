import ButtonSkeleton from "../ui/ButtonSkeleton";
import image6x6 from "../../assets/6x6.png";

export default function HeroSection() {

    // TODO: Animate background of animated jerseys

    return (
        <div className="h-screen relative">
            <div className="absolute top-120 left-0 w-full h-2/4 bg-hero-section bg-cover bg-center bg-no-repeat brightness-75">
                <img src={image6x6} alt="Jerseys Hero" className="w-full h-full object-cover" />
            </div>
            <div className="translate-y-35 flex flex-col gap-8 items-center ">
                <h1 className="text-6xl text-center leading-tight font-bold">
                    Craft your jersey,<br /> represent your <span className="text-primary">team</span>
                </h1>

                <p className="text-center text-sm  text-black/50">
                    Discover all the 25/26 season jerseys from Europe’s top football leagues, <br />
                    including iconic clubs like Barcelona, PSG, Bayern Munich, and more — all in one place.
                </p>

                <div className="flex gap-8">
                    <ButtonSkeleton className="bg-black/80 text-white px-6 py-3">
                        Shop now
                    </ButtonSkeleton>
                    <ButtonSkeleton className="bg-red-900/80 text-white px-6 py-3">
                        Sales
                    </ButtonSkeleton>
                </div>
            </div>
        </div>
    )
}