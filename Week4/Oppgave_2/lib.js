function dotBefore(s) {
    let atIndex=s.indexOf("@")
    let dotIndex=s.indexOf(".")

    if (dotIndex<atIndex && dotIndex>=0) {
        return true;
    } else {return false;}
}

function dotAfter(s) {
    let atIndex=s.indexOf("@")
    let dotIndex=s.lastIndexOf(".")

    if (dotIndex>atIndex) {
        return true;
    } else {return false;}
}

function isitemail(s) {
    mayBeEmail=s;
    if (mayBeEmail.includes("@") && dotBefore(s)==true && dotAfter(s)==true) {
        if (mayBeEmail.includes(" ")) {
            infoTXT="is not an email.";
            updateView();
            return false;
        } else {
            infoTXT="is an email.";
            updateView();
            return true;
        }
    } else {
        infoTXT="is not an email.";
        updateView();
        return false;
    }
}
