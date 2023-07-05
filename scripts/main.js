const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
var gameMode = params.game;
var schizo = 0;

document.addEventListener('DOMContentLoaded', (event) => {
	if (gameMode == 1) {
		document.body.classList.add("gameMode");
		
		document.querySelectorAll(".siteLink").forEach((siteLink) => {
			siteLink.href = siteLink.href+"?game=1"
		});
	}

	document.getElementById("headerNav").addEventListener('click', navToggle);

	// schizo check
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if ((page == "secretbase") || (page == "secretbase.html")) schizo = 1;
	if (schizo) {
		document.getElementById("yoda").classList.add("creepypastaGlow");
		document.getElementById("yodaImage").classList.add("creepypastaShaker");
	}

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
const yodaSoundCreepy = new Audio("sounds/yodacreepy.mp3");

function yoda() {
	(schizo ? yodaSoundCreepy : yodaSound).load();
	(schizo ? yodaSoundCreepy : yodaSound).play();
	jQuery.get((schizo ? 'yodas_thoughts.txt' : 'yodas_wisdom.txt'), function(fulltext) {
		// schizo execution
		if (schizo) {
			document.getElementById("yodaImage").src = "images/creepypasta/yoda.gif";
	
			document.getElementById("title").classList.add("creepypastaGlitch");
			document.getElementById("headerBackground").classList.add("creepypastaHeader");
			document.getElementById("gameLogo").classList.add("creepypastaLogo");
			document.getElementById("gameLogo").src = "images/creepypasta/tfclogo.png";
			document.getElementById("contentInner").classList.add("creepypastaBackground");
			document.getElementById("contentText").innerHTML = "";
			document.querySelectorAll(".contentHeader").forEach((contentHeader) => {
				contentHeader.innerHTML = "YOU ARE BEING MONITORED"
			});
			document.getElementById("footerInner").innerHTML = "TURN BACK";
			document.querySelectorAll("#navInner a").forEach((navLink) => {
				navLink.innerHTML = "›RUN"
			});
		}

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