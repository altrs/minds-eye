//MAIN ELEMENTS
var background_img;
var intro_vid;
var main_img_buttons = [];
var main_buttons = [];
let RAM = false;
let JOURNAL = false;
let GAMES = false;
let MECH = false;
let PIECES = false;
let INTRO = true;

//AUDIO
let repeat_sound;
let journal_sound;
let games_sound;
let mech_sound;
let pieces_sound;

//RAM ELEMENTS
var star;
var weird_pictures = [];
var randomImg;
let red = ("red").split(/(?!$)/u);
let daisy = ("daisy").split(/(?!$)/u);
let delu = ("delusional").split(/(?!$)/u);
let sun = ("sunset").split(/(?!$)/u);
let occ = ("occupy").split(/(?!$)/u);
let mecha = ("mechanical").split(/(?!$)/u);
let coe = ("coerce").split(/(?!$)/u);
let act = ("act").split(/(?!$)/u);
let start = false;
let sentence;
let prev;
let index =  0;
let i2 = 0;
let sentenceList = [];
let wrong = false;
let errors = 0;

//JOURNAL ELEMENTS
var journal_vid;

//GAME ELEMENTS
var card1_img;
var card2_img;
var card3_img;
var card4_img;
var card5_img;
var card6_img;
var card7_img;
var card8_img;
let number = 0;
let t = '';
var cards = false;
var objects = false;
var sentences = [];
let counter = 0;
let current_sentence = '';
var object1;
var object2;
var object3;
var object4;
var object5;

//MECH ELEMENTS
var mech_vid;

//PIECES ELEMENTS
let instructions = [];

//IMAGE CAROUSEL IMAGE CAROUSEL
$(document).ready(function() {
  var carouselContainer = $('.carousel-container');
  var images = carouselContainer.find('img');
  var imageCount = images.length;
  var currentIndex = 0;

  $('.carousel-next').click(function() {
    currentIndex = (currentIndex + 1) % imageCount;
    carouselContainer.css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
  });

  $('.carousel-prev').click(function() {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    carouselContainer.css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
  });


//KEY BOARD KEY BOARD
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  var keyboard = document.getElementById('keyboard');
  var textInput = document.getElementById('text-input');

  keyboard.addEventListener('click', function(event) {
    if (event.target.classList.contains('keyboard-key')) {
      var key = event.target.textContent;
      textInput.value += key;
      keyTyped();
    }
  });
}

});

function preload() {
	//SOUND ELEMENTS
	soundFormats('mp3');
	repeat_sound = loadSound('repeat.mp3');
	journal_sound = loadSound('observation.mp3');
	games_sound = loadSound('games.mp3');
	mech_sound = loadSound('mech.mp3');
  	pieces_sound = loadSound('pieces.mp3');
	
	//MAIN ELEMENTS
	background_img = loadImage('background.png');
	intro_vid = loadImage('intro_vid_final.gif');
	main_img_buttons[0] = loadImage('button1.png');
	main_img_buttons[1] = loadImage('button2.png');
	main_img_buttons[2] = loadImage('button3.png');
	main_img_buttons[3] = loadImage('button4.png');
	main_img_buttons[4] = loadImage('button5.png');
	
	//RAM ELEMENTS
	star = loadImage('star.png');
	weird_pictures[0] = loadImage('wrong1.png');
	weird_pictures[1] = loadImage('wrong2.png');
	weird_pictures[2] = loadImage('wrong3.png');
	weird_pictures[3] = loadImage('wrong4.png');
	weird_pictures[4] = loadImage('wrong5.png');
	randomImg =	random(weird_pictures);
	
	//JOURNAL ELEMENTS
	journal_vid = loadImage('journal.gif');
	
	//GAME ELEMENTS
	card1_img = loadImage('card1.jpg');
	card2_img = loadImage('card2.jpg');
	card3_img = loadImage('card3.jpg');
	card4_img = loadImage('card4.jpg');
	card5_img = loadImage('card5.jpg');
	card6_img = loadImage('card6.jpg');
	card7_img = loadImage('card7.jpg');
	card8_img = loadImage('card8.jpg');
	
	object1_img = loadImage('r1.png');
	object2_img = loadImage('r2.png');
	object3_img = loadImage('r3.png');
	object4_img = loadImage('r4.png');
	object5_img = loadImage('r5.png');
	sentences[0] = ('Our minds march to different beats, feet and legs and hands claw to different directions. Hearts strung to different origins. Minds wired to unique frequencies, limbs controlled by different motives, nose searching for a specific smell. And so, – what do you see when you look to the right?');
	sentences[1] = ('Blindness in monotony, supporting you like gravity that tugs you down? How would you show up to battle? To engage in such a connection?');
	sentences[2] = ('The day to day abyss hugs like a mother. Water runs through your veins, you feel like youll puddle to the core of the earth and the earth will drink you like it’s never drank anything before. But then you’ll seep through every layer that keeps you trapped, and what will be waiting when you surface?');
	sentences[3] = ('And which would you choose to place your voice in? One you could hide away under, or float upon at sea? Or maybe you’d dive into the water and let them take you away in their current? Or jagged would you be, moving inch by inch throughout the years?');
	sentences[4] = ('Wrists tied to watch tied to eyes, between the time you’ve pocketed away while longing for something no one knows. Tamer, play your role well before we see right through you.');
	sentences[5] = ('Backing breaking really, as it all just passes through. ‘Awake’ they ask, are ‘you awake’? Who is speaking? Who are you hearing?');
	sentences[6] = ('More forgiving than anything else in this world. Surrender if we don’t keep track that right is down and left is up. Something enters your mind —— what is it?');
	sentences[7] = ('To abstain or devour. And how old are you, cinched at the linchpins. Boggled down to oblivion until your ears see the words before they hear them and your eyes feel the air around your face. Swallow one pill and you swallow two. How would you emerge?');
	sentences[8] = ('Am I trapped in a tree? Lamely burrowed in the rings, stiff but knowing belonging. Sometimes thoughts of an ax slicing through you come to mind. You have dreams about it but don’t dream of it. Kindness like a salve as awareness opens your eyes. How does it feel?');
	sentences[9] = ('Waking, waking, hearing, seeing, and feeling. To float in and out of consciousness, where are we going? Where would you like to go?');
	
	//MECH ELEMENTS
	mech_vid = loadImage('mech.gif');
	
	//PIECES ELEMENTS
	instructions[0] = loadImage('p1.png');
	instructions[1] = loadImage('p2.png');
	instructions[2] = loadImage('p3.png');
	instructions[3] = loadImage('p4.png');
	instructions[4] = loadImage('p5.png');
	randomInstructions =	random(instructions);
}

