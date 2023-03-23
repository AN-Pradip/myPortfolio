import React from "react";
import { useEffect } from "react";

function Competency(props){
    
    let i = 0;

    function setRating(){
        if(i < props.rating){
            document.getElementById(props.id).innerHTML += '<div class="white"> </div>';
            i = i + 1;
            setTimeout(setRating(), 100);
        } else {
            let greySquare = 10 - i;
            console.log("diff: ", greySquare)
            for(let counter = 0; counter < greySquare; counter++){
                document.getElementById(props.id).innerHTML += '<div class="grey"> </div>';
            }
            i = 0;
        }
    }

    useEffect(() => {
        let i = 0;
        document.getElementById(props.id).innerHTML = "";
        setRating()
      });

    return(
        <div className="Competency" id={props.id} >
        </div>
    )
}

export default Competency;