//Current line
var CurrentId = undefined;

var inputValues = [];
const inputPrompts = [];

const logo = `
    __  ___       __             
   / / / (_)___ _/ /_  ___  _____
  / /_/ / / __ '/ __ \\/ _ \\/ ___/
 / __  / / /_/ / / / /  __/ /    
/_/ ///_/\\__, /_/ /_/\\___/_/     
   / /  /____/_      _____  _____
  / /   / __ \\ | /| / / _ \\/ ___/
 / /___/ /_/ / |/ |/ /  __/ /    
/_____/\\____/|__/|__/\\___/_/        
`;

const vs = `
 _    __    
| |  / /____
| | / / ___/
| |/ (__  ) 
|___/____(_)
`;

data = [
  {
    name: "Instagram",
    follower_count: 346,
    description: "Social media platform",
    country: "United States",
  },
  {
    name: "Cristiano Ronaldo",
    follower_count: 215,
    description: "Footballer",
    country: "Portugal",
  },
  {
    name: "Ariana Grande",
    follower_count: 183,
    description: "Musician and actress",
    country: "United States",
  },
  {
    name: "Dwayne Johnson",
    follower_count: 181,
    description: "Actor and professional wrestler",
    country: "United States",
  },
  {
    name: "Selena Gomez",
    follower_count: 174,
    description: "Musician and actress",
    country: "United States",
  },
  {
    name: "Kylie Jenner",
    follower_count: 172,
    description:
      "Reality TV personality and businesswoman and Self-Made Billionaire",
    country: "United States",
  },
  {
    name: "Kim Kardashian",
    follower_count: 167,
    description: "Reality TV personality and businesswoman",
    country: "United States",
  },
  {
    name: "Lionel Messi",
    follower_count: 149,
    description: "Footballer",
    country: "Argentina",
  },
  {
    name: "Beyoncé",
    follower_count: 145,
    description: "Musician",
    country: "United States",
  },
  {
    name: "Neymar",
    follower_count: 138,
    description: "Footballer",
    country: "Brasil",
  },
  {
    name: "National Geographic",
    follower_count: 135,
    description: "Magazine",
    country: "United States",
  },
  {
    name: "Justin Bieber",
    follower_count: 133,
    description: "Musician",
    country: "Canada",
  },
  {
    name: "Taylor Swift",
    follower_count: 131,
    description: "Musician",
    country: "United States",
  },
  {
    name: "Kendall Jenner",
    follower_count: 127,
    description: "Reality TV personality and Model",
    country: "United States",
  },
  {
    name: "Jennifer Lopez",
    follower_count: 119,
    description: "Musician and actress",
    country: "United States",
  },
  {
    name: "Nicki Minaj",
    follower_count: 113,
    description: "Musician",
    country: "Trinidad and Tobago",
  },
  {
    name: "Nike",
    follower_count: 109,
    description: "Sportswear multinational",
    country: "United States",
  },
  {
    name: "Khloé Kardashian",
    follower_count: 108,
    description: "Reality TV personality and businesswoman",
    country: "United States",
  },
  {
    name: "Miley Cyrus",
    follower_count: 107,
    description: "Musician and actress",
    country: "United States",
  },
  {
    name: "Katy Perry",
    follower_count: 94,
    description: "Musician",
    country: "United States",
  },
  {
    name: "Kourtney Kardashian",
    follower_count: 90,
    description: "Reality TV personality",
    country: "United States",
  },
  {
    name: "Kevin Hart",
    follower_count: 89,
    description: "Comedian and actor",
    country: "United States",
  },
  {
    name: "Ellen DeGeneres",
    follower_count: 87,
    description: "Comedian",
    country: "United States",
  },
  {
    name: "Real Madrid CF",
    follower_count: 86,
    description: "Football club",
    country: "Spain",
  },
  {
    name: "FC Barcelona",
    follower_count: 85,
    description: "Football club",
    country: "Spain",
  },
  {
    name: "Rihanna",
    follower_count: 81,
    description: "Musician and businesswoman",
    country: "Barbados",
  },
  {
    name: "Demi Lovato",
    follower_count: 80,
    description: "Musician and actress",
    country: "United States",
  },
  {
    name: "Victoria's Secret",
    follower_count: 69,
    description: "Lingerie brand",
    country: "United States",
  },
  {
    name: "Zendaya",
    follower_count: 68,
    description: "Actress and musician",
    country: "United States",
  },
  {
    name: "Shakira",
    follower_count: 66,
    description: "Musician",
    country: "Colombia",
  },
  {
    name: "Drake",
    follower_count: 65,
    description: "Musician",
    country: "Canada",
  },
  {
    name: "Chris Brown",
    follower_count: 64,
    description: "Musician",
    country: "United States",
  },
  {
    name: "LeBron James",
    follower_count: 63,
    description: "Basketball player",
    country: "United States",
  },
  {
    name: "Vin Diesel",
    follower_count: 62,
    description: "Actor",
    country: "United States",
  },
  {
    name: "Cardi B",
    follower_count: 67,
    description: "Musician",
    country: "United States",
  },
  {
    name: "David Beckham",
    follower_count: 82,
    description: "Footballer",
    country: "United Kingdom",
  },
  {
    name: "Billie Eilish",
    follower_count: 61,
    description: "Musician",
    country: "United States",
  },
  {
    name: "Justin Timberlake",
    follower_count: 59,
    description: "Musician and actor",
    country: "United States",
  },
  {
    name: "UEFA Champions League",
    follower_count: 58,
    description: "Club football competition",
    country: "Europe",
  },
  {
    name: "NASA",
    follower_count: 56,
    description: "Space agency",
    country: "United States",
  },
  {
    name: "Emma Watson",
    follower_count: 56,
    description: "Actress",
    country: "United Kingdom",
  },
  {
    name: "Shawn Mendes",
    follower_count: 57,
    description: "Musician",
    country: "Canada",
  },
  {
    name: "Virat Kohli",
    follower_count: 55,
    description: "Cricketer",
    country: "India",
  },
  {
    name: "Gigi Hadid",
    follower_count: 54,
    description: "Model",
    country: "United States",
  },
  {
    name: "Priyanka Chopra Jonas",
    follower_count: 53,
    description: "Actress and musician",
    country: "India",
  },
  {
    name: "9GAG",
    follower_count: 52,
    description: "Social media platform",
    country: "China",
  },
  {
    name: "Ronaldinho",
    follower_count: 51,
    description: "Footballer",
    country: "Brasil",
  },
  {
    name: "Maluma",
    follower_count: 50,
    description: "Musician",
    country: "Colombia",
  },
  {
    name: "Camila Cabello",
    follower_count: 49,
    description: "Musician",
    country: "Cuba",
  },
  {
    name: "NBA",
    follower_count: 47,
    description: "Club Basketball Competition",
    country: "United States",
  },
];

