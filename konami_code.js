let keys = {37:'left',38:'up',39:'right',40:'down',65:'a',66:'b'}
let code = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']

document.addEventListener('keydown', checkCode, false);

let keyCount = 0;

function checkCode(event) {
  let keyPressed = keys[event.keyCode];

  if (keyPressed === code[keyCount]) {
    keyCount++;

    if (keyCount === code.length) {
      cheatCodeActivated();
      resetKeyState();
    }
  } else {
    resetKeyState();
  }
}

function cheatCodeActivated() {
  alert("Cheat code activated!")
}

function resetKeyState() {
  keyCount=0;
}
