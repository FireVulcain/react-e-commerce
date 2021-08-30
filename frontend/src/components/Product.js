import React from "react";
import { Rating } from "./Rating";

export const Product = ({ product }) => {
    return (
        <div className="border-[0.1rem] border-gray-100 border-solid bg-[#f8f8f8] rounded-lg m-4">
            <a href={`/product/${product._id}`}>
                <img className="rounded-lg max-w-md w-full" src={product.image} alt={product.name} />
            </a>
            <div className="p-4">
                <a className="mb-2" href={`/product/${product._id}`}>
                    <h2 className="mb-2">{product.name}</h2>
                </a>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <div className="text-[2rem] mb-2">${product.price}</div>
            </div>
        </div>
    );
};
