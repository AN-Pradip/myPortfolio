import { useEffect } from "react";

function Header({location}){

    const programName = location.concat('', ".exe")
    let i = 0;
    function typeWriter() {
        if (i < programName.length) {
            document.getElementById("Header-Container-Executable").innerHTML += programName.charAt(i);
            i++;
            

            if(i === programName.length){
                document.getElementById("Header-Container-Executable").innerHTML += "</br>"
            }
            
            setTimeout(typeWriter, 100);
          }
      }
      useEffect(() => {
        typeWriter()
      });

    return(
        <header className="Header-Container">
            <p> Windows PowerShell </p> 
            <p className="Header-Sentence-Copyright">  Copyright (C) Microsoft Corporation. All rights reserved. </p> 
            <p>C:\Windows\Terminal&gt; 
                <span id="Header-Container-Executable">  </span> 
                <span className='blinker'>&#32;</span>
            </p>
        </header>
    )
}

export default Header;