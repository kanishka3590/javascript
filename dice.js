var div =document.createElement("div");
div.setAttribute('class','div1');
document.body.appendChild(div);


var play_button1 = document.createElement("button");
play_button1.setAttribute("id",'play_button1');
play_button1.setAttribute('onclick','roll()');
play_button1.innerText = "Player 1 Roll";
document.body.appendChild(play_button1);


var play_button2 = document.createElement("button");
play_button2.setAttribute("id",'play_button2');
play_button2.setAttribute('onclick','roll()');
play_button2.innerText = "Player 2 Roll";
document.body.appendChild(play_button2);

document.getElementById('play_button1').disabled = true;
document.getElementById('play_button2').disabled = true;


var button1 = document.createElement("button");
button1.setAttribute("name",'button1');
button1.setAttribute('onclick','start()');
button1.innerText = "START";
div.appendChild(button1);

// var button2 = document.createElement("button");
// button2.setAttribute("name",'button2');
// button2.setAttribute("onclick",'roll()');
// button2.innerText = "ROLL";
// div.appendChild(button2);

var button3 = document.createElement("button");
button3.setAttribute("name",'button3');
button3.setAttribute("onclick",'restart()');
button3.innerText = "RESTART";
div.appendChild(button3);

var button4 = document.createElement("button");
button4.setAttribute("name",'button4');
button4.setAttribute("onclick",'stop()');
button4.innerText = "STOP";
div.appendChild(button4);


var div2 =document.createElement("div");
div2.setAttribute('class','div2');
document.body.appendChild(div2);
var img = document.createElement("img");
div2.appendChild(img);

var play1 = 1;
var play2 = 1;

var label1 = document.createElement("label");
label1.innerText = "RESULT :";
label1.setAttribute("id","label1");
document.body.appendChild(label1);

var label2 = document.createElement("label");
label2.innerText = "RESULT :";
label2.setAttribute("id","label2");
document.body.appendChild(label2);



function start() {
      img.setAttribute("src","1.png");
      img.setAttribute('class','img');
      document.getElementById('play_button1').disabled = false;
      document.getElementById('play_button2').disabled = true;
      label1.innerText = "RESULT :";
      label2.innerText = "RESULT :";


}
function roll() {
    var count = Math.floor((Math.random() * 6) + 1);
//    console.log(count);
    if(count==1){
      img.setAttribute("src","1.png");
      img.setAttribute('class','img');
    }
    else if(count==2){
      img.setAttribute("src","2.png");
      img.setAttribute('class','img');
    }
    else if(count==3){
      img.setAttribute("src","3.png");
      img.setAttribute('class','img');
    }
    else if(count==4){
      img.setAttribute("src","4.png");
      img.setAttribute('class','img');
    }
    else if(count==5){
      img.setAttribute("src","5.png");
      img.setAttribute('class','img');
    }
    else if(count==6){
      img.setAttribute("src","6.png");
      img.setAttribute('class','img');
    }
    else{}
    if(play1 < 21 && play2 < 21 ){
                if(document.getElementById('play_button1').disabled == false){
                      play1 = count+play1;
                      document.getElementById('play_button1').disabled = true;
                      document.getElementById('play_button2').disabled = false;

                }
                else if(document.getElementById('play_button1').disabled == true){
                      play2 = count+play2;
                  document.getElementById('play_button1').disabled = false;
                  document.getElementById('play_button2').disabled = true;
                }
  }
  else if(play1 > 21 && play2 < 21){
    document.getElementById('play_button1').disabled = true;
    label1.innerText = `RESULT : ${play1}`;
    play2 = count+play2;

  }
  else if(play1 < 21 && play2 > 21){
    document.getElementById('play_button2').disabled = true;
    label2.innerText = `RESULT : ${play2}`;
    play1 = count+play1;
  }
  else{
      if(play1 == 21)
          {
            label1.innerText = `RESULT : Player1 Won ${play1}`;
            label2.innerText = `RESULT : You Lost ${play2}`;

          }
      else if(play2 == 21){
            label1.innerText = `RESULT : You Lost ${play1}`;
            label2.innerText = `RESULT : Player2 Won ${play2}`;
        }
      else {
          alert("No One Won. Play Again");
          label1.innerText = `RESULT : ${play1}`;
          label2.innerText = `RESULT : ${play2}`;

      }
  }
    console.log(play1);
    console.log(play2);
}
function restart() {
  play1 = 1;
  play2 = 1;
  img.setAttribute("src","1.png");
  img.setAttribute('class','img');
  document.getElementById('play_button1').disabled = false;
  document.getElementById('play_button2').disabled = true;
  label1.innerText = "RESULT :";
  label2.innerText = "RESULT :";


}
function stop() {
    alert("Game Over. Start Again");
    play1 = 1;
    play2 = 1;
    document.getElementById('play_button1').disabled = true;
    document.getElementById('play_button2').disabled = true;
    label1.innerText = "RESULT :";
    label2.innerText = "RESULT :";

}