function setup() {
	//MAIN ELEMENTS
	var canvas = createCanvas(800, 480);
 	canvas.parent('canvas-container');
	background(250, 250, 250);
	getAudioContext().suspend();
	
	//MAIN BUTTON ELEMENTS
	for(let i=0; i<5; i++){
		main_buttons[i] = new Clickable();
		main_buttons[i].image = main_img_buttons[i];
	  	main_buttons[i].text = "";
	  	main_buttons[i].locate(55, 15+(i*90));
	  	main_buttons[i].resize(86, 86);
  	}
	main_buttons[0].onPress = function () {
		if(errors >= 10){
			print("YOU'VE BEEN KICKED OUT OF THIS FUNCTION");
		}else{ 
			ram();
		}
	}
		
	main_buttons[1].onPress = function () {journal()}
	main_buttons[2].onPress = function () {games()}
	main_buttons[3].onPress = function () {mech()}
	main_buttons[4].onPress = function () {pieces()}
	
	//RAM ELEMENTS
	sentenceList.push(red);
	sentenceList.push(daisy);
	sentenceList.push(delu);
	sentenceList.push(sun);
	sentenceList.push(occ);
	sentenceList.push(mecha);
	sentenceList.push(coe);
	sentenceList.push(act)
	sentence = sentenceList[index];
	
	//GAME ELEMENTS
	chooseGame();
	if(cards) {
			getRandomNum();
	
			card3 = new Clickable();
			card3.strokeWeight = 0; 
			card3.image = card3_img;
			card3.text = "";
			card3.locate(250,50);
			card3.resize(85, 130);
			card3.onPress = function () {
				if((number == 3)){
					print('CORRECT');
					getRandomNum()
					//print('1p');
				}else{
					print("INCORRECT");
				}
			}


			card8 = new Clickable();
			card8.strokeWeight = 0; 
			card8.image = card8_img;
			card8.text = "";
			card8.locate(345, 50);
			card8.resize(85, 130);
			card8.onPress = function () {
				if((number == 8)){
					print('CORRECT');
					getRandomNum()
					//print('2p');
				}else{
					print("INCORRECT");
				}

		}

			card5 = new Clickable();
			card5.strokeWeight = 0; 
			card5.image = card5_img;
			card5.text = "";
			card5.locate(440, 50);
			card5.resize(85, 130);
			card5.onPress = function () {
				if((number == 5)){
					print('CORRECT');
					getRandomNum()
					//print('3p');
				}else{
					print("INCORRECT");
				}

		}
			card2 = new Clickable();
			card2.strokeWeight = 0; 
			card2.image = card2_img;
			card2.text = "";
			card2.locate(535, 50);
			card2.resize(85, 130);
			card2.onPress = function () {
				if((number == 2)){
					print('CORRECT');
					getRandomNum()
					//print('4p');
				}else{
					print("INCORRECT");
				}
			}

			card1 = new Clickable();
			card1.strokeWeight = 0; 
			card1.image = card1_img;
			card1.text = "";
			card1.locate(250, 190);
			card1.resize(85, 130);
			card1.onPress = function () {
				if((number == 1)){
					print('CORRECT');
					getRandomNum()
					//print('5p');
				}else{
					print("INCORRECT");
				}
		}

			card4 = new Clickable();
			card4.strokeWeight = 0; 
			card4.image = card4_img;
			card4.text = "";
			card4.locate(345, 190);
			card4.resize(85, 130);
			card4.onPress = function () {
				if((number == 4)){
					print('CORRECT');
					getRandomNum()
					//print('6p');
				}else{
					print("INCORRECT");
				}
		}

			card7 = new Clickable();
			card7.strokeWeight = 0; 
			card7.image = card7_img;
			card7.text = "";
			card7.locate(440, 190);
			card7.resize(85, 130);
			card7.onPress = function () {
				if((number == 7)){
					print('CORRECT');
					getRandomNum()
					//print('7p');
				}else{
					print("INCORRECT");
				}
		}

			card6 = new Clickable();
			card6.strokeWeight = 0; 
			card6.image = card6_img;
			card6.text = "";
			card6.locate(535, 190);
			card6.resize(85, 130);
			card6.onPress = function () {
				if((number == 8)){
					print('CORRECT');
					getRandomNum()
					//print('8p');
				}else{
					print("INCORRECT");
				}
		}
	} 
	else if (objects){		
		//print('objects');
		fill(0, 102, 153);
		noStroke();
		rect(150, 20, 600, 450);
		current_sentence = sentences[counter];
	}
}

