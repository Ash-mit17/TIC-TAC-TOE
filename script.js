let xs=[]
let os=[]
let computer=[]

var ch1='z'
var ch2='x'
$("#X").click(function(){
    $(".win").text("Player "+1+" turn")
    ch1=this.id;
    ch2='O'
})
$("#O").click(function(){
    $(".win").text("Player "+1+" turn")
    ch1=this.id;
    ch2='X'
})

let i=1;
let turn =2;
var flag=0;

$(".item").click(function(event){
if(i++%2!=0)
{
    var audio=new Audio("yellow.mp3")
    audio.play()
    $("#"+event.target.id).addClass(ch1)
    xs.push(event.target.id-1)
    if(i>=5)
    {
        var won=decideWinner(xs,os)
        if(won!=='Draw')
        {
            displayWinner("X",won)
            flag=1;
        }
    }
    if(flag==0){
    $(".win").text("Player "+Number(turn)+" turn")
    turn=turn==1?2:1;}
    if(i==9)
    {$(".win").text("Match Drawn");
    setTimeout(function (){location.reload()},100)
}
else
{
    var audio=new Audio("yellow.mp3")
    audio.play()
    $("#"+event.target.id).addClass(ch2)
    os.push(event.target.id-1)
    if(i>=5)
    {
        var won=decideWinner(xs,os)
        if(won!=='Draw')
        {
            displayWinner("O",won)
            flag=1;
        }
    }
    if(flag==0){
    $(".win").text("Player "+Number(turn)+" turn")
    turn=turn==1?2:1;}
    if(i==9)
    {$(".win").text("Match Drawn")
    location.reload()}
}})

function decideWinner(xs, os) {
    for (let i = 0; i < wins.length; i++) {
      const win = wins[i];
      if (win.every(index => xs.includes(index))) {
        return "X wins";
      }
      if (win.every(index => os.includes(index))) {
        return "O wins";
      }
    }
    return "Draw";
  }
  
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  function displayWinner(val,key)
  {
    var audio = new Audio('snare.mp3');
    audio.play();
    $(".win").text(val+" is WINNER")
  }