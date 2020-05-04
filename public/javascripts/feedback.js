
const clickStar = i => {
	console.log(i);
	const showTextarea = i < 4;
	const el = document.querySelector('.feedback__message')
	showTextarea 
		? el.classList.add('feedback__message--open')
		: el.classList.remove('feedback__message--open');
}

const sendFeedback = async formData => {
	const response = await fetch('/feedback',{
		method: 'POST',
		body: formData
	});
	const responseObj = await response.json();
	console.log(responseObj);
	document.querySelector('.feedback').remove();
}
const onSubmitFeedback = event => {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	sendFeedback();

}