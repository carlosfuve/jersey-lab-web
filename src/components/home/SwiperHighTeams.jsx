import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "../../utils/horizontalLoop";
import { ScrollTrigger } from "gsap/all";

export default function SwiperHighTeams({ teams }) {
    const container = useRef(null);

    useGSAP(() => {
        const scrollingImages = container.current.children;

        const tl = horizontalLoop(scrollingImages, {
            repeat: -1,
            speed: .3,
            paused: true
        });


        ScrollTrigger.create({
            trigger: container.current,
            start: "30% bottom",
            end: "bottom top",

            onEnter: () => tl.play(),
            onEnterBack: () => tl.play(),

            onLeave: () => tl.pause(),
            onLeaveBack: () => tl.pause(),
        });

    }, { scope: container });

    return (
        <div className="px-15 py-5" >
            <div ref={container} className="flex overflow-hidden">
                {[...teams].map((team, index) => (
                    <img key={index} src={team} className="h-30 p-6 object-contain shrink-0" />
                ))}
            </div>
        </div>


    );
}
