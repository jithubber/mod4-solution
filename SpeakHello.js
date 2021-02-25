//
// The entire contents of SpeakHello.js is wrapped inside of an IIFE
// (Immediately Invoked Function Expression). See Lecture 52, part 2.
// The 'speak' function is attached to the helloSpeaker object
// instead of being a standalone function. The 'helloSpeaker' object
// is exposed to the global scope.

(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak=function (names) {
	console.log(speakWord + " " + names);
}	
window.helloSpeaker =  helloSpeaker;
})(window);