"use client";
import { useState } from 'react';



export default function ItemList( {items} ) {
    const [sortCriteria, setSort] = useState('name');

    const sortItems = (criteria) => {
        const sortedItems = [...items].sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
        setItems(sortedItems);
    };

    return (
        <div className="text-center text-blue-700">
            <h1 className="text-center text-2xl text-blue-700 mb-5">Sort By:</h1>
            <button className="mr-4 text-xl bg-blue-400 rounded-md" onClick={() => { setSort('name'); sortItems('name'); }}>Name</button>
            <button className="ml-4 text-xl bg-blue-400 rounded-md" onClick={() => { setSort('category'); sortItems('category'); }}>Category</button>
            <div className="flex justify-center mt-5">
                <ul className="list-none">
                    {items.map((item, index) => (
                        <li className="mb-5 bg-blue-300 w-56 rounded-xl text-center p-2" key={index}>
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

