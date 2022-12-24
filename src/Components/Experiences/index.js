import React from 'react'
import {useNavigate} from 'react-router-dom';

import "./Experiences.css";

const Experiences = () => {

    const toComponentB=()=>{
        let cat = document.getElementById("cat").value;
        let lim = document.getElementById("limit").value;
        let diff = document.getElementById("diff").value;
        
        navigate('/projects',{state:{limit:lim,category:cat,difficulty:diff}});
    }

    let navigate = useNavigate();
    return (
        <body id="portfolio" class="port__tile">
            <h3 class="exp__title">Settings</h3>

            <div class="ornamentxxx"></div>
            <div class="exp__tile2">
                <div class="exp__list">
                <div class="select-box">
                    <label for="cat"><b>Categories: </b></label>
                    <br/>
                    <select name="cat" id="cat">
                        <option value="All">All</option>
                        <option value="general_knowledge">General Knowledge</option>
                        <option value="society_and_culture">Society & Culture</option>
                        <option value="film_and_tv">Film & TV</option>
                        <option value="arts_and_literature">Arts & Literature</option>
                        <option value="history">History</option>
                        <option value="geography">Geography</option>
                        <option value="food_and_drink">Food & Drink</option>
                        <option value="science">Science</option>
                        <option value="music">Music</option>
                        <option value="sport_and_leisure">Sports & Leisure</option>
                    </select>
                </div>
                <br></br>
                <div class="select-box">
                    <div class="slidecontainer">
                    <label for="limit"><b>Number of Questions: (Max 20)</b></label>
                    <br/>
                    <input name="limit" class="slider" id="limit" type="range" min="1" max="20"></input>
                    </div>
                </div>
                <div class="select-box">
                    <label for="diff"><b>Difficulty: </b></label>
                    <br/>
                    <select name="diff" id="diff">
                        <option value="Any">Any</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                </div>
            </div>
            <>
                <body id="portfolio" class="port__tile">
                <button onClick={() => {toComponentB()}} class="port__btn">START</button>
                </body>
            </>
        </body>
    )
}

export default Experiences;