function encrypt() {
let string = document.querySelector("#text-box").value.toLowerCase();
let change = document.querySelector("#skiftesiffer").value;
let encrypted = [];
const Encr     = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"]
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"]
    for (let i = 0; i < change; i++) {
        Encr.push(Encr[0])
        Encr.shift()
    }
    //For loop som går gjennom alle bokstavene i stringen
    for (let i = 0; i < string.length; i++) {
        //if som sjekker om bokstaven er i alphabetet
        if(alphabet.includes(string[i])){
            encrypted.push(Encr[alphabet.indexOf(string[i])])
        }else{
        encrypted.push(string[i])
        }
    }
    //Setter sammen encrypted arrayen og legger den inn som en value i nettsiden
    document.querySelector("#Kryptert1").value = encrypted.join("")
}
//Event listener som reloader siden for å fjerne tekst
$('.felt').click(function() {
    window.location.reload();
});

