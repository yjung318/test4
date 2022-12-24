import React from 'react';

import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div class="tile__intro">
                <div class="intro">
                    <div class="intro__section">
                        <h1 class="intro__title">Trivia WoW</h1>
                        <p class="intro__subtitle">By Matthew Jung</p>
                        <p class="intro__memo"> &nbsp; Hello, and Welcome to Trivia WoW! I made this website in order to
                        learn more about React.js and APIs. React is a JavaScript framework which was developed
                        by FaceBook. I love React because it gives the programmer the ability to build interactive 
                        user interfaces efficiently, by allowing them to write commands with much less code than in
                        vanilla JavaScript. React does this by creating reusable components, which results in 
                        efficent functionality. React also only updates the items in the DOM that were changed, 
                        so that the programmer can see their changes immediately.
                        This project also utilized "The Trivia API" (The link is posted below). 
                        
                        Thank you for visiting this project, and I hope that you have a fun time playing!</p>
                        
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;