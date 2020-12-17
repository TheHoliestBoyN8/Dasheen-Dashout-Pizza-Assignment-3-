var pizza = 15;
var toppings = 0;

var smallp = 15;
var mediump = 60;
var largep = 90;

var saltfish = 0;
var plantain = 0;
var stewchick = 0;
var dasheen = 0;
var pigpea = 0;

var fprice = 0;

function psizes(){
    sessionStorage.setItem("pizza", 15);
    pizza = 15;
}

function psizem(){
    sessionStorage.setItem("pizza", 60);
    pizza = 60;
}

function psizel(){
    sessionStorage.setItem("pizza", 90);
    pizza = 90;
}

function ffish() {
    if(saltfish == 0){
        sessionStorage.setItem("saltfish", 9);
        saltfish = 9;                                                    /* cant get the if statements to work */
    }
    if(saltfish == 9){
        sessionStorage.setItem("saltfish", 0);
        saltfish = 0;
    }
    
    saltfish = 9;
}

function fplant(){
    if(plantain == 0){
        sessionStorage.setItem("plantain", 4);
        plantain = 4;
    }
    if(plantain == 4){
        sessionStorage.setItem("plantain", 0);
        plantain = 0;
    }

    plantain = 4;
}

function fchick(){
    if(stewchick == 0){
        sessionStorage.setItem("stewchick", 8);
        stewchick = 8;
    }
    if(stewchick == 8){
        sessionStorage.setItem("stewchick", 0);
        stewchick = 0;
    }

    stewchick = 8;
}

function fdash(){
    if(dasheen == 0){
        sessionStorage.setItem("dasheen", 5);
        dasheen = 5;
    }
    if(dasheen == 5){
        sessionStorage.setItem("dasheen", 0);
        dasheen = 0;
    }

    dasheen = 5;
}

function fpig(){
    if(pigpea == 0){
        sessionStorage.setItem("pigpea", 3);
        pigpea = 3;
    }
    if(pigpea == 3){
        sessionStorage.setItem("pigpea", 0);
        pigpea = 0;
    } 

    pigpea = 3;
}

function calculate(){
    var fpricetemp = pizza + saltfish + plantain + stewchick + dasheen + pigpea;
    sessionStorage.setItem("fprice", fpricetemp);
}

function checkout(){    
    document.getElementById("bill").innerHTML="TT $" + sessionStorage.getItem("fprice");
}
