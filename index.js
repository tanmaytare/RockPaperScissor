var round = 1, c = 0, user = 0;

$(document).keydown(function (event) {
    var number = event.key;
    designedid = "num"+number;
    if(number>0 && number<4)
    {
        game(number);
        animatePress(designedid);
        playSound(designedid);
    }

});

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        
        animatePress();
    }
});

$(".drum").unbind("click").click(function () {
        var userChosenid = $(this).attr("id");
        var number = $("#" + userChosenid).text() - '0';
        game(number);
        animatePress(userChosenid);
        playSound(userChosenid);
    });

function game(num) {
    $("h2").text("Round " + round + ":");
    var ran = (Math.floor(Math.random() * 3)) + 1;

    if (ran == num) {
        $("h1").text("Tied!!");
    } else if (ran == 2 && num == 1) {
        $("h1").text("Computer Won!!");
        c++;
    } else if (ran == 1 && num == 2) {
        $("h1").text("You Won!!");
        user++;
    } else if (ran == 1 && num == 3) {
        $("h1").text("Computer Won!!");
        c++;
    } else if (ran == 3 && num == 1) {
        $("h1").text("You Won!!");
        user++;
    } else if (ran == 2 && num == 3) {
        $("h1").text("You Won!!");
        user++;
    } else if (ran == 3 && num == 2) {
        $("h1").text("Computer Won!!");
        c++;
    }

    $("#computerScore").text("Computer:" + c);
    $("#userScore").text("User:" + user);
    round++;

    if (round <= 5) {
        setTimeout(function () {
            clicked();
          }, 2000);
        
    } else {
        final(c, user);
    }
}

function final(c, user) {
    if (c > user) {
        $("h1").text("Computer Won Match!!");
        playSound("wrong");
    } else if (user > c) {
        $("h1").text("You Won Match!!");
        playSound("winner");
    } else {
        $("h1").text("Tied Match");
    }
    setInterval(function () {
        
      }, 2000);
    
    startOver();
}

function startOver() {
    round = 1;
    c = 0;
    user = 0;
    
  }

  function animatePress(fun) {
    $(".scorecard").addClass("view");
    $("#" + fun).addClass("pressed");
    setTimeout(function () {
      $("#" + fun).removeClass("pressed");
    }, 100);
    $(".game-rules").addClass("hide");

  }
  
  function playSound(are)
  {
    var aud = new Audio("./sounds/" + are +".mp3");
    aud.play();
  }