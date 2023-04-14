let curPost = 230414

function $(m) { return document.getElementById(m)}

// the following is directly copied from w3schools Lmao
dragElement($("notepad"));
dragElement($("image"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if ($(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    $(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function loadContent() {
  const p = $("content")
  const np = $("notepad")
  const img = $("image")

  np.style.width = "800px"
  np.style.height = "600px"
  img.style.left = "820px" // this doesn't work if i put it in the html file for some reason???
  // too lazy to store the text in a separate text file + i'm lazy
  switch (curPost) {
    case 230412: // this is the greatest backend of all time
      p.innerHTML = "hey everyone!<br><br>so i decided to start a blog of the stuff we're getting up to. not really for any reason, but i saw someone post a cooking recipe on github pages, which i thought was really funny for some reason. and then i spent my entire compsci period recreating notepad on windows 10 in css. yes, the icon is wrong because i was too lazy to look for the proper .ico file, plus the minimize/maximize/close buttons are fake. i'll probably develop it more later so things are actually functional, but i just wanted to finish the thing so i could put it up quickly. i did at least put in the bare minimum effort of making the window draggable, though.<br><br>so, what have we been up to lately? well, not much. we've \"started\" work on a new game based around fishing. and by that, i mean datwul has a file called \"quirky fishing game.html\". i have no idea what is in it or when he will inevitably send it to me to fix, but hopefully it will be up soon.<br>ok i just tried to add an image in a separate window and it's making me go insane because the formatting will not work and there's a tiny stupid white bar at the bottom but i'm tired so fuck it. see my ineptitude in all of its glory.<br>(also you can only drag it from the title text)<br><br>erm... yeah i guess that's it. see you whenever i have actual news!"
      document.querySelector(".title").innerHTML = "230412.txt - Notepad"
      break
    case 230414:
      p.innerHTML = "sup"
      document.querySelector(".title").innerHTML = "230414.txt - Notepad"
      img.querySelector("img").src = "230414/1.png"
      break
  }
}

function back() {
  switch (curPost) {
    case 230414:
      curPost = 230412
      loadContent()
      break
    case 230412:
      curPost = 230414
      loadContent()
      break
  }
}