listen = document.querySelector('#listen')
btnListen = document.querySelector('#btnListen')

// creating SpeechRecognition API
SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

recognition = new SpeechRecognition();
console.log(recognition);
recognition.onstart = function () {
    console.log('Yes, Now You Can start to Talk!');
}



btnListen.addEventListener('click', function () {
    recognition.start();
    listen.textContent = 'Listening...';

})
// converting voice to text 
recognition.onresult = function (e) {
    resultReceived = e.results[0][0].transcript;


    listen.textContent = resultReceived;
    readOutLoud(resultReceived)
}

//  converting text to voice and executing commands
function readOutLoud(vtval) {

    speakIt = new SpeechSynthesisUtterance();

    if (vtval.includes('open YouTube')) {
        window.open('https://www.youtube.com')
        vtval = 'Priyak opening Youtube Sir,'
    } else if (vtval.includes('Priyak open Gmail')) {
        window.open('https://www.gmail.com')
        vtval = 'opening Gmail Sir,'
    } else if (vtval.includes('open Facebook')) {
        vtval = 'Priyak opening Facebook Sir';
        window.open('https://www.facebook.com');
    } else if (vtval.includes('open Google')) {
        vtval = 'Priyak opening Google Sir';
        window.open('https://www.google.com');
    } else if (vtval.includes('what is your name')) {
        vtval = 'my name is priyak Sir';
    } else if (vtval.includes('priyak who invented you')) {
        vtval = 'Mister Mithun Das invented me Sir';
    } else if (vtval.includes('priyak play song')) {
        vtval = 'Playing song sir';
        window.open('https://www.youtube.com/watch?v=VyiRt-1JC0');
    } else if (vtval.includes('priyak play movie')) {
        vtval = 'Playing movie sir';
        window.open('https://www.youtube.com/watch?v=AzFqq5lhwLA');
    } else if (vtval.includes('Priyak open my Newton School dashboard')) {
        vtval = 'opening your newton school dashboard Sir';
        window.open('https://my.newtonschooll.co/dashboard/');
    } else if (vtval.includes('how are you Priyak')) {
        vtval = 'thanks for asking sir I am good how about you';

    }
    else {
        vtval = 'You are Not My Master sir, I refuse to Work Under Your Command';
    }

    speakIt.text = vtval;
    speakIt.volume = 1;
    speakIt.rate = 1;
    speakIt.pitch = 1;
    window.speechSynthesis.speak(speakIt);