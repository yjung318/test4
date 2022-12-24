import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {useState, useEffect } from 'react';

//Components
import Header from './Header';
import './ProjectPage.css';


const ProjectPage = () => {

    //Setting useStates
    const [finalResult, setFinalResult] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [triv, setTriv] = useState([]);
    useEffect(() => {
        trivs()
    }, [])

    //Setting categories
    const location = useLocation();
    console.log("location category: " + location.state.category + ", limit: " + location.state.limit +
    ", difficulty: " + location.state.difficulty);

    let URL = "https://the-trivia-api.com/api/questions?" + "&limit=" + location.state.limit;
    
    if (location.state.category != "Any"){
        URL = URL + "&categories=" + location.state.category
    }
    if (location.state.difficulty != "Any"){
        URL = URL + "&difficulty=" + location.state.difficulty;
    }

    const trivs = async () => {
        const response = await fetch(URL)

        setTriv(await response.json())
    }
    let navigate = useNavigate();

    let place = (Math.floor(Math.random() * 4)); 
    var answers = []
    var questions = []
    var correct = []
    var diffArray = []
    
    let count = 0;
    let percentage = 100 * (score/(currentQuestion))

    const clicked = ()=> {
        if (reveal == false){
            var chosen = document.getElementsByName("radio");
            document.querySelector('#check').textContent="Next Question";
            console.log("actual: " + correct[currentQuestion])
            let wrong = '.container'
            let right = '.container'
              
            for(let i = 0; i < chosen.length; i++) {
                console.log("I:" + i)
                console.log("chosen: " + chosen[i].value)
                
                if (chosen[i].checked){
                    wrong = wrong + i;
                    document.querySelector(wrong).style.backgroundColor = "#ff6666"; //Red
                }
                if (chosen[i].value == correct[currentQuestion]){
                    right = right + i;
                    document.querySelector(right).style.backgroundColor = "#66ff66"; //Green
                } 
                if (chosen[i].value == correct[currentQuestion] && chosen[i].checked){
                    setScore(score+1)
                } 

            }
            setReveal(true)
        } else {
            document.querySelector('#check').textContent="Check Answer";
            setReveal(false)

            if (currentQuestion+1 < questions.length){
                setCurrentQuestion(currentQuestion+1)
            } else {
                setCurrentQuestion(currentQuestion+1)
                setFinalResult(true);
            }

            document.querySelector('.container0').style.backgroundColor = "#D3D3D3";
            document.querySelector('.container1').style.backgroundColor = "#D3D3D3";
            document.querySelector('.container2').style.backgroundColor = "#D3D3D3";
            document.querySelector('.container3').style.backgroundColor = "#D3D3D3";
        }

    }
    let shuffle = false;

    {triv.map((data) => {
        var temp = []
        console.log("place: " + place)
        let diff = "Question Difficulty: " + data.difficulty;
        diffArray.push(diff)
        questions.push(data.question)
        correct.push(data.correctAnswer)
        temp.push(data.incorrectAnswers[0])
        temp.push(data.incorrectAnswers[1])
        temp.push(data.incorrectAnswers[2])
        temp.push(data.correctAnswer)
        temp.sort();

        answers.push(temp[0]);
        answers.push(temp[1]);
        answers.push(temp[2]);
        answers.push(temp[3]);
        count++;

    })}

    for (let i = 0; i < answers.length; i++){
        console.log("answers: " + answers[i])
    }
    let lim = location.state.limit
    if (count < lim){
        lim = count
    }

    console.log(place);
    
    console.log(place);
    switch(place){
        case 0:
            diffArray.push("Fantastic Job SuperStar!")
            break;
        case 1:
            diffArray.push("Hey, not Bad!")
        case 2:
            diffArray.push("Wow! Great Job!")
            break;
        case 3:
            diffArray.push("What an incredible score! I couldn't have done better!")
    }

    return (
        <div>
            <Header/>
            <section class="projects">
            <h2>Questions Correct: {score}</h2>
            <h2>{diffArray[currentQuestion]}</h2>

                {finalResult ? (
                    <div className="final-results">
                    <h1>Percent Correct: {percentage}%</h1>
                    <button onClick={() => window.location.reload()} class="blue_btn">Restart Game</button>
                    </div>
                ) : (
                    <div className = "questionCard">
                        <h2>Question #{currentQuestion+1} out of: {lim}</h2>
                        <h2 className = "list-group-item" key ={count}>{questions[currentQuestion]}</h2>
                        <label class="container0">{answers[currentQuestion*4]}
                        <input type="radio" name="radio" id = "0" value={answers[currentQuestion*4]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <label class="container1">{answers[currentQuestion*4+1]}
                        <input type="radio"  name="radio" id = "1" value={answers[currentQuestion*4+1]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <label class="container2">{answers[currentQuestion*4+2]}
                        <input type="radio" name="radio" id = "2" value={answers[currentQuestion*4+2]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <label class="container3">{answers[currentQuestion*4+3]}
                        <input type="radio"  name="radio" id = "3" value={answers[currentQuestion*4+3]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <button type="button"  onClick={() => clicked()} id = "check" class="purple_btn" value= "Check Answer">Check Answer</button>
                    </div>
                )}

                <button onClick={() => {navigate("/")}} class="proj_btn">Return Home</button>
            </section>

            
            <section class="projects">

            </section>
            <section class="projects">
                
            </section>
        </div>
    )
}

export default ProjectPage;
