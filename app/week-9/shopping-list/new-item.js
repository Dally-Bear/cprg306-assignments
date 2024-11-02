"use client";
import { useState } from 'react';  

export default function Form({ onAddItem }) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = (event) => {
        event.preventDefault();
        setCount(count + 1);
    };

    const decrement = (event) => {
        event.preventDefault();
        setCount(count - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() === "" || count <= 0) {
            alert("Fields cannot be empty");
            return;
        }
        onAddItem({ name, quantity: count, category });
        setName("");
        setCount(0);     
    };

    return (
        <form className="flex flex-col ml-5 border-2 p-5 w-60 mx-auto border-black" onSubmit={handleSubmit}>
            <label className=" text-blue-600 ml-12" htmlFor="name"> Item name:</label>
            <input 
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="bg-blue-100 text-black p-2 rounded-md m-3 w-40 border-2 border-black"
            />
            
            <div className="flex flex-row justify-between bg-blue-300 text-blue-700 rounded-2xl w-40 m-3 border-2 border-black">
                <p className="text-center bg-blue-300 ml-8 rounded-md text-black">{count}</p>
                <div className="mr-3">
                    <button 
                        onClick={increment}
                        disabled={count === 20}
                        className=" text-black mr-8 hover:bg-blue-700"
                    >
                        +
                    </button>

                    <button 
                        onClick={decrement}
                        disabled={count === 0}
                        className="bg-blue-300 text-black mr-4 rounded-md hover:bg-blue-700"
                    >
                        -
                    </button>
                </div>
            </div>
            <select 
                className='m-3 w-40 border-2 border-black'
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            > 
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>

            <button 
                type="submit"
                className="bg-blue-300 text-black p-2 rounded-md m-3 w-40 hover:bg-blue-700 border-2 border-black"
            >
                Submit
            </button>
        </form>
    );
}