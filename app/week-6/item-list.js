"use client";
import itemsJson from './items.json';
import { useState } from 'react';



export default function ItemList() {
    const [items, setItems] = useState(itemsJson);
    const [sortCriterion, setSort] = useState('name');

    const sortItems = (criterion) => {
        const sortedItems = [...items].sort((a, b) => {
            if (criterion === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criterion === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
        setItems(sortedItems);
    };

    return (
            <div className= "text-center text-blue-700">
                <h1 className= "text-center text-2xl text-blue-700 mb-5"> Sort By:</h1>
                <button className="pr-2 text-xl" onClick={() => {setSort('name'); sortItems('name'); }}>Name</button>
                <button className="pl-2 text-xl" onClick={() => {setSort('category'); sortItems('category'); }}>Category</button>
                        <ul className='mt-5'>
                            {items.map((item, index) => (
                                <li key={index}>
                                    {item.name} - {item.quantity}
                                </li>
                            ))}
                        </ul>
        </div>
    );
}

