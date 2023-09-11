const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
  });
  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 380) {
      dodger.style.bottom = `${bottom + 4}px`;
    } else {
        dodger.style.bottom = `0px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      moveDodgerDown();
    }
  });
  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 4}px`;
    } else {
        dodger.style.bottom = `380px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
