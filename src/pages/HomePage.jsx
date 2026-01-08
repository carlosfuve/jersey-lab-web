import HeroSection from "../components/home/HeroSection";
import SwiperHighTeams from "../components/home/SwiperHighTeams";
import BestSellers from "../components/home/BestSellers";
import { teams } from "../data/laliga.js";



export default function HomePage() {

    // Poner un swiper que vayan pasando los equipos destacados

    // Poner una sección de camisetas más vendidas

    // Poner directamente la tienda con un selector de liga y filtros 
    // Camisetas

    return (
        <div className="flex flex-col gap-1">
            <HeroSection />
            <SwiperHighTeams teams={teams} />
            <BestSellers />
        </div>
    )
}