const stratagems = [
  {
    name: "Machine Gun",
    sequence: "24286",
    image: ""
  },
  {
    name: "Anti-Material Rifle",
    sequence: "24682",
    image: ""
  },
  {
    name: "Stalwart",
    sequence: "242884",
    image: ""
  },
  {
    name: "Expendable Anti-Tank",
    sequence: "22486",
    image: ""
  },
  {
    name: "Recoilless Rifle",
    sequence: "24664",
    image: ""
  },
  {
    name: "Flamethrower",
    sequence: "24828",
    image: ""
  },
  {
    name: "Autocannon",
    sequence: "26422886",
    image: ""
  },
  {
    name: "Railgun",
    sequence: "264228426",
    image: ""
  },
  {
    name: "Spear",
    sequence: "22822",
    image: ""
  },
  {
    name: "Gatling Barrage",
    sequence: "62488",
    image: ""
  },
  {
    name: "Airburst Strike",
    sequence: "666",
    image: ""
  },
  {
    name: "120MM HE Barrage",
    sequence: "62242622",
    image: ""
  },
  {
    name: "380MM HE Barrage",
    sequence: "622884222",
    image: ""
  },
  {
    name: "Walking Barrage",
    sequence: "626262",
    image: ""
  },
  {
    name: "Laser Strike",
    sequence: "684864",
    image: ""
  },
  {
    name: "Railcannon Strike",
    sequence: "62824",
    image: ""
  },
  {
    name: "Eagle Strafing Run",
    sequence: "866",
    image: ""
  },
  {
    name: "Eagle Airstrike",
    sequence: "8626",
    image: ""
  },
  {
    name: "Eagle Cluster Bomb",
    sequence: "862262",
    image: ""
  },
  {
    name: "Eagle Napalm Airstrike",
    sequence: "8628",
    image: ""
  },
  {
    name: "Jump Pack",
    sequence: "28828",
    image: ""
  },
  {
    name: "Eagle Smoke Strike",
    sequence: "8682",
    image: ""
  },
  {
    name: "Eagle 110MM Rocket Pods",
    sequence: "8284",
    image: ""
  },
  {
    name: "Eagle 500KG Bomb",
    sequence: "84222",
    image: ""
  },
  {
    name: "Orbital Precision Strikes",
    sequence: "668",
    image: ""
  },
  {
    name: "Orbital Gas Strike",
    sequence: "6626",
    image: ""
  },
  {
    name: "Orbital EMS Strike",
    sequence: "6642",
    image: ""
  },
  {
    name: "Orbital Smoke Strike",
    sequence: "6628",
    image: ""
  },
  {
    name: "HMG Emplacement",
    sequence: "824664",
    image: ""
  },
  {
    name: "Shield Generator Relay",
    sequence: "284642",
    image: ""
  },
  {
    name: "Tesla Tower",
    sequence: "286846",
    image: ""
  },
  {
    name: "Anti-Personnel Minefield",
    sequence: "24286",
    image: ""
  },
  {
    name: "Supply Pack",
    sequence: "242882",
    image: ""
  },
  {
    name: "Grenade Launcher",
    sequence: "2428422",
    image: ""
  },
  {
    name: "Laser Cannon",
    sequence: "24284",
    image: ""
  },
  {
    name: "Incendiary Mines",
    sequence: "2442",
    image: ""
  },
  {
    name: "Guard Dog Rover",
    sequence: "2428422",
    image: ""
  },
  {
    name: "Ballistic Shield Backpack",
    sequence: "24886",
    image: ""
  },
  {
    name: "Arc Thrower",
    sequence: "26842",
    image: ""
  },
  {
    name: "Shield Generator Pack",
    sequence: "284266",
    image: ""
  },
  {
    name: "Machine Gun Sentry",
    sequence: "28668",
    image: ""
  },
  {
    name: "Gatling Sentry",
    sequence: "28642",
    image: ""
  },
  {
    name: "Mortar Sentry",
    sequence: "28662",
    image: ""
  },
  {
    name: "Guard Dog",
    sequence: "284862",
    image: ""
  },
  {
    name: "Autocannon Sentry",
    sequence: "286848",
    image: ""
  },
  {
    name: "Rocket Sentry",
    sequence: "28664",
    image: ""
  },
  {
    name: "EMS Mortar Sentry",
    sequence: "22884",
    image: ""
  },
  {
    name: "Reinforce",
    sequence: "82648",
    image: ""
  },
  {
    name: "SOS Beacon",
    sequence: "8268",
    image: ""
  },
  {
    name: "Super Earth Flag",
    sequence: "2828",
    image: ""
  },
  {
    name: "Upload Data ",
    sequence: "46888",
    image: ""
  },
  {
    name: "Hellbomb",
    sequence: "28428628",
    image: ""
  }
]

