let userscore=0;
let compscore=0;
let userchoice;
const msg=document.querySelector(".msg");
const resul=document.querySelector("#result");
let choices=document.querySelectorAll(".choice");
let user_count=document.querySelector("#user-count");
let comp_count=document.querySelector("#comp-count");

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        let userchoi=choice.getAttribute("id");
        console.log(userchoi);
       startGame( userchoi);
    })

});
const startGame =(userchoi) =>{
     let compchoi=compchoice();
     console.log(compchoi);

     if( userchoi===compchoi){
        resul.innerText="Game is Draw.Try again!";
        resul.style.backgroundColor="rgb(17, 19, 32)";
     }
     
     else{  
        if( userchoi == "rock"){
           //paper,scissor
           if(compchoi == "paper"){
            userchoice =false;
           }
           else{
            userchoice = true;
           }
        }
        else if( userchoi == "paper"){
            //rock,scissor
            if(compchoi == "scissor"){
              userchoice = false;
            }
            else{
              userchoice =true;
            }
            //userchoice=compchoi==="scissor"?false:true;
        }
        else{
            //rock,paper
            if(compchoi == "rock"){
              userchoice =false;
            }
            else{
              userchoice =true;
            }
        }
        whoWon(userchoice);
     }
  };


const compchoice=()=>{
    const items=["rock","paper","scissor"];
    let itemindx=Math.floor(Math.random()*3);
    return items[itemindx];
};


const whoWon=(userchoice)=>{
  if(userchoice){
    userscore++;
    user_count.innerText = userscore;
    resul.innerText="You Win!";
    resul.style.backgroundColor="green";
  }
  else{
    compscore++;
    comp_count.innerText=compscore;
    resul.innerText="You Loose!";
    resul.style.backgroundColor="red";
  }
};