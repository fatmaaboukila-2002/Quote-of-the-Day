/* function sum(x,y)
{
    var num1=x;
    var num2=y;
    var result = num1+num2;
    return result;
}
function avgNum(param){
    var avg = param/2;
    console.log(avg);
}
console.log(sum(22+1));
avgNum(sum(22+1)); */

/* ************************************************************************************************************** */
/* var person = {
    name : "fatma",
    age: 22,
    gender:"female",
    work:function(){
        console.log("student")

    }

}
person.work()
console.log(person.name); */

/* ************************************************************************************************************************* */
    var Texts = [
        "If you tell the truth, you don't have to remember anything.",
        "Always forgive your enemies; nothing annoys them so much.",
        "Be yourself; everyone else is already taken.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "Be the change that you wish to see in the world."
    ];

    var Authors = [
        "Mark Twain",
        "Oscar Wilde",
        "Oscar Wilde",
        " Bernard M. Baruch",
        "Mahatma Gandhi"
    ];

    function generateQuote() {
        var randomValue = Math.random();
        var randomIndex = Math.floor(randomValue * Texts.length);

        var randomQuote = Texts[randomIndex];
        var randomAuthor = Authors[randomIndex];
        
        document.getElementById('quote').textContent = '"'+randomQuote+'"';
        document.getElementById('author').textContent = '--' +randomAuthor;

    }
