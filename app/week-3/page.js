
import ItemList from "./item-list.js";

export default function Page() {
    return(
        <main className="w-full flex justify-center flex-col bg-yellow-100">
            <h1 className= "text-center text-4xl text-blue-700 bg-yellow-100 mb-5"> Shopping List</h1>
            
            <ItemList/>
        </main>
    )
};       