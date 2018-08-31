import React from 'react';

const MealDashboard = () => (
    <div className="diary">

        <div className="nutrient-titles">
            <div className="calories">Calories</div>
            <div className="calcium">Calcium</div>
            <div className="iron">Iron</div>
            <div className="protein">Protein</div>
        </div>

        <div className="meal-container">
            <div className="breakfast">
                <h6>Breakfast</h6>
            </div>
            <div className="nutrient-count valign-wrapper">
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
            </div>
        </div>

        <div className="meal-container">
            <div className="lunch">
                <h6>Lunch</h6>
            </div>
            <div className="nutrient-count valign-wrapper">
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
            </div>
        </div>

        <div className="meal-container">
            <div className="dinner">
                <h6>Dinner</h6>
            </div>
            <div className="nutrient-count valign-wrapper">
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
            </div>
        </div>

        <div className="meal-container">
            <div className="snacks">
                <h6>Snacks</h6>
            </div>
            <div className="nutrient-count valign-wrapper">
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
                <div className="value">100</div>
            </div>
        </div>

    </div>


);

export default Meal;
