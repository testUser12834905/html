const header = document.getElementById("header");
const headerStick = document.getElementById("header-stick");
const nonFixed = header.offsetTop + header.offsetHeight;

window.onscroll = () => {
	if (window.pageYOffset >= nonFixed) {
		headerStick.classList.remove("invisible");
	} else {
		headerStick.classList.add("invisible");
	}
}
