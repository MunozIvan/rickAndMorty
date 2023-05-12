import { Link } from "react-router-dom";
import "./About.css"




export default function About() {
    return (
        
        <div className="about-container">
            <Link to={"/"}><div className="about-overlay"/></Link>
            <div className="about-content">
                <h2>About this project</h2>
                <p>This is a React project made by Iván Muñoz.</p>
                <p>Technologies applied on this project: HTML, CSS, Javascript, React</p>
                <p>For more information, visit my github: <a href="https://github.com/MunozIvan">https://github.com/MunozIvan</a></p>
                <p>The login data is email:rick@mail.com password:password</p>
                <h3>¡WUBBA LUBBA DUB DUB!</h3>
            </div>
        </div>
        
    );
 }