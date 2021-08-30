import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export const Product = ({ product }) => {
    return (
        <div className="border-[0.1rem] border-gray-100 border-solid bg-[#f8f8f8] rounded-lg m-4">
            <Link to={`/product/${product._id}`}>
                <img className="rounded-lg max-w-md w-full" src={product.image} alt={product.name} />
            </Link>
            <div className="p-4">
                <Link className="mb-2" to={`/product/${product._id}`}>
                    <h2 className="mb-2">{product.name}</h2>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <div className="text-[2rem] mb-2">${product.price}</div>
            </div>
        </div>
    );
};
