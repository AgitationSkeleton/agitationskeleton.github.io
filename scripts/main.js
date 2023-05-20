const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
var gameMode = params.game;

document.addEventListener('DOMContentLoaded', (event) => {
	if (gameMode == 1) {
		document.body.classList.add("gameMode");
		
		document.querySelectorAll(".siteLink").forEach((siteLink) => {
			siteLink.href = siteLink.href+"?game=1"
		});
	}

	document.getElementById("headerNav").addEventListener('click', navToggle);
	document.getElementById("yodaImage").addEventListener('click', yoda);
	document.getElementById("yodaText").addEventListener('click', yodaHide);
});

function navToggle() {
	if (document.getElementById("nav").classList.contains("show")) {
		document.getElementById("nav").classList.remove("show");
		document.getElementById("headerNav").innerHTML = "Sitemap ▼";
	} else {
		document.getElementById("nav").classList.add("show");
		document.getElementById("headerNav").innerHTML = "Sitemap ▲";
	}
}

// preload sounds
const yodaSound = new Audio("sounds/yodalaugh.mp3");

function yoda() {
	yodaSound.load();
	yodaSound.play();
	jQuery.get('yodas_wisdom.txt', function(fulltext) {
		var seed = Math.random();
		var quotes = fulltext.split(/\r?\n/);
		var quotenum = Math.round(seed*(quotes.length-1));
		var quote = quotes[quotenum];

		document.getElementById("yodaText").innerHTML = "“"+quote+"”";
		document.getElementById("yodaText").classList.add("show");
	});
}

function yodaHide() {
	document.getElementById("yodaText").classList.remove("show");
}