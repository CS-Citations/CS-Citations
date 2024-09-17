function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}




function switch_theme() {
	let theme = getCookie("theme");

	if (theme == "") {
		setCookie("theme","dark",365);
		theme="dark";
  	}



	if (theme=="light"){
		setCookie("theme","dark",365);
	}
	else{
		setCookie("theme","light",365);
	}

	update_theme();
}


function update_theme() {
	let theme = getCookie("theme");

	if (theme == "") {
		setCookie("theme","dark",365);
		theme="dark";
  	}

	if (theme=="light"){
		document.querySelector(':root').style.setProperty('--darc', '#F3F3F3');
		document.querySelector(':root').style.setProperty('--lite', '#303841');
		document.querySelector(':root').style.setProperty('--sec', '#3A4750');
		document.querySelector(':root').style.setProperty('--acc', '#2185D5');
		
		document.getElementById("theme-icon").style.setProperty('filter','invert(0%)');
		document.getElementById("home-icon").style.setProperty('filter','invert(0%)');
		
	}
	else{
		document.querySelector(':root').style.setProperty('--darc', '#272829');
		document.querySelector(':root').style.setProperty('--lite', '#D8D9DA');
		document.querySelector(':root').style.setProperty('--sec', '#61677A');
		document.querySelector(':root').style.setProperty('--acc', '#FFF6E0');
		

		document.getElementById("theme-icon").style.setProperty('filter','invert(100%)');
		document.getElementById("home-icon").style.setProperty('filter','invert(100%)');
	}
	console.log(getCookie("theme"));
}

window.onload=update_theme();