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

const currentInput = [];

let currentStratagem;
const setStratagem = () => {
  const stratagem = stratagems[Math.floor(Math.random() * stratagems.length)];
  currentStratagem = stratagem;
  return stratagem
}

const resetInput = () => {
  currentInput.length = 0;
}


const checkSequence = (sequence) => { 
  if (currentInput.length <= sequence.length) {
    console.log(currentInput, sequence)
    for (let i = 0; i < currentInput.length; i++) {
      // console.log(currentInput[i] === sequence[i])
      const res = currentInput[i] === sequence[i]

      if (!res) {
        resetInput();
        return false;
      } else if(currentInput.length === sequence.length) {
        resetInput();
        return true;
      }
    }  
  } 
}


addEventListener("keydown", (event) => {
  if (event.isComposing || event.code === 229) {
      return;
  }
  keypress(event.code);
});


let onWinCallback;
const registerOnWin = (cb) => {
  onWinCallback = cb;
}

let onLoseCallback;
const registerOnLose = (cb) => {
  OnLoseCallback = cb;
}


let onStartCallback;
const registerOnStart = (cb) => {
  onStartCallback = cb;
}


const running = false;

const keypress = (key) => {
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
      onStartCallback();
    return;
  }

  
  const res = checkSequence(currentStratagem.sequence)
  if(res) { 
    onWinCallback();
  } else {
    // onLoseCallback();
  }
}
