import React,{useState} from "react";
import FaqStyle from "../styles/_faq.module.css";


export const Question = (props) => {
    const [isActive, setActive] = useState(false);
    const handleClick = (id) => {
      setActive(!isActive);
    };
    return(
        <>
        <div className={FaqStyle.FaqColor}> 
        <div className={FaqStyle.Question}>
            <h6 className={FaqStyle.FaqQuestion} onClick={() => handleClick(props.id)}>{props.question}</h6>
            <button onClick={() => handleClick(props.id)} className="angle">
               
               {isActive ?(<span className={isActive ? "active" : ""}><img src="/images/Minus.png" /></span>):(<span className={isActive ? "active" : ""}><img src="/images/plus.png" /></span> )}
                </button>
        </div>
        <div className={isActive ? "answer active" : "answer"}>                        
                {props.answer}       
       </div>
       </div>
        </>
    )
}