function draw() {
	resetScreen();
	INTRO = true;
	
	if(INTRO){image(intro_vid, 150,20, 600, 450);}
	else{resetScreen();}

	//RAM ELEMENTS
	if(RAM){
		resetScreen();
		intro = false;

	    //typing started
	    if(start){      
	        //highlight box
	        if(wrong){
				image(randomImg, 255, 130, 100, 80);
	            fill(255,0,0,100);
				//errors = errors + 1;
	        }
	        else{
				image(star, 255, 130, 100, 80);
				noFill();
	        }
	        rect(220,260,50,70);
	    }
    
    //start when user types
    if(keyIsPressed && sentence.length > 0){
        start = true;   
    }
    
    //go to next word
    if(i2  === sentence.length){
        start = false;
        fill(0);
        textSize(50);
		index = floor(random(sentenceList.length));
        wrong = false;
        i2 = 0;
        start = false;
        sentence = sentenceList[index];
        mouseX = 2000;
    }
    
    //display sentence
    for(let i = i2; i < sentence.length;i++){
        fill(0,255-(100+60*i-i2*60)/3.7);
        text(sentence[i],230+60*i-i2*60,320)
    }

	if(errors > 10){
		clear();
		resetScreen();
		image(intro_vid, 150,20, 600, 450);
		repeat_sound.stop();
	}
	//END RAM ELEMENTS
	
	//JOURNAL ELEMENTS
	if(JOURNAL){
		clear();
		resetScreen();
		image(journal_vid, 150,20, 600, 450);
	}
	//END JOURNAL ELEMENTS
	
	
	//GAME ELEMENTS
	if(GAMES){
		clear();
		resetScreen();
		
			if(cards){
			card1.draw();
			card2.draw();
			card3.draw();
			card4.draw();
			card5.draw();
			card6.draw();
			card7.draw();
			card8.draw();

			noFill();
			rect(380, 360, 120, 30);
			fill(0,0,0)
			textFont('Georgia');
			textSize(15);
			text('press >- in corner', 390, 380);
	}
	else if(objects){
		
		if(counter >= 9){
			counter = 0;
		}
		else if(counter <= 9){
			object1 = new Clickable();
			object1.strokeWeight = 0; 
			object1.image = object1_img;
			object1.text = "";
			object1.locate(500, 180);
			object1.resize(85, 85);
			object1.onPress = function () {
						fill(0, 102, 153);
						noStroke();
						rect(150, 300, 600, 450);
						counter++;
						current_sentence = sentences[counter];
				}
			object2 = new Clickable();
			object2.strokeWeight = 0; 
			object2.image = object2_img;
			object2.text = "";
			object2.locate(405, 180);
			object2.resize(85, 85);
			object2.onPress = function () {
						fill(0, 102, 153);
						noStroke();
						rect(150, 300, 600, 450);
						counter++;
						current_sentence = sentences[counter];
				}
			object3 = new Clickable();
			object3.strokeWeight = 0; 
			object3.image = object3_img;
			object3.text = "";
			object3.locate(310, 180);
			object3.resize(85, 85);
			object3.onPress = function () {
						fill(0, 102, 153);
						noStroke();
						rect(150, 300, 600, 450);
						counter++;
						current_sentence = sentences[counter];
				}
			object4 = new Clickable();
			object4.strokeWeight = 0; 
			object4.image = object4_img;
			object4.text = "";
			object4.locate(440, 80);
			object4.resize(85, 85);
			object4.onPress = function () {
						fill(0, 102, 153);
						noStroke();
						rect(150, 300, 600, 450);
						counter++;
						current_sentence = sentences[counter];
				}
			object5 = new Clickable();
			object5.strokeWeight = 0; 
			object5.image = object5_img;
			object5.text = "";
			object5.locate(345, 80);
			object5.resize(85, 85);
			object5.onPress = function () {
						fill(0, 102, 153);
						noStroke();
						rect(150, 300, 600, 450);
						counter++;
						current_sentence = sentences[counter];
				}
		}
			
		object1.draw();
		object2.draw();
		object3.draw();
		object4.draw();
		object5.draw();
			
		textWrap(WORD);
		fill(0,0,0);
		textAlign(CENTER, BASELINE);
		textLeading(20);
		textSize(12);
		textFont('arial')
		text(current_sentence, 285, 300, 300);
		
	}
		
	}
	
	if(MECH){
		clear();
		resetScreen();
		image(mech_vid, 150,20, 600, 450);
	}
	
	
	if(PIECES){
		clear();
		resetScreen();
		image(randomInstructions,150,20, 600, 450); 
	}
	
	
}}

