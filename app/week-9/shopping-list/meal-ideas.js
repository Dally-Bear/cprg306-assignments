"use client";
import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    const loadMealIdeas = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            setMeals(data.meals || []); 
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Meal Ideas</h1>
            {ingredient ? (
                meals && meals.length > 0 ? ( 
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal}>
                                <h2>{meal.strMeal}</h2>
                                <img src={meal.strMealThumb} alt="meal" style={{ width: '50px', height: '50px' }} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No meal ideas found for {ingredient}.</p>
                )
            ) : (
                <p>Please select an ingredient.</p>
            )}
        </div>
    );
}