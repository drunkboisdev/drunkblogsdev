let curPost = 230429

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
  np.style.height = "800px"
  img.style.left = "820px" // this doesn't work if i put it in the html file for some reason???
  // too lazy to store the text in a separate text file + i'm lazy
  switch (curPost) {
    case 230412: // this is the greatest backend of all time
      p.innerHTML = "hey everyone!<br><br>so i decided to start a blog of the stuff we're getting up to. not really for any reason, but i saw someone post a cooking recipe on github pages, which i thought was really funny for some reason. and then i spent my entire compsci period recreating notepad on windows 10 in css. yes, the icon is wrong because i was too lazy to look for the proper .ico file, plus the minimize/maximize/close buttons are fake. i'll probably develop it more later so things are actually functional, but i just wanted to finish the thing so i could put it up quickly. i did at least put in the bare minimum effort of making the window draggable, though.<br><br>so, what have we been up to lately? well, not much. we've \"started\" work on a new game based around fishing. and by that, i mean datwul has a file called \"quirky fishing game.html\". i have no idea what is in it or when he will inevitably send it to me to fix, but hopefully it will be up soon.<br>ok i just tried to add an image in a separate window and it's making me go insane because the formatting will not work and there's a tiny stupid white bar at the bottom but i'm tired so fuck it. see my ineptitude in all of its glory.<br>(also you can only drag it from the title text)<br><br>erm... yeah i guess that's it. see you whenever i have actual news!"
      document.querySelector(".title").innerHTML = "230412.txt - Notepad"
      img.querySelector("img").src = "230412/1.png"
      break
    case 230414:
      p.innerHTML = "hello again! i'm not going to lie, i was not expecting to have to update this so early. however, as they say, spite is the greatest motivator, so datwul sent me his code almost immediately after i posted two days ago. naturally, i did what i always do and rewrote all the javascript (plus some css and html). in addition, i changed some things according to a planning document i made a few months ago. yeah... we first bounced around the idea for a fishing idle game back in february because of a discord bot (lol???), so i made this file to store ideas. you can see some of it in the attached image. yes, it cuts off there.<br><br>by the way, if you want to see the last post, click the word \"File\" at the top. i would have added a dropdown and file menu, but i am in my school's compsci club as i write this and i don't have enough time to add that (i'm also busy tonight), so have this instead. honestly, i'm surprised it worked first try (if you don't count storing the post number as a constant).<br>until next time!!!"
      document.querySelector(".title").innerHTML = "230414.txt - Notepad"
      img.querySelector("img").src = "230414/1.png"
      break
    case 230423:
      p.innerHTML = "hello! i am back after a whole week (plus 2 days and a couple of hours). i know, it's crazy. anyways, let's get to business. i know everyone is obviously here for the fishing game and nothing else, so here you go. progress on the new update is going pretty well, surprisingly enough. a short peek at the changes i've made so far:<br>- visual changes (you can actually see the pond you're fishing in now)<br>- brand new ui (first ever drunkboisdev project to get a proper one, in fact)<br>- saving (huge!!!)<br><br>so yeah, it's been smooth sailing so far. there's still a lot i have planned, like a research system and different types of fishing tools, but i will give a tentative release date of May 6 (mark your calendars, if you care enough). generally i don't like giving release dates because it makes me feel like the World will End if i miss it, but i think 2 weeks is enough time to finish everything i want to finish.<br><br>there is a lot more on my list of projects i want to work on. for example, i really want to clean up this blog and make it less terrible, i just want to focus on fish for the time being. i'll probably make another post when i release the update, then another when i fix this blog's code (which could be anywhere between tomorrow and when i'm on my deathbed). bye!<br>also, since you might be wondering why the title says blod: i misspelled it, fixed it, decided \"blod\" would be funnier and reverted it<br><br>addendum: i just noticed a bug with the image switching so i had to fix that OK IM ACTUALLY DONE NOW<br><br>edit: i forgot i will not be home on May 6. i am pushing it back to may 8th."
      document.querySelector(".title").innerHTML = "230423.txt - Notepad"
      img.querySelector("img").src = "230423/1.png"
      break
    case 230429:
      p.innerHTML = "alright what's up everyone. i said i would post another update when the fishing game (still don't know what to call it) update came out, and it is basically ready to ship unless i run into 20 bugs right now, so here you go. there's lots of fun new features to make it more of an actual game and not a click button repeatedly simulator (although it is an idle game, so it's not that far off). \"but wait!\" i hear you say (not really). \"didn't you say it was going to release on the 8th?\" well, my executive dysfunction decided to take a break for a few days and i got a bunch of work done. so that was pretty awesome. anyway, some stats about the update, because i love stats:<br>- the file size went from 4.2kb to 19.3kb (4.6x increase!)<br>- the css file is 2023 bytes (this year)<br>- i have two planning files that cover the same thing for some reason<br>- this update went through at least 12 sub-updates (i say at least because i only started counting on the 22nd)<br>- i could have made $153 in the time it took to make this update if i spent the time working minimum wage instead<br><br>ok, when i said \"ready to ship\" i meant \"i got all the programming done i just gotta do the art\" and it has inspired a strong hatred of drawing water in me. i can probably get it done for may 1st though just trust me on this one. also i still have to playtest, make sure the cost curve makes sense, make sure there aren't any really dumb bugs (of which there are MANY i have had to iron out so far), so actually maybe later. next week for sure though mark my words.<br><br>now that that's done, the next thing on the horizon is this blog. i do want to improve it, it's just that the thought of rewriting that abhorrent rushed mess manages to deter me every time. one of these days, i will overcome it and it will be awesome. until then, not as awesome. then after that, the next fishing update. i don't have any plans besides vague ideas, so it'll be a while coming (likely late May or after). after that, who knows?<br><br>also, i had a dream last night where some kids blew up a cartoon tnt box and caused the destruction of a railroad, four bridges and a canyon. see you next time!<br><br>if you notice the window is bigger, i had to extend the box because there was too much text lol"
      document.querySelector(".title").innerHTML = "230429.txt - Notepad"
      img.querySelector("img").src = "230429/1.png"
      break
  }
}

function back() {
  switch (curPost) {
    case 230429:
      curPost = 230423
      loadContent()
      break
    case 230423:
      curPost = 230414
      loadContent()
      break
    case 230414:
      curPost = 230412
      loadContent()
      break
    case 230412:
      curPost = 230429
      loadContent()
      break
  }
}