
//mouse :- mouse is clicking on every buttons so we apply click function onto buttons
for(var i=0; i<7; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        soundPlay(this.innerHTML);
        //for animation
        buttonAnimation(this.innerHTML);
   })
}

//keyboard par kahi par bhi use kar sakte hai becuase of independent of buttons on screen
document.addEventListener("keydown", function (event){
    soundPlay(event.key);
    //for animation
    buttonAnimation(event.key);
})

//function to play sound
function soundPlay(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}

//function to add animation
function buttonAnimation(currentKey)
{
    //selecting particular key class
    var activeButton = document.querySelector("." + currentKey);//.w class
    activeButton.classList.add("pressed");//adding class pressed

    //pressed will shadow the key to set timeout function to set the timeout to remove transparency
    //syntax of timeout:- timeout(function, time)
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}