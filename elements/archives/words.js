var options = {
    strings: ["chrome", "firefox", "vscode", "steam", "anything"],
    typeSpeed: 60,
    startDelay: 0,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
}
var typed = new Typed("#typed", options);