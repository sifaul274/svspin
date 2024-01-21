function randomNum(mini,maxi){
	var mini = Math.ceil(mini);
	var maxi = Math.floor(maxi);
	return Math.floor(Math.random()*(maxi-mini+1))+mini;
}
function red1(){
	document.getElementById("o-red").style.display = "none";
	document.getElementById("l-red").style.display = "block";
}
function red2(){
	document.getElementById("l-red").style.display = "none";
	document.getElementById("o-red").style.display = "block";
}
function blue1(){
	document.getElementById("o-blue").style.display = "none";
	document.getElementById("l-blue").style.display = "block";
}
function blue2(){
	document.getElementById("l-blue").style.display = "none";
	document.getElementById("o-blue").style.display = "block";
}
function yellow1(){
	document.getElementById("o-yellow").style.display = "none";
	document.getElementById("l-yellow").style.display = "block";
}
function yellow2(){
	document.getElementById("l-yellow").style.display = "none";
	document.getElementById("o-yellow").style.display = "block";
}
function purple1(){
	document.getElementById("o-purple").style.display = "none";
	document.getElementById("l-purple").style.display = "block";
}
function purple2(){
	document.getElementById("l-purple").style.display = "none";
	document.getElementById("o-purple").style.display = "block";
}
function gacha(){
	var prize = randomNum(6,17);
	if (prize<=9 || prize>=16) {
		var prize1 = randomNum(6,17);
		if (prize1==6){
			document.getElementById("img1").src = "gallery/Pawmi.png";
			document.getElementById("c-rar").innerHTML = "CMN";
			document.getElementById("namePk").innerHTML = "Pawmi";
		} else if (prize1==7){
			document.getElementById("img1").src = "gallery/Smoliv.png";
			document.getElementById("c-rar").innerHTML = "CMN";
			document.getElementById("namePk").innerHTML = "Smoliv";
		} else if (prize1==8){
			document.getElementById("img1").src = "gallery/Lechonk.png";
			document.getElementById("c-rar").innerHTML = "CMN";
			document.getElementById("namePk").innerHTML = "Lechonk";
		} else if (prize1==9){
			document.getElementById("img1").src = "gallery/PaldeanWooper.png";
			document.getElementById("c-rar").innerHTML = "CMN";
			document.getElementById("namePk").innerHTML = "Paldean Wooper";
		} else if (prize1==10){
			document.getElementById("img1").src = "gallery/Fidough.png";
			document.getElementById("c-rar").innerHTML = "CMN";
			document.getElementById("namePk").innerHTML = "Fidough";
		} else if (prize1==11){
			document.getElementById("img1").src = "gallery/Grafaiai.png";
			document.getElementById("c-rar").innerHTML = "CMN";
			document.getElementById("namePk").innerHTML = "Grafaiai";
		} else if (prize1==12){
			document.getElementById("img1").src = "gallery/Pikachu.png";
			document.getElementById("c-rar").innerHTML = "OCM";
			document.getElementById("namePk").innerHTML = "Pikachu";
		} else if (prize1==13){
			document.getElementById("img1").src = "gallery/Eevee.png";
			document.getElementById("c-rar").innerHTML = "OCM";
			document.getElementById("namePk").innerHTML = "Eevee";
		} else if (prize1==14){
			document.getElementById("img1").src = "gallery/Marill.png";
			document.getElementById("c-rar").innerHTML = "OCM";
			document.getElementById("namePk").innerHTML = "Marill";
		} else if (prize1==15){
			document.getElementById("img1").src = "gallery/Petilil.png";
			document.getElementById("c-rar").innerHTML = "OCM";
			document.getElementById("namePk").innerHTML = "Petilil";
		} else if (prize1==16){
			document.getElementById("img1").src = "gallery/Fletchling.png";
			document.getElementById("c-rar").innerHTML = "OCM";
			document.getElementById("namePk").innerHTML = "Fletchling";
		} else {
			document.getElementById("img1").src = "gallery/Rockruff.png";
			document.getElementById("c-rar").innerHTML = "OCM";
			document.getElementById("namePk").innerHTML = "Rockruff";
		}
	} else if (prize==10) {
		var prize2 = randomNum(6,8);
		if (prize2==8) {
			var prize2a = randomNum(6,7);
			if (prize2a==6){
				document.getElementById("img1").src = "gallery/Koraidon.png";
				document.getElementById("c-rar").innerHTML = "LGN";
				document.getElementById("namePk").innerHTML = "Koraidon";
			} else {
				document.getElementById("img1").src = "gallery/Miraidon.png";
				document.getElementById("c-rar").innerHTML = "LGN";
				document.getElementById("namePk").innerHTML = "Miraidon";
			}
		} else {
			var prize2b = randomNum(6,8);
			if (prize2b==6){
				document.getElementById("img1").src = "gallery/Sprigatito.png";
				document.getElementById("c-rar").innerHTML = "UNQ";
				document.getElementById("namePk").innerHTML = "Sprigatito";
			} else if (prize2b==7){
				document.getElementById("img1").src = "gallery/Fuecoco.png";
				document.getElementById("c-rar").innerHTML = "UNQ";
				document.getElementById("namePk").innerHTML = "Fuecoco";
			} else {
				document.getElementById("img1").src = "gallery/Quaxly.png";
				document.getElementById("c-rar").innerHTML = "UNQ";
				document.getElementById("namePk").innerHTML = "Quaxly";
			}
		}
	} else if (prize>10 && prize<=14) {
		var prize3 = randomNum(6,10);
		if (prize3==6){
			document.getElementById("img1").src = "gallery/Cetitan.png";
			document.getElementById("c-rar").innerHTML = "UCM";
			document.getElementById("namePk").innerHTML = "Cetitan";
		} else if (prize3==7){
			document.getElementById("img1").src = "gallery/Cyclizar.png";
			document.getElementById("c-rar").innerHTML = "UCM";
			document.getElementById("namePk").innerHTML = "Cyclizar";
		} else if (prize3==8){
			document.getElementById("img1").src = "gallery/Klawf.png";
			document.getElementById("c-rar").innerHTML = "UCM";
			document.getElementById("namePk").innerHTML = "Klawf";
		} else if (prize3==9){
			document.getElementById("img1").src = "gallery/Armarouge.png";
			document.getElementById("c-rar").innerHTML = "UCM";
			document.getElementById("namePk").innerHTML = "Armarouge";
		} else {
			document.getElementById("img1").src = "gallery/Ceruledge.png";
			document.getElementById("c-rar").innerHTML = "UCM";
			document.getElementById("namePk").innerHTML = "Ceruledge";
		}
	} else {
		var prize4 = randomNum(6,8);
		if (prize4==6){
			document.getElementById("img1").src = "gallery/Sprigatito.png";
			document.getElementById("c-rar").innerHTML = "UNQ";
			document.getElementById("namePk").innerHTML = "Sprigatito";
		} else if (prize4==7){
			document.getElementById("img1").src = "gallery/Fuecoco.png";
			document.getElementById("c-rar").innerHTML = "UNQ";
			document.getElementById("namePk").innerHTML = "Fuecoco";
		} else {
			document.getElementById("img1").src = "gallery/Quaxly.png";
			document.getElementById("c-rar").innerHTML = "UNQ";
			document.getElementById("namePk").innerHTML = "Quaxly";
		}
	}
}
function reset(){
	document.getElementById("img1").src = "gallery/Siluet.png";
	document.getElementById("c-rar").innerHTML = "??";
	document.getElementById("namePk").innerHTML = "???";
}
function toV(){
	document.getElementById("chg-spi").style.backgroundColor = "rgb(127,0,255)";
	document.getElementById("chg-thm").style.backgroundColor = "rgb(127,0,255)";
	document.getElementById("chg-rar").style.backgroundColor = "rgb(127,0,255)";
}
function spin(){
	setTimeout(reset,200);
	setTimeout(blue1,200);
	setTimeout(blue2,400);
	setTimeout(purple1,400);
	setTimeout(purple2,600);
	setTimeout(yellow1,600);
	setTimeout(yellow2,800);
	setTimeout(red1,800);
	setTimeout(red2,1000);
	setTimeout(blue1,1000);
	setTimeout(blue2,1150);
	setTimeout(purple1,1150);
	setTimeout(purple2,1300);
	setTimeout(yellow1,1300);
	setTimeout(yellow2,1450);
	setTimeout(red1,1450);
	setTimeout(red2,1600);
	setTimeout(blue1,1600);
	setTimeout(blue2,1700);
	setTimeout(purple1,1700);
	setTimeout(purple2,1800);
	setTimeout(yellow1,1800);
	setTimeout(yellow2,1900);
	setTimeout(red1,1900);
	setTimeout(red2,2000);
	setTimeout(gacha,2000);
}
function changeS(){
	document.getElementById("chg-btn-s").style.display = "none";
	document.getElementById("chg-btn-v").style.display = "block";
	document.getElementById("chg-btn-v").style.marginLeft = "12px";
	document.getElementById("chg-con").style.backgroundImage = "linear-gradient(to bottom right, rgb(220,250,220), rgb(127,0,255))";
	document.getElementById("chg-hea").style.backgroundColor = "rgb(127,0,255)";
	document.getElementById("chg-thm").style.backgroundColor = "rgb(127,0,255)";
	document.getElementById("chg-rar").style.backgroundColor = "rgb(127,0,255)";
	document.getElementById("chg-spi").style.backgroundColor = "rgb(127,0,255)";
}
function changeV(){
	document.getElementById("chg-btn-v").style.display = "none";
	document.getElementById("chg-btn-s").style.display = "block";
	document.getElementById("chg-btn-s").style.marginLeft = "12px";
	document.getElementById("chg-con").style.backgroundImage = "linear-gradient(to bottom right, rgb(220,250,220), rgb(255,36,0))";
	document.getElementById("chg-hea").style.backgroundColor = "rgb(255,36,0)";
	document.getElementById("chg-thm").style.backgroundColor = "rgb(255,36,0)";
	document.getElementById("chg-rar").style.backgroundColor = "rgb(255,36,0)";
	document.getElementById("chg-spi").style.backgroundColor = "rgb(255,36,0)";
}