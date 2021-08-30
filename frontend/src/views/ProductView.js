import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Rating } from "../components/Rating";
import data from "../data";

export const ProductView = (props) => {
    const product = data.products.find((x) => x._id === props.match.params.id);

    if (!product) return <Redirect to="/" />;

    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className="flex flex-wrap justify-between items-start">
                <div className="flex-grow-[2] flex-shrink-[1] w-[50rem]">
                    <img className="w-full" src={product.image} alt={product.name} />
                </div>
                <div className="flex-grow-[1] flex-shrink-[1] w-[25rem]">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </li>
                        <li>Price : ${product.price}</li>
                        <li>
                            Description: <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="flex-grow-[1] flex-shrink-[1] w-[25rem]">
                    <div className="border-[0.1rem] border-gray-100 border-solid bg-[#f8f8f8] rounded-lg m-4 p-4">
                        <ul>
                            <li>
                                <div className="flex flex-wrap justify-between items-center">
                                    <div>Price:</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-wrap justify-between items-center">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="text-[#20a020]">In Stock</span>
                                        ) : (
                                            <span className="text-[#a02020]">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="p-4 rounded-lg bg-[#f0c040] w-full mt-4 transition duration-300 hover:bg-[#e6a700]">
                                    Add to Cart
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