const totalTime = 10 * 1000;
const stepSize = 10;
let timeLeft = totalTime;

let onWinCallback;
const registerOnWin = (cb) => {
  onWinCallback = cb;
}

let onLoseCallback;
const registerOnLose = (cb) => {
  onLoseCallback = cb;
}


let onStartCallback;
const registerOnStart = (cb) => {
  onStartCallback = cb;
}

let onStreakCallback;
const registerOnStreak = (cb) => {
  onStreakCallback = cb;
}

let onKeyDownCallback;
const registerOnKeyDown = (cb) => {
  onKeyDownCallback = cb;
}

let currentInput = [];
let bestStreak = 0;
let streak = 0;
let lastTime = Date.now();
let running = false;

const restart = () => {
  lastTime = Date.now();
  timeLeft = totalTime;
  resetInput();
  streak = 0;
}


let currentStratagem;
const setStratagem = () => {
  const stratagem = stratagems[Math.floor(Math.random() * stratagems.length)];
  currentStratagem = stratagem;
  return stratagem
}

const resetInput = () => {
  currentInput = []
}


const checkSequence = (sequence) => { 
  const asList = Array.from(sequence)
  if (currentInput.length <= asList.length) {
    for (let i = 0; i < currentInput.length; i++) {
      const res = currentInput[i] === asList[i]
      if (!res) {
        
        resetInput();
        streak = 0;
        onStreakCallback();
        return false;
      } 
    } 

    if(currentInput.length === asList.length) {
      resetInput();
      streak++;
      if(streak > bestStreak) {
        bestStreak = streak;
      }
      onStreakCallback();
      return true;
    }
  } 
}


addEventListener("keydown", (event) => {
  if (event.isComposing || event.code === 229) {
      return;
  }
  keypress(event.code);
});

let timeout;
const tick = () => {
  const now = Date.now();
  const delta = now - lastTime;
  lastTime = now;
  timeLeft -= delta;
  
  if(timeLeft <= 0) {
    onLoseCallback(bestStreak);
    clearTimeout(timeout);
    running = false;
  }

  timeout = setTimeout(() => {
    tick();
  }, stepSize);
  updateTimer();
}


function updateTimer(){
  let bar = document.getElementById("timer-bar");  
  const width = ((timeLeft/totalTime) * 100);
  bar.style.width = `${width}%`;   
}


const keypress = (key) => {
  if(!running) {
    restart();
    onStartCallback();
    running = true;
  }

  switch (key) {
    case "KeyW":
    case "ArrowUp":
      currentInput.push("8");
    break;
    case "KeyA":
    case "ArrowLeft":
      currentInput.push("4");
    break;
    case "KeyS":
    case "ArrowDown":
      currentInput.push("2");
    break;
    case "KeyD":
    case "ArrowRight":
      currentInput.push("6");
    break;
    default: 
    return;
  }
  
  const res = checkSequence(currentStratagem.sequence)
  if(res) { 
    onWinCallback();
  } 
  onKeyDownCallback(currentStratagem, currentInput);
}

const getStreak = () => { 
  return streak;
}
