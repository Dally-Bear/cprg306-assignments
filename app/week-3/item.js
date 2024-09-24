//Building an item component which accepts name, quantity, and category as props and displays them in a list item element.
//Style using Tailwind CSS
export default function Item({name, quantity, category}) {
    return (
        <div> 
            <div>
                <ul>
                    <li className="bg-black-200  m-2 shadow-lg text-center">
                    <div className="font-bold text-blue-700 text-xl text-center bg-yellow-100">Name: {name}</div>
                    <div className="text-blue-700 text-center bg-yellow-100">Quantity: {quantity}</div>
                    <div className="text-blue-700 text-center bg-yellow-100">Category: {category}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
};


/*
export default function Item(name, quantity, category) {
    return (
        <section className="m-2">
            <h2 className=" text-blue-800 font-bold"> {props.name}</h2>
            <p>name: {props.name}</p>
            <p>className="text-blue-600" quantity: {props.quantity}</p>
            <p>category: {props.category}</p>
        </section>
    );
}
*/