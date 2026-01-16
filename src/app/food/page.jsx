import FoodCard from "@/components/cards/FoodCard";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`
  );

  const data = await res.json();
  return data.foods || [];
};

export const metadata = {
  title: "Food",
  description: "Best Fast Food In Dhaka,Bangladesh",
};
const FoodPage = async () => {
  const foods = await getFoods();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-9 gap-4">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodPage;
