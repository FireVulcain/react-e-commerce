import React from "react";

export const Rating = ({ rating, numReviews }) => {
    return (
        <div className="mb-2">
            <span className="text-[#f0c040] mb-2 m-0.5">
                <i className={rating >= 1 ? "fa fa-star" : rating >= 0.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            </span>
            <span className="text-[#f0c040] mb-2 m-0.5">
                <i className={rating >= 2 ? "fa fa-star" : rating >= 1.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            </span>
            <span className="text-[#f0c040] mb-2 m-0.5">
                <i className={rating >= 3 ? "fa fa-star" : rating >= 2.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            </span>
            <span className="text-[#f0c040] mb-2 m-0.5">
                <i className={rating >= 4 ? "fa fa-star" : rating >= 3.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            </span>
            <span className="text-[#f0c040] mb-2 m-0.5">
                <i className={rating >= 5 ? "fa fa-star" : rating >= 4.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            </span>
            <span className="text-[#404040] ml-2">{numReviews + " reviews"}</span>
        </div>
    );
};