let accountA;
let accountB;
let score = 0;

function format_data(account) {
  return `${account.name}, a ${account.description}, from ${account.country}`;
}

//Click Run
$(document).ready(function () {
  $("#run-button").click(function () {
    inputValues = [];
    $("#Content").empty();
    restart();
  });
});

function restart() {
  NewLine(logo, false);
  accountA = data[Math.floor(Math.random() * data.length)];
  accountB = data[Math.floor(Math.random() * data.length)];

  while (accountA == accountB) {
    accountB = data[Math.floor(Math.random() * data.length)];
  }

  NewLine(`Compare A: ${format_data(accountA)}.`, false);
  NewLine(vs, false);
  NewLine(`Against B: ${format_data(accountB)}.`);
  NewLine("Who has more followers? Type 'A' or 'B': ", true);
}

function check_answer(guess, a_followers, b_followers) {
  if (a_followers > b_followers) {
    return guess == "a";
  } else {
    return guess == "b";
  }
}

//Enter button
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  if (x === 13 || x == 13) {
    var consoleLine = $("#" + CurrentId + " input").val();
    inputValues.push({ id: CurrentId, val: consoleLine });

    const guess = inputValues[inputValues.length - 1].val.toLowerCase();

    const aFollowerCount = accountA.follower_count;
    const bFollowerCount = accountB.follower_count;

    const isCorrect = check_answer(guess, aFollowerCount, bFollowerCount);
    $("#Content").empty();
    NewLine(logo, false);

    if (isCorrect) {
      score += 1;
      NewLine(`You're right! Current score: ${score}.`);
    } else {
      NewLine(`Sorry, that's wrong. Final score: ${score}`);
      $(".console-carrot").remove();
      return;
    }

    accountA = accountB;
    accountB = data[Math.floor(Math.random() * data.length)];

    while (accountA == accountB) {
      accountB = data[Math.floor(Math.random() * data.length)];
    }

    NewLine(`Compare A: ${format_data(accountA)}.`, false);
    NewLine(vs, false);
    NewLine(`Against B: ${format_data(accountB)}.`);
    NewLine("Who has more followers? Type 'A' or 'B': ", true);

    // $(".console-carrot").remove();
    // if (biddingShouldContinue) {
    //   NewLine(inputPrompts[inputValues.length - 1], true);
    // }
  }
});
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  var line = $("#" + CurrentId + " input");
  var length = line.val().length;
  if (x != 8) {
    line.attr("size", 1 + length);
  } else {
    line.attr("size", length * 0.95);
  }
  if (length === 0) {
    $("#" + CurrentId + " input").attr("size", "1");
  }
});
$(document).on("click", function (e) {
  $("#" + CurrentId + " input").focus();
});

//New line
function NewLine(text, isPrompt) {
  $(".console-carrot").remove();
  if (CurrentId !== undefined) {
    $("#" + CurrentId + " input").prop("disabled", true);
  }
  CurrentId = "consoleInput-" + GenerateId();

  if (isPrompt) {
    $("#Content").append(
      //One Line
      '<div id="' +
        CurrentId +
        '">' +
        text +
        '<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>'
    );
    $("#" + CurrentId + " input").focus();
    $("#" + CurrentId + " input").attr("size", "1");
  } else {
    $("#Content").append('<div id="' + CurrentId + '">' + text + "</div>");
  }
  document.getElementById(CurrentId).scrollIntoView();
}

function GenerateId() {
  return Math.random().toString(16).slice(2);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
