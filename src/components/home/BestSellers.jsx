import CardTshirt from "../ui/CardTshirt"


export default function BestSellers() {

    // TODO: Change text color to the Best Sellers

    const imgSHirt = "https://shop.atleticodemadrid.com/dw/image/v2/BKQJ_PRD/on/demandware.static/-/Sites-atm-master-catalog/default/dwe72f27b7/HM3200-407_1_.jpg?sw=300&sh=300";
    const ATMShirt = {
        image: imgSHirt,
        name: "Camiseta Hombre 3ª Equipación 25/26"
    }

    return (
        <div className="h-screen bg-gray-300 py-10 flex flex-col items-center gap-8 ">
            <h2 className="text-red-800 text-6xl text-center leading-tight font-bold">
                Best Sellers
            </h2>

            <div className=" bg-blue-100 flex flex-col items-center gap-8 ">
                <div className="grid grid-cols-2 grid-rows-2 py-4 gap-8">
                    <CardTshirt tShirt={ATMShirt} />
                    <CardTshirt tShirt={ATMShirt} />
                    <CardTshirt tShirt={ATMShirt} />
                    <CardTshirt tShirt={ATMShirt} />
                </div>

                <div>
                    Number to change page
                </div>
            </div>
        </div>
    )

}