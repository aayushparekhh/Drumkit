window.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown") {
    const downkey = document.getElementById("dkey");
    const audio = document.getElementById("down-key");
    downkey.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    downkey.addEventListener("transitionend", function (e) {
      downkey.classList.remove("playing");
    });
  } else if (e.key == "a") {
    const downkey = document.getElementById("akey");
    const audio = document.getElementById("a-key");
    downkey.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    downkey.addEventListener("transitionend", function (e) {
      downkey.classList.remove("playing");
    });
  } else if (e.key == "s") {
    const downkey = document.getElementById("skey");
    const audio = document.getElementById("s-key");
    audio.currentTime = 0;
    audio.play();
    downkey.classList.add("playing");
    downkey.addEventListener("transitionend", function (e) {
      downkey.classList.remove("playing");
    });
  } else if (e.key == "d") {
    const downkey = document.getElementById("Dkey");
    const audio = document.getElementById("d-key");
    audio.currentTime = 0;
    audio.play();
    downkey.classList.add("playing");
    downkey.addEventListener("transitionend", function (e) {
      downkey.classList.remove("playing");
    });
  } else if (e.key == "ArrowUp") {
    const downkey = document.getElementById("upkey");
    const audio = document.getElementById("up-key");
    audio.currentTime = 0;
    audio.play();
    downkey.classList.add("playing");
    downkey.addEventListener("transitionend", function (e) {
      downkey.classList.remove("playing");
    });
  } else if (e.key == "ArrowRight") {
    const downkey = document.getElementById("rkey");
    const audio = document.getElementById("right-key");
    audio.currentTime = 0;
    audio.play();
    downkey.classList.add("playing");
    downkey.addEventListener("transitionend", function (e) {
      downkey.classList.remove("playing");
    });
  } else if (e.key == "ArrowLeft") {
    const downkey = document.getElementById("lkey");
    const audio = document.getElementById("left-key");
    audio.currentTime = 0;
    audio.play();
    downkey.classList.add("playing");
    downkey.addEventListener("transitionend", function (e) {
      downkey.classList.remove("playing");
    });
  }
});
