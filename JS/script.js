//Selecting buttons
const screen=document.querySelector(".results");
const buttons=document.querySelectorAll(".btn");

//Events
buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        //delete all
        const btndown= btn.textContent;
        if(btn.id==="AC"){
            screen.textContent="0";
            return;
        }
        //delete just one
        if (btn.id==="delete") {
         if (screen.textContent.lenght===1 ||screen.textContent==="Error" ) {
            screen.textContent="0";             
         } else {
            screen.textContent=screen.textContent.slice(0,-1);
         }  
         return
        }
        if(btn.id==="equal"){
            try {
                screen.textContent=eval(screen.textContent);
            } catch {
                screen.textContent="Error!";
            }
            return;
        }
        if (screen.textContent==="0"||screen.textContent==="Error!") {
        screen.textContent=btndown;            
        } else {
            screen.textContent+=btndown;
        }
    })
})