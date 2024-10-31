"use client";
import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    // This component should receive a single prop: ingredient

    // Example usage of the ingredient prop
    const [mealIdeas, setMealIdeas] = useState([]);

    useEffect(() => {
        // Fetch meal ideas based on the ingredient
        if (ingredient) {
            fetchMealIdeas(ingredient);
        }
    }, [ingredient]);

    const fetchMealIdeas = async (ingredient) => {
        // Replace with your API call or logic to fetch meal ideas
        const response = await fetch(`/api/meals?ingredient=${ingredient}`);
        const data = await response.json();
        setMealIdeas(data);
    };

    return (
        <div>
            <h1>Meal Ideas for {ingredient}</h1>
            <ul>
                {mealIdeas.map((meal, index) => (
                    <li key={index}>{meal.name}</li>
                ))}
            </ul>
        </div>
    );
}