
export default function Item({name, quantity, category}) {
    return (
        <div> 
            <div className="w-full justify-center flex">
                <ul>
                    <li className="bg-black-200  text-center flex-col">
                    <div className="font-bold text-blue-700 text-xl text-center bg-yellow-100">Name: {name}</div>
                    <div className="text-blue-700 text-center bg-yellow-100">Quantity: {quantity}</div>
                    <div className="text-blue-700 text-center bg-yellow-100">Category: {category}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
};
