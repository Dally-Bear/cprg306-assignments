"use client";

import { useState } from 'react';  // Make sure to import useState

export default function Form() {

    const [count, setCount] = useState(0);
    const increment = () => {setCount(count + 1);};
    const decrement = () => {setCount(count - 1);};

    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);  // Log the name when the form is submitted
    };
    
    return (
        <form className="flex flex-col justify-center text-center "
         onSubmit={handleSubmit}>
            <label className= "text-center text-yellow-500"  htmlFor="name" >Name</label>
            <input 
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="bg-blue-100 text-black p-2 rounded-md m-3"
            />
            
            <div className="flex flex-row justify-between bg-black rounded-2xl w-72  p-2 m-3">
                
                
                <p className=" text bg-yellow-500 w-28 h-5 rounded-md">{count}</p>
                <div>
                    <button 
                        onClick={increment}
                        disabled={count === 20}
                        className=" bg-yellow-500 text-black  h-5 mb-4 w-14 ml-2 rounded-md hover:bg-red-700"
                        >+
                    </button>

                    <button 
                        onClick={decrement}
                        disabled={count === 1}
                        className=" bg-yellow-500 text-black ml-4 mb-4 w-14 h-5 rounded-md hover:bg-red-700"
                        >
                    </button>
                </div>
            </div>
            <select className='m-3'> 
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
                className="bg-blue-100 text-black p-2 rounded-md m-3  hover:bg-red-700"
            >
                Submit
            </button>
    
           
        </form>
    );
}
