"use client";


import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {setCount(count + 1);};
    const decrement = () => {setCount(count - 1);};

    return (
        <div className="flex flex-col items-center bg-black rounded-2xl w-60 justify-items-center text-center border-4">
            
            <h1 className=" text-yellow-500">Counter</h1>
            <p className=" text bg-yellow-500 w-10 rounded-md">{count}</p>
            <div>
                <button 
                    onClick={increment}
                    disabled={count === 20}
                    className=" bg-yellow-500 text-black mr-10 mb-4 w-10 rounded-md hover:bg-red-700"
                    >+
                </button>

                <button 
                    onClick={decrement}
                    disabled={count === 1}
                    className=" bg-yellow-500 text-black ml-10 mb-4 w-10 rounded-md hover:bg-red-700"
                    >-
                </button>
            </div>
        </div>
    );
}
