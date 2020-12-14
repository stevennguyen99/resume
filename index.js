guestname = prompt('May I have your name please?');
random = Math.floor(Math.random() * 20);
number = 80 + random;

var clap = new Audio('clap.wav');
clap.play();

alert(guestname + ', there is ' + number + '% chance that you will like me!');
