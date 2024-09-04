// list of servers
const serverList = [
	// tf2
	{
		"id": "tf2CustomMaps",
		"name": "REDchanit.xyz | TF2 Custom Maps",
		"ip": "97.94.129.234:25565",
		"game": "tf2",
		"motd": "memefort"
	},
	{
		"id": "tf2SoapDM",
		"name": "REDchanit.xyz | TF2 SoapDM",
		"ip": "97.94.129.234:27335",
		"game": "tf2",
		"motd": "memefort_soapdm"
	},
	{
		"id": "tf2Vscript",
		"name": "REDchanit.xyz | TF2 Vscript Maps",
		"ip": "97.94.129.234:51840",
		"game": "tf2",
		"motd": "memefort_vscript"
	},
	{
		"id": "tf2SecretBase",
		"name": "REDchanit.xyz | TF2 The Secret Base",
		"ip": "97.94.129.234:27005",
		"game": "tf2"
	},
	{
		"id": "tf2Vanilla",
		"name": "REDchanit.xyz | TF2 Vanilla",
		"ip": "97.94.129.234:27664",
		"game": "tf2"
	},
	{
		"id": "tf2VanillaNoSniper",
		"name": "REDchanit.xyz | TF2 Vanilla But Sniper Is Banned",
		"ip": "97.94.129.234:27663",
		"game": "tf2"
	},
	// of
	{
		"id": "openFortressDM",
		"name": "REDchanit.xyz | Open Fortress DM",
		"ip": "97.94.129.234:27015",
		"game": "hl2dm",
		"overrideGame": "of",
		"motd": "dagobah"
	},
	{
		"id": "openFortressTDM",
		"name": "REDchanit.xyz | Open Fortress Team DM",
		"ip": "97.94.129.234:34560",
		"game": "hl2dm",
		"overrideGame": "of",
		"motd": "dagobah"
	},
	{
		"id": "openFortressAllClassDM",
		"name": "REDchanit.xyz | OF All-Class DM",
		"ip": "97.94.129.234:27665",
		"game": "hl2dm",
		"overrideGame": "of",
		"motd": "dagobah"
	},
	{
		"id": "openFortressZombie",
		"name": "REDchanit.xyz | OF Zombie Infection + Arsenal",
		"ip": "97.94.129.234:27666",
		"game": "hl2dm",
		"overrideGame": "of",
		"motd": "dagobah"
	},
	// tf2classic
	{
		"id": "tf2classicCustomWeapons",
		"name": "REDchanit.xyz | TF2C (Custom Weapons)",
		"ip": "97.94.129.234:27020",
		"game": "hl2dm",
		"overrideGame": "tf2classic",
		"motd": "tf2c_motd"
	},
	{
		"id": "tf2classic2fort",
		"name": "REDchanit.xyz | TF2C 2FORT 24/7 (Vanilla)",
		"ip": "97.94.129.234:27979",
		"game": "hl2dm",
		"overrideGame": "tf2classic"
	},
	{
		"id": "tf2classic2007",
		"name": "REDchanit.xyz | TF2C 2007 Simulator",
		"ip": "97.94.129.234:27980",
		"game": "hl2dm",
		"overrideGame": "tf2classic",
		"motd": "xperience"
	},
	// pf2
	{
		"id": "pf2",
		"name": "REDchanit.xyz | Pre-Fortress 2",
		"ip": "97.94.129.234:26335",
		"game": "hl2dm",
		"overrideGame": "pf2"
	},
	// tfport
	{
		"id": "tfport",
		"name": "REDchanit.xyz | TF_Port 2007",
		"ip": "97.94.129.234:27974",
		"game": "tf2",
		"overrideGame": "tfport"
	},
	// goonsquad
	{
		"id": "goonsquad",
		"name": "REDchanit.xyz | Goonsquad Dev",
		"ip": "97.94.129.234:23555",
		"game": "hl2dm",
		"overrideGame": "goonsquad"
	},
	// tfc
	{
		"id": "tfcFoldyBasement",
		"name": "REDchanit.xyz | TFC - Old Foldy's Basement",
		"ip": "97.94.129.234:34531",
		"game": "tfc"
	},
	// hldm
	{
		"id": "hldmFoldyPlayhouse",
		"name": "REDchanit.xyz | HLDM - Old Foldy's Playhouse",
		"ip": "97.94.129.234:27970",
		"game": "hldm"
	},
	// dmc
	{
		"id": "dmcFoldyDungeon",
		"name": "REDchanit.xyz | DMC - Old Foldy's Dungeon",
		"ip": "97.94.129.234:27971",
		"game": "dmc"
	},
	// svencoop
	{
		"id": "svencoop",
		"name": "REDchanit.xyz | Sven Co-op",
		"ip": "97.94.129.234:27972",
		"game": "svencoop"
	},
	// quake
	{
		"id": "quakeVanilla",
		"name": "REDchanit.xyz | QuakeWorld (Vanilla)",
		"ip": "97.94.129.234:27961",
		"game": "quake1",
		"overrideMap": "quakeworld"
	},
	{
		"id": "quakeTeamFortress",
		"name": "REDchanit.xyz | QuakeWorld Team Fortress (FortressOne)",
		"ip": "97.94.129.234:27962",
		"game": "quake1",
		"overrideMap": "quaketf"
	},
	// quake3
	{
		"id": "quake3",
		"name": "REDchanit.xyz | Quake 3 Vanilla Unlagged",
		"ip": "97.94.129.234:27963",
		"game": "quake3"
	},
	// quakelive
	{
		"id": "quakelive",
		"name": "REDchanit.xyz | Quake Live",
		"ip": "97.94.129.234:27964",
		"game": "quakelive"
	},
	// doom3
	{
		"id": "doom3",
		"name": "REDchanit.xyz | Doom 3",
		"ip": "97.94.129.234:10669",
		"game": "doom3"
	},
	// jk2
	{
		"id": "jk2",
		"name": "REDchanit.xyz | JK2",
		"ip": "97.94.129.234:27973",
		"game": "swjk"
	},
	// halo
	{
		"id": "halo",
		"name": "REDchanit.xyz | Halo CE | Classic Slayer Pro",
		"ip": "97.94.129.234:2103",
		"game": "halo"
	}
];

