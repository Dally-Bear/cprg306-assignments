"use client";
import { useState, useEffect } from 'react';

export default function ItemList({ items, onItemSelect }) {
    const [sortedItems, setSortedItems] = useState(items);
    const [sortCriteria, setSortCriteria] = useState('name');

    useEffect(() => {
        sortItems(sortCriteria);
    }, [items, sortCriteria]);

    const sortItems = (criteria) => {
        const sorted = [...items].sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
        setSortedItems(sorted);
    };

    return (
        <div className="text-center text-black border-2 border-black ">
            <h1 className="text-center text-2xl text-blue-700 mb-5">Sort By:</h1>
            <button className="mr-4 text-xl bg-blue-200 rounded-md border-2 border-black" onClick={() => setSortCriteria('name')}>Name</button>
            <button className="ml-4 text-xl bg-blue-200 rounded-md border-2 border-black" onClick={() => setSortCriteria('category')}>Category</button>
            <div className="flex justify-center mt-5">
                <ul className="">
                    {sortedItems.map((item, index) => (
                        <li
                            className="m-2 rounded-sm bg-blue-300 w-60 text-center p-2 cursor-pointer border-2 border-black"
                            key={index}
                            onClick={() => onItemSelect(item.name)}
                        >
                            {item.name}
                            <br />
                            Buy {item.quantity} in {item.category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}