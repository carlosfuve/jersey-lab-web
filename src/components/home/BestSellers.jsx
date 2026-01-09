import CardTshirt from "../ui/CardTshirt"
import { useState } from "react"


export default function BestSellers() {
    const [currentPage, setCurrentPage] = useState(1);

    // TODO: Change text color to the Best Sellers

    const imgSHirt = "https://shop.atleticodemadrid.com/dw/image/v2/BKQJ_PRD/on/demandware.static/-/Sites-atm-master-catalog/default/dwe72f27b7/HM3200-407_1_.jpg?sw=300&sh=300";
    const ATMShirt = {
        image: imgSHirt,
        name: "Camiseta Hombre 3ª Equipación 25/26"
    }

    const handleCurrentPage = (page) => {
        setCurrentPage(page);
    }


    return (
        <div className="h-screen pt-25 py-10 flex flex-col items-center bg-gray-300">
            <h2 className="text-red-800 text-6xl text-center leading-tight font-bold">
                Best Sellers
            </h2>

            <div className="flex-1 flex flex-col items-center justify-center gap-10 bg-blue-100">
                <div className="grid grid-cols-4 grid-rows-1 p-4 gap-10 max-h-125 items-stretch bg-red-600">
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
    )

}