// list of Steam games
const steamGames = [
	"tf2",
	"tf2classic",
	"of",
	"pf2",
	"tfport",
	"goonsquad",
	"tfc",
	"hldm",
	"dmc",
	"svencoop"
];

// general variables
var resources = "https://resources.redchanit.xyz";
var hostname = "play.redchanit.xyz";

// preload images
new Image().src = resources+"/status/offline.png";
new Image().src = resources+"/status/online.png";
new Image().src = resources+"/games/unknown.png";
new Image().src = resources+"/maps/unknown.png";

// loop through every server
document.addEventListener('DOMContentLoaded', (event) => {
	serverList.forEach(server => listServer(server));
});

// generate dummy server entries
function listServer(server) {
	// for dummy entry
	const serverId = server.id;
	const serverName = server.name;
	const serverGame = server.overrideGame ? server.overrideGame : server.game;
	// REDCHANIT: motd handling
	const serverMotd = server.motd;

	// jotting down now, displaying later
	const serverIp = server.ip;
	const serverOverrideMap = server.overrideMap;
	const serverDynmap = server.dynmap;

	// create entry element
	const container = document.getElementById("servers");
	const serverElement = document.createElement("div");
	serverElement.id = serverId;
	serverElement.className = "server";

	// populate entry with temp info
	// REDCHANIT: hide server info button if motd doesn't exist
	serverElement.innerHTML =
	`
		<div class="serverTitle">
			<img class="serverStatus" src="${resources}/status/offline.png" draggable="false" />
			<img class="serverGame" src="${resources}/games/${serverGame}.png" onerror="this.onerror=null; this.src='${resources}/games/unknown.png';" draggable="false" />
			<div>${serverName}</div>
		</div>
		
		<div class="serverContent">
			<img class="serverMap" src="${resources}/maps/unknown.png" draggable="false" />
			<div class="serverMapName"><b>Map:</b> ---</div>
			<div class="serverPlayers"><b>Players:</b> ---</div>
		</div>

		<div class="serverButtons">
			${serverMotd ? `<a href="${serverMotd}" class="serverButton serverInfo" style="width:100%;" draggable="false"><div class="info"></div></a>` : `<a class="serverButton serverInfo" style="width:100%;" draggable="false">...</a>`}
		</div>
	`

	container.appendChild(serverElement);

	// fetch server data from api
	const url = `https://api.raccoonlagoon.com/v1/server-info?ip=${serverIp}&g=${server.game}`;
	fetch(url)
		.then(response => response.json())
		.then(data => displayServerData(data, serverId, serverGame, serverMotd, serverOverrideMap, serverDynmap))
		.catch(error => console.error("Error fetching server data:", error));
}

