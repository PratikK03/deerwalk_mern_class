

import React from 'react'
import  propTypes  from "prop-types"

const Rating = ({ val, color }) => {
    return (
        <div className="rating">
            <span> 
                <i style={{ color }} className={val >= 1 ? "fas fa-star" : 
                   val >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}>
                </i>
            </span>

            <span>
                <i style={{ color }} className={val >= 2 ? "fas fa-star" :
                    val >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}>
                </i>
            </span>

            <span>
                <i style={{ color }} className={val >= 3 ? "fas fa-star" :
                    val >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}>
                </i>
            </span>

            <span>
                <i style={{ color }} className={val >= 4 ? "fas fa-star" :
                    val >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}>
                </i>
            </span>

            <span>
                <i style={{ color }} className={val >= 5 ? "fas fa-star" :
                    val >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}>
                </i>
            </span>
           
        </div>
    );
};

Rating.defaultProps = {
    color: "#66655F",
};

Rating.propTypes = {
    val: propTypes.number.isRequired,
};

export default Rating