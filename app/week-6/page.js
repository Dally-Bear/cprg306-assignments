import ItemList from "./item-list.js";

export default function Page() {
    return(
        <main className= "min-h-screen w-full  justify-center bg-black">
            <h1 className= "text-center text-4xl text-blue-700 bg-black mb-5"> Shopping List</h1>
            
            <ItemList/>
        </main>
    )
};