// display server data once fetched
function displayServerData(data, serverId, serverGame, serverMotd, serverOverrideMap, serverDynmap) {
	// REDCHANIT: regex for quake3
	const serverMap = (serverOverrideMap ? serverOverrideMap : data.currentMap.replace(/^(?<=)game\/mp\/*/, ""));
	const serverElement = document.getElementById(serverId);
	const canConnect = steamGames.includes(serverGame);

	// set updated server info
	// server returned data, so it's online
	serverElement.getElementsByClassName("serverStatus")[0].src = resources+"/status/online.png";

	serverElement.getElementsByClassName("serverStatus")[0].classList.add("asyncImage");
	serverElement.getElementsByClassName("serverMap")[0].dataset.src = resources+"/maps/"+serverGame+"/"+serverMap+".png";

	serverElement.getElementsByClassName("serverMapName")[0].innerHTML = "<b>Map:</b> "+serverMap;
	serverElement.getElementsByClassName("serverMapName")[0].title = serverMap;

	// server player list
	// only show the table if there are players
	const playerListTable = data.humanData.length > 0 ?
	`${data.humanData.map(player => {
		return `${player.name}`;
	}).join("\n")}` : "";

	// only show bots if there are any
	const numOfBots = data.numBots > 0 ? ` (${data.numBots} Bots)` : "";
	// player count, hovering when players are online shows a list
	// TODO: title attribute not mobile friendly
	serverElement.getElementsByClassName("serverPlayers")[0].innerHTML = "<b>Players:</b> "+data.numHumans+"/"+data.maxClients+" "+numOfBots;
	serverElement.getElementsByClassName("serverPlayers")[0].title = playerListTable;
	if (data.numHumans > 0) {
		serverElement.getElementsByClassName("serverPlayers")[0].classList.add("tooltip");
	}

	// server buttons, done a little differently because of how dynamic they can be
	// servers that host a Steam game will replace the copy ip button with a connect button
	// REDCHANIT: hide server info button if motd doesn't exist
	serverElement.getElementsByClassName("serverButtons")[0].innerHTML =
	`
		<a ${canConnect ? `href="steam://connect/${data.serverIP}"` : ""} ${canConnect ? "" : `onclick="navigator.clipboard.writeText('${data.serverIP.replace(/^[^:]*/, hostname)}');"`} class="serverButton serverConnect" draggable="false">${canConnect ? "Connect" : "Copy IP"}</a>
		${serverDynmap ? `<a href="${serverDynmap}" class="serverButton serverDynmap" draggable="false"><div class="dynmap"></div></a>` : ""}
		${serverMotd ? `<a href="${serverMotd}" class="serverButton serverInfo" draggable="false"><div class="info"></div></a>` : ""}
	`;

	// asynchronously load map images, not replacing if they can't be found
	(() => {
		"use strict";
		const mapElement = serverElement.getElementsByClassName("serverMap")[0];
		const img = new Image();
		img.src = mapElement.dataset.src;
		img.onload = () => {
			mapElement.classList.remove('asyncImage');
			mapElement.src = mapElement.dataset.src;
		};
	})();
}