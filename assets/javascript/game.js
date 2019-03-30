var randomNumber = Math.floor(Math.random()* 100) + 1;

var total = 0;

var wins = 0;

var losses = 0;

$("#numberToGuess").text(randomNumber);
$("#total").text(total);
$("#wins").text(wins);
$("#losses").text(losses);

$(".rupees").each(function(){
    var random = Math.floor(Math.random()* 10) + 1;
    $(this).attr("value", random)
    console.log(random)
})

// total equals 0 so it starts at 0 therefore total = total + value @ start is total = 0+1
$(".rupees").on("click", function () {
    var value = parseInt(this.value);
    total = total + value
    $("#total").text(total);

    if (total === randomNumber) {
        console.log("you win");
    } else if (total > randomNumber) {
        console.log("you lose");
    }

    if (total === randomNumber) {
        console.log("wins")
        wins++;
        $("#wins").text(wins); 
        resetGame()  //invocking the function resetGame
    } else if (total > randomNumber) {
        console.log("lose")
        losses++;
        $("#losses").text(losses);
        resetGame()
    }
});

function resetGame() {
    var randomNumber = Math.floor(Math.random()* 100) + 1;
    var total = 0;

    $("#numberToGuess").text(randomNumber);
    $("#total").text(total);
   
    $(".rupees").each(function(){
        var random = Math.floor(Math.random()* 10) + 1;
        $(this).attr("value", random)
        console.log(random)
    })
    
}






