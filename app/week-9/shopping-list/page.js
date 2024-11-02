"use client";

import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [ingredient, setIngredient] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        let finishedStr = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        finishedStr = finishedStr.trim();
        finishedStr = finishedStr.split(",")[0];
        setIngredient(finishedStr);
    };

    return (
        <main className="min-h-screen min-w-screen bg-gray-400">
            <h1 className="text-4xl text-blue-700 bg-gray-400 mb-5 ml-7">Shopping List</h1>
            <div className="flex ">
                <div className="flex flex-row w-full max-w-6xl">
                    <div className=" p-5">
                        <NewItem onAddItem={handleAddItem} />
                    </div>
                    <div className="p-5">
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="p-5">
                        <MealIdeas ingredient={ingredient} />
                    </div>
                </div>
            </div>
           
        </main>
    );
}