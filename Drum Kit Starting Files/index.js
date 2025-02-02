for (var i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click", function(){

    var key = this.innerHTML

    makeSound(key)
    addAnimation(key)

});
}

document.addEventListener("keydown", function(ev){
    makeSound(ev.key);
    addAnimation(ev.key)
})

function makeSound(key){

    switch(key){

        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();

        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
     
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        default:
            console.log(innerHTML);
    
        

    }
    
}

function addAnimation(key){

    var selectedKey = document.querySelector("." + key)

    selectedKey.classList.add("pressed")

    setTimeout(function(){
        selectedKey.classList.remove("pressed")
    }, 200);

    

}