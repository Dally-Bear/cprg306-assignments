"use client";
import ItemList from "./item-list";
import Form from "./new-item";
import itemData from "./items.json";
import { useState } from "react";



export default function Page() {
    const [items, setItems] = useState(itemData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    
    return(
        <main className= "min-h-screen w-full  justify-center bg-black">
            <h1 className= "text-center text-4xl text-blue-700 bg-black mb-5"> Shopping List</h1>
            <Form onAddItem= {handleAddItem}/>
            <ItemList items= {items}/>
        </main>
    )
};

