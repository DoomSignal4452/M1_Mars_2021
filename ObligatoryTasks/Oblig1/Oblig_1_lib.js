function keyPress() {
    buttonPress++;
    buttonPress == 1 ? isPural = "" : isPural = "s";

    if (currentId!='') {colourBoxSelected();}
    else {colourBoxRandom();}
    updateView();
}

function colourBoxSelected() {
    hasSelected++;
    if (hasSelected>9 && hasNotSelected<=0) {NeverSelected='You do not have to select a box to change colour'};
    if (hasNotSelected>0 && hasSelected>0) {NeverSelected='You have used both ways to change box colour'};
    let SelectionNR=currentId.substr(3, 1);
    eval(`Colour${SelectionNR}` + " ='" + randomRGB() + "'"); // The eval() function evaluates or executes an argument.
}

function colourBoxRandom() {
    hasNotSelected++;
    if (hasNotSelected>9 && hasSelected<=0) {NeverSelected='You can also select a box to change the colour of that specific box'};
    if (hasNotSelected>0 && hasSelected>0) {NeverSelected='You have used both ways to change box colour'};
    eval(randomBox() + " ='" + randomRGB() + "'"); 
}

function selectThis(ClickedBox) {
    currentId=ClickedBox;

    if (currentId!='' && currentId!=LastId) {
        eval(currentId + " ='selected'"); 
        eval(LastId + " =''");
        LastId=ClickedBox;
    }

    else if (currentId!='' && currentId==LastId) {
        eval(currentId + " =''"); 
        currentId='';
        LastId='temp';
    }
    updateView();
}

function randomBox() {
    return `Colour${Math.floor((Math.random() * 9)+1)}`;
}

function random255() {
    return Math.floor((Math.random() * 255));
}

function randomRGB() {
    return `rgb(${random255()},${random255()},${random255()})`;
}