// Lag en funksjon function fixText(text) som tar en tekst som parameter og returnerer den samme teksten, 
// men hvis første tegn er en bokstav, så skal den alltid returneres som stor bokstav - uavhengig av om 
// inputen har stor eller liten bokstav der. I tillegg skal alle mellomrom først og sist i teksten fjernes.


// Oppgaver:

// Lag filen lib.js og funksjonen function fixText(txt), og implementer funksjonen slik at alle testene blir godkjente.

// Nå skal funksjonen også sørge for at alle andre tegn enn det første er i små bokstaver.

// Løs dette ved først å skrive tester for det, og først deretter endrer du funksjonen - og sjekker at testene blir godkjente.

function fixText(text) {

    fixedTXT=text.trim()

    fixedTXT=fixedTXT.charAt(0).toUpperCase() + fixedTXT.slice(1).toLowerCase();

    updateView();
    return fixedTXT;
}