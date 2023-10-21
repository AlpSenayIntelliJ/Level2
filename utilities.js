function getRandomInteger(lower, upper) {
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multiplier) + lower;
    return rnd;
}
function initialize() {
    /* numberOutput = document.getElementById("numout");
    rndNum = 0;
    display(); */
    visitsOut = document.getElementById("visits");
    if (!sessionStorage.numVisits) 
        sessionStorage.numVisits = 0;
    else 
        sessionStorage.numVisits++;
    display();
}
function changeNumber() {
    rndNum = getRandomInteger(1, 10);
    display();
}
function display() {
    /* numberOutput.innerHTML = rndNum; */
    visitsOut.innerHTML = sessionStorage.numVisits;
}