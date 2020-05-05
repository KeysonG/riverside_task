
const clickStar = i => {
	console.log(i);
	const showTextarea = i < 4;
	const el = document.querySelector('.feedback__message')
	showTextarea 
		? el.classList.add('feedback__message--open')
		: el.classList.remove('feedback__message--open');
	document.querySelector('.feedback__submit').disabled = false;
}

const closeFeedback = () => {
	const el = document.querySelector('.feedback');
	el.classList.add('feedback--closed');
}

const sendFeedback = async formData => {
	const response = await fetch('/feedback',{
		method: 'POST',
		body: formData
	});
	const responseObj = await response.json();
	if(responseObj.msg === 'success') {
		document.querySelector('.feedback__form').style.display = 'none';
		document.querySelector('.feedback__thanks').style.display = 'block';
	}
	setTimeout(closeFeedback, 4000);
}

const onSubmitFeedback = event => {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	sendFeedback();

}

const onClose = event => {
	event.preventDefault();
	closeFeedback();
	// setTimeout(() => el.remove(), 700);
}