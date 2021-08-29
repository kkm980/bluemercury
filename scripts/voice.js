function runSpeechRecognition() {
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
            
    // This runs when the speech recognition service starts
    recognition.onstart = function () {
        console.log("in onstart");
    };
                
    recognition.onspeechend = function () {
        console.log("in on speech");
        recognition.stop();
    }
              
    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        console.log("transcript", transcript);

        document.getElementById("hideput").value = transcript;
    };
              
    // start recognition
    recognition.start();
}