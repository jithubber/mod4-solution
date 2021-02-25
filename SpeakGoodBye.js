
// The entire contents of SpeakGoodbye.js is wrapped inside of an IIFE
// (Immediately Invoked Function Expression). See Lecture 52, part 2.
// The 'speak' function is attached to the 'byeSpeaker' object
// instead of being a standalone function.  The 'byeSpeaker' object is
// exposed to the global scope.

(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak=function (names) {  
	console.log(speakWord + " " + names);
}
window.byeSpeaker =  byeSpeaker;
})(window);