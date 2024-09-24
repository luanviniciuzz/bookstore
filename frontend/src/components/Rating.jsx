import React from 'react';
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";

function Rating({ value, text, color }) {
    return (
        <div className="rating">
            <span>
                {value >= 1 ? (
                    <FaRegStar color={color} />
                ) : value >= 0.5 ? (
                    <FaRegStarHalf color={color} />
                ) : (
                    <FaRegStar color={color} />
                )}
            </span>

            <span>
                {value >= 2 ? (
                    <FaRegStar color={color} />
                ) : value >= 1.5 ? (
                    <FaRegStarHalf color={color} />
                ) : (
                    <FaRegStar color={color} />
                )}
            </span>

            <span>
                {value >= 3 ? (
                    <FaRegStar color={color} />
                ) : value >= 2.5 ? (
                    <FaRegStarHalf color={color} />
                ) : (
                    <FaRegStar color={color} />
                )}
            </span>

            <span>
                {value >= 4 ? (
                    <FaRegStar color={color} />
                ) : value >= 3.5 ? (
                    <FaRegStarHalf color={color} />
                ) : (
                    <FaRegStar color={color} />
                )}
            </span>

            <span>
                {value >= 5 ? (
                    <FaRegStar color={color} />
                ) : value >= 4.5 ? (
                    <FaRegStarHalf color={color} />
                ) : (
                    <FaRegStar color={color} />
                )}
            </span>

            {text && <span>{text}</span>}
        </div>
    );
}

export default Rating;
