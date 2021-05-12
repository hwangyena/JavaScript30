// //audio play
// function audioSelect(audio){
//     var audio = new Audio('sounds/'+audio+'.wav');
//     audio.play();
// }

// //add sound
// function playingSound(key){
//     switch(key){
//         case 'A':
//             audioSelect('clap');
//             break;
//         case 'S':
//             audioSelect('hihat');
//             break;
//         case 'D':
//             audioSelect('kick');
//            break;
//         case 'F':
//             audioSelect('openhat');
//             break;
//         case 'G':
//             audioSelect('boom');
//             break;
//         case 'H':
//             audioSelect('ride');
//             break;
//         case 'J':
//             audioSelect('snare');
//             break;
//         case 'K':
//             audioSelect('tom');
//             break;
//         case 'L':
//             audioSelect('tink');
//             break;
//         default:
//             console.log("hi");
//     }
// }

// //add css playing 
// function playingKey(key){
//     key.classList.add("playing");

//     setTimeout(()=>{
//         key.classList.remove("playing");
//     }, 100);
// }

// let mouseEvent = document.getElementsByClassName('key');
// let keyEvent = document.querySelectorAll("kbd");

// //keyboard
// document.addEventListener("keypress", (event)=>{
//     for(let i=0; i<keyEvent.length; i++){
//         if(keyEvent[i].textContent === event.key.toUpperCase()){
//             playingKey(mouseEvent[i]);
//             playingSound(keyEvent[i].textContent);
//         }
//     }
// });

// //mouse
// for(let i=0; i<mouseEvent.length; i++){
//     mouseEvent[i].addEventListener("click", (event)=>{
//         playingKey(mouseEvent[i]);
//         playingSound(keyEvent[i].textContent);
//     });
// }

///////////////////////Course///////////////////////////

//css의 transition time이 바뀌어도 javascript에서 동시에 사용 가능하도록!
// -> transition이 언제 일어나는지를 확인해서 바꿔주기 
window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //내가 누른 키의 audio 선택
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    //내가 누른 키 선택
    
    console.log(audio);
    audio.currentTime = 0; //rewind to the start
    audio.play();

    key.classList.add('playing');
})

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;  //transform 아니면 pass
    //console.log(this);  //여기서 this 키워드 -> 내가 누른 key의 div
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));   //transitionend event 