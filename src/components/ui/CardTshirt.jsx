

export default function CardTshirt({ tShirt }) {

    {/*<div className="bg-gray-300 rounded-md px-2 py-1 flex gap-2 items-center w-fit">
                            <button

                                className="px-2 text-md hover:text-red-600"
                            >
                                -
                            </button>

                            <span className="bg-white px-2 py-1 rounded-sm min-w-8 text-center">
                                1
                            </span>

                            <button

                                className="px-2 text-md hover:text-green-600"
                            >
                                +
                            </button>
                        </div>*/}

    return (
        <div className="bg-white border rounded-lg p-4 flex flex-col gap-2 relative h-full">
            {/*<span className="text-white text-xs px-2 py-1 rounded-md bg-red-900 absolute top-2 right-2">-20%</span>*/}
            <div className="flex items-center justify-center h-60 mb-2">
                <img src={tShirt.image} alt={tShirt?.name} className="max-h-full max-w-full object-contain" />
            </div>
            {/*<div> Numero de pedidos</div>*/}
            <h3 className="text-sm font-semibold">{tShirt?.name}</h3>
            <div className="flex gap-3">
                <label className=" text-black/70 text-sm">29,99€</label>
                {/*<label className="line-through decoration-red-900 text-black/70">29,99€</label>*/}
                {/*<label className="text-red-900">24,99€</label>*/}
            </div>
            <button className=" cursor-pointer text-[12px] bg-black/80 text-white py-2 px-4 rounded-lg hover:bg-red-900 w-fit mt-auto self-end">
                Add to Cart
            </button>
        </div>
    )
}