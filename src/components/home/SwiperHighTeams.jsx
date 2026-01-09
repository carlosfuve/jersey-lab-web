import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "../../utils/horizontalLoop";
import { ScrollTrigger } from "gsap/all";
import useGetPopularTeams from "../../hooks/useGetPopularTeams";
import { useNavigate } from "react-router-dom";

export default function SwiperHighTeams() {
    const { popularTeams } = useGetPopularTeams();
    const container = useRef(null);
    const tlRef = useRef(null);
    const navigate = useNavigate();

    useGSAP(() => {
        const scrollingImages = container.current.children;

        tlRef.current = horizontalLoop(scrollingImages, {
            repeat: -1,
            speed: 0.3,
            paused: true
        });

        ScrollTrigger.create({
            trigger: container.current,
            start: "30% bottom",
            end: "bottom top",
            onEnter: () => tlRef.current?.play(),
            onEnterBack: () => tlRef.current?.play(),
            onLeave: () => tlRef.current?.pause(),
            onLeaveBack: () => tlRef.current?.pause(),
        });
    }, { scope: container });


    const handleTeamClick = (team) => {
        navigate(`/jerseys/?comp=${team.ligaId}&team=${team.teamId}`);
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return (
        <div className="py-5 w-[80dvw] mx-auto bg-amber-400" >
            <div ref={container} onMouseEnter={() => tlRef.current?.pause()} onMouseLeave={() => tlRef.current?.play()}
                className="flex overflow-hidden"
            >
                {popularTeams.map((team, index) => (
                    <img key={index} src={team.logo} onClick={() => handleTeamClick(team)}
                        className="h-30 p-6 object-contain shrink-0 cursor-pointer"

                    />
                ))}
            </div>

        </div>


    );
}
