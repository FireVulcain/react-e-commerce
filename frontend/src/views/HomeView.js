import React from "react";
import { Product } from "../components/Product";
import data from "./../data";

export const HomeView = () => {
    return (
        <div>
            <div className="flex flex-wrap items-center justify-center">
                {data.products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};
