var timer = 60;
var tim = 0;
// var timer = document.querySelector('.timer');
var hitrn  = 0 ;

function hitBubble(){
    hitrn = Math.floor(Math.random() * 10);
        document.querySelector('.hit').textContent = hitrn;
}

function runtimer() {
    tim = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('.timer').textContent = timer;
        }else{
            clearInterval(tim);
            document.querySelector('.bubbleCont').innerHTML = `<h1>Game Over!!</h1>
            <h1>Score : ${score}</h1>`;
            
        }
    }, 1000);
}

var num = 0;
document.querySelector('.bubbleCont')
.addEventListener("click", function(det){
     num = Number(det.target.textContent);
    if( num == hitrn){
        increaseScore();
        bubbleNo();
        hitBubble();
    }else if(num != hitrn){
        clearInterval(tim);
        document.querySelector('.bubbleCont').innerHTML = `<h1>Game Over!!</h1>
        <h1>Score : ${score}</h1>`;

    }
})


function bubbleNo() {
    var maker = "";

    for (var i = 1; i <= 270; i++) {
        // console.log(rand);
        var rand = Math.floor(Math.random() * 10);
        maker += `<div class="bubble">${rand}</div>`;
        // document.querySelector('.hit').textContent = rand;
    }
    document.querySelector('.bubbleCont').innerHTML = maker;

}

var score = 0;
function increaseScore(){
    
    score += 10;
    document.querySelector('.score').textContent = score;
}

function restart(){
    bubbleNo();
    hitBubble();
    document.querySelector('.score').textContent = 0;
    score = 0;
    document.querySelector('.timer').textContent = 60;
    timer = 61;
    // runtimer();
    tim=0;
}


hitBubble();
runtimer();
bubbleNo();
// increaseScore();