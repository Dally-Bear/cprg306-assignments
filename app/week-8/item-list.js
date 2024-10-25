"use client";
import { useState, useEffect } from 'react';

export default function ItemList({ items }) {
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
        <div className="text-center text-blue-700">
            <h1 className="text-center text-2xl text-blue-700 mb-5">Sort By:</h1>
            <button className="mr-4 text-xl bg-blue-300 rounded-xl" onClick={() => setSortCriteria('name')}>Name</button>
            <button className="ml-4 text-xl bg-blue-300 rounded-xl" onClick={() => setSortCriteria('category')}>Category</button>
            <div className="flex justify-center mt-5">
                <ul className="list-none">
                    {sortedItems.map((item, index) => (
                        <li className="mb-5 bg-blue-300 w-60 text-center p-2" key={index}>
                            {item.name}, {item.quantity} {item.category === 'dairy' ? '🥛' : ''}
                            <br />
                            Buy {item.quantity} in {item.category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}