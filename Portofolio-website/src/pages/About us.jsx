import React from "react";

function About(){
    return(
        
        <div class = "about" id="about">
        <h2>About Us</h2>
        {/* <span><!-- line here --></span> */}

        <p>Name: Mohamed<br></br>
Age: 21 <br />
Occupation: Software Engineer 
Hobbies: Playing guitar, reading books, hiking 
Interests: Artificial intelligence, programming languages, music theory 

Please keep in mind that sharing personal information 
online carries risks, and you should exercise caution when providing
details about yourself. It's always important to prioritize your privacy 
and security. If you have any concerns, feel free to let me know, 
and I'll do my best to assist you accordingly. 

        </p>

        <ul class = "links">
            <li><a href = "#">work</a></li>

            <div class = "vertical-line"></div>

            <li><a href = "#">service</a></li>

            <div class = "vertical-line"></div>
            
            <li><a href = "#">contact</a></li>
        </ul>

        <ul class = "icons">
            <li>
                <i class = "fa fa-twitter"></i>
            </li>
            <li>
                <i class = "fa fa-facebook"></i>
            </li>
            <li>
                <i class = "fa fa-github"></i>
            </li>
            <li>
                <i class = "fa fa-pinterest"></i>
            </li>
        </ul>
    </div>
    )

}

export default About