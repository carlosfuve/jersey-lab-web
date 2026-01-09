import premierSVG from '../assets/competitions/premier-league-white.svg';
import laligaIcon from '../assets/competitions/la-liga.png';
import { useState } from 'react';
import CardTshirt from '../components/ui/CardTshirt';


export default function SalesPage() {
    // Same Page structure as CompetitionPage.jsx
    const [currentPage, setCurrentPage] = useState(1);


    const handleCurrentPage = (page) => {
        setCurrentPage(page);
    }

    // Obtener los filtros aqui???

    const imgSHirt = "https://shop.atleticodemadrid.com/dw/image/v2/BKQJ_PRD/on/demandware.static/-/Sites-atm-master-catalog/default/dwe72f27b7/HM3200-407_1_.jpg?sw=300&sh=300";
    const ATMShirt = {
        image: imgSHirt,
        name: "Camiseta Hombre 3ª Equipación 25/26"
    }

    const competitions = [
        {
            name: "Premier League",
            svg: premierSVG
        },
        {
            name: "La Liga",
            svg: laligaIcon
        },
        {
            name: "Bundesliga",
            svg: premierSVG
        },
        {
            name: "Ligue 1",
            svg: laligaIcon
        }
    ]


    return (
        <div className="h-screen pt-32 flex flex-col items-center bg-orange-300">
            <div className="bg-red-300 w-[90dvw] flex flex-col gap-4 p-5">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        {competitions.map((competition) => (
                            <div key={competition.name} className='flex rounded-xl items-center py-1 px-2 border gap-1'>
                                <div> <img src={competition.svg} alt={competition.name} className="w-5 h-5" /></div>
                                <div className="text-md text-white">{competition.name}</div>

                            </div>
                        ))}
                        {/*  <div>Price</div> */}
                    </div>

                    <div>
                        <select className='border rounded-md'>
                            <option value="default">Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>


                <div className="flex flex-col items-center gap-4">
                    <div className="grid grid-cols-4 p-4 gap-10 items-stretch bg-red-600">
                        <CardTshirt tShirt={ATMShirt} />
                        <CardTshirt tShirt={ATMShirt} />
                        <CardTshirt tShirt={ATMShirt} />
                        <CardTshirt tShirt={ATMShirt} />
                    </div>

                    <div className="flex gap-4 text-xl">
                        <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200">{"<"}</button>
                        <button onClick={() => handleCurrentPage(1)} className={`px-4 py-2  rounded-lg shadow-md hover:bg-gray-200 ${currentPage === 1 ? "bg-red-200 text-white" : "bg-white"}`}>1</button>
                        <button onClick={() => handleCurrentPage(2)} className={`px-4 py-2  rounded-lg shadow-md hover:bg-gray-200 ${currentPage === 2 ? "bg-red-200 text-white" : "bg-white"}`}>2</button>
                        <button className={`px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 ${currentPage === 3 ? "bg-red-200 text-white" : "bg-white"}`}>3</button>
                        <button className={`px-4 py-2  rounded-lg shadow-md hover:bg-gray-200 ${currentPage === 4 ? "bg-red-200 text-white" : "bg-white"}`}>4</button>
                        <button className={`px-4 py-2  rounded-lg shadow-md hover:bg-gray-200 ${currentPage === 5 ? "bg-red-200 text-white" : "bg-white"}`}>5</button>
                        <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200">{">"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}