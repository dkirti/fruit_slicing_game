var play=false;
var score;
var lifeleft;
var action;
var fruits=['apple','banana','cherry','watermeleon','papaya','strawberry','litchi','mango','pineapple','grapes']
$(function(){
    $("#start").click(function(){
        if(play==true)
           { location.reload();}
        else{
            play=true;
            score=0;
            $("#score").html("Score "+score);
            $("#gameOver").hide();
            $("#start").html("RESTART");
            $("#lifeline").show();
            lifeleft=3;
            addHeart();
            showaction();
        }
    })
    $("#fruit1").mouseover(function(){
        score++;
        $("#score").html("Score "+score);
        clearInterval(action);
        $("#fruit1").hide("explode",500);
        
        setTimeout(showaction,1000);
    })

//  add life  to the game 
function addHeart(){
    $("#lifeline").empty();
    for(i=0;i<lifeleft;i++){
        $("#lifeline").append('<img src="heart.png" class="life">')
    }
}


function collect(){
    $("#fruit1").attr('src',+fruits[Math.round(9*Math.random())]+'.png')
}
// add fruits to the display
function showaction(){
    $("#fruit1").show();
    collect();
    $("#fruit1").css({'left' : Math.round(450*Math.random()), 'top' : 0});
    step = 1+ Math.round(5*Math.random());
    //step down by fruit by each step in given time
    action=setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top+step);
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            if(lifeleft>1)
            {
                lifeleft--;
                $("#fruit1").show();
                collect();
                $("#fruit1").css({'left' : Math.round(450*Math.random()), 'top' : 0});
                step = 1+ Math.round(5*Math.random());
                addHeart();
            }
            else{
                play=false;
                
                $("#start").html("START GAME");
                $("#gameOver").html('<p>Game over!</p><p>your score is '+score+'</p>');
                $("#gameOver").show();
                $("#lifeline").hide();
                stopAction();
               
            }
        }
    },10);
    
}

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
})
