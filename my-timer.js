let countdown;
const timerDisplay = document.querySelector('.display_time-left');
const buttons = document.querySelectorAll('[data-time]');
const message = document.querySelector('.message');
const stop = document.querySelector('.stop').addEventListener('click', stopTimer)



function timer (seconds) {
	clearInterval(countdown);

	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		if(secondsLeft < 0) {
			clearInterval(countdown);
			message.innerHTML = '<p>I am done...</p>'
			timerDisplay.style.display = 'none'
			return;
		}
		displayTimeLeft(secondsLeft)
	}, 1000);

}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

	timerDisplay.textContent = display;
}


function startTimer() {
	const seconds = parseInt(this.dataset.time);
	timer(seconds)
}

function stopTimer() {
   timerDisplay.style.display = 'none';
   message.innerHTML = '<p>You pressed stop button</p>'
};

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const mins = this.minutes.value
	timer(mins * 60);
	this.reset();
})


