import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";

import axios from "axios";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";

export const HomeView = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("/api/products");
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="flex flex-wrap items-center justify-center">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};