//RAM
function ram() {
	//print('ram')
	setTimeout(function() {
	  document.getElementById("myInput").focus();
	}, 100);

	//set scene
	RAM = true;
	INTRO = false;
	JOURNAL = false;
	GAMES = false;
	MECH = false;
	PIECES = false;
	
	repeat_sound.play();
	repeat_sound.loop();
	journal_sound.stop();
	games_sound.stop();
	mech_sound.stop();
	pieces_sound.stop();
	
	textFont('Georgia');
	textSize(30);
	stroke(3);
	fill(51, 49, 49);
}

function keyTyped() {
    if(i2 < sentence.length){
        if(key == sentence[i2]){
            i2++;
            wrong = false;
        }
        else{
          	errors++;
           	wrong = true;
			randomImg =	random(weird_pictures);
        }
    }
}

//JOURNAL
function journal() {
	RAM = false;
	INTRO = false;
	JOURNAL = true;
	GAMES = false;
	MECH = false;
	PIECES = false;
	
	repeat_sound.stop();
	journal_sound.play();
	journal_sound.loop();
	games_sound.stop();
	mech_sound.stop();
	pieces_sound.stop();
	
	//print('journal')
	clear();
	resetScreen();
}

//GAMES
function games() {
	RAM = false;
	INTRO = false;
	JOURNAL = false;
	GAMES = true;
	MECH = false;
	PIECES = false;
	
	repeat_sound.stop();
	journal_sound.stop();
	games_sound.play();
	games_sound.loop();
	mech_sound.stop();
	pieces_sound.stop();
	
	//print('games')
	clear();
	resetScreen();
		
}

//MECH
function mech() {
	RAM = false;
	INTRO = false;
	JOURNAL = false;
	GAMES = false;
	MECH = true;
	PIECES = false;
	
	repeat_sound.stop();
	journal_sound.stop();
	games_sound.stop();
	mech_sound.play();
	mech_sound.loop();
	pieces_sound.stop();
	
	//print('mech')
}

function getRandomNum(){
 while (true){
   let randomNum = int(random(1,9));
    number = randomNum
	 	t = text('', 210, 380);
		t = text(number, 210, 380);
		print('CLICK CARD #' + randomNum);
		return randomNum;
	}
	
}

function chooseGame() {
	
	let num = random(1, 3);
	
	if(num <= 2){
			cards = true;
			objects = false;
			//print('game - ' + num);
	}
	else if(num >= 2){
			cards = false;
			objects = true;
			//print('game - ' + num);
	}
	else{
		//print('error')
	}
	
}

//PIECES
function pieces() {
	RAM = false;
	INTRO = false;
	JOURNAL = false;
	GAMES = false;
	MECH = false;
	PIECES = true;
	//print('pieces')
	
	repeat_sound.stop();
	journal_sound.stop();
	games_sound.stop();
	mech_sound.stop();
	pieces_sound.play();
	pieces_sound.loop();
	
	randomInstructions = random(instructions);
}

function resetScreen() {
	clear();
	removeElements();
	//start = false;
	
	image(background_img, 0, 0);
	for(let i=0; i<5; i++){
			main_buttons[i].draw();
	}
	
}

function mousePressed() {
  userStartAudio();
}


