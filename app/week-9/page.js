"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page(){
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

// Sign in to Firebase with GitHub authentication
const login = async () => {
  await gitHubSignIn();
}

// Sign out of Firebase
const logout = async () => {
  await firebaseSignOut();
}

if (user === null) {
  return (
    <main className="text-center min-h-screen min-w-screen bg-gray-400 ">
        <h1 className="text-3xl font-bold m-2">Shopping List App</h1>
            <div>
            <p className="m-2 mb-8">Please log in to see the shopping list</p>
                <button className="p-5 bg-blue-300 mr-5 rounded-md" onClick={login}>Login with GitHub</button>
            </div>
    </main>
  )
}

return (
    <main className="text-center min-h-screen min-w-screen bg-gray-400" >
        <h1 className="text-3xl font-bold m-2">Shopping List App</h1>
        <div>
            <Link href="/week-9/shopping-list" className="bg-blue-300 hover:bg-red-400 text-black font-bold py-2 px-4 rounded ml-6 mt-3 p-5">
                Go to Shopping List
            </Link>
            <div className="p-5">
                <button className="bg-blue-300 hover:bg-red-400 text-black font-bold py-2 px-4 rounded ml-6 mt-3" onClick={logout}>Logout</button>
                <button className="bg-blue-300 hover:bg-red-400 text-black font-bold py-2 px-4 rounded ml-6 mt-3" onClick={logout}>Logout</button>
            </div>
        </div>
    </main>
);
 
}