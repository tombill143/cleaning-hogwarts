const studentListContainer = document.getElementById("student-list");

fetch("hogwarts.json")
  .then((response) => response.json())
  .then((students) => {
    students.forEach((student) => {
      const studentElement = document.createElement("div");
      studentElement.classList.add("student");
      const imgSrc =
        "C:Users\tombiOneDriveDesktopITKEA MMD\3rd Semestercleaner-hogwartsimages" +
        student.fullname.toLowerCase().replace(/\s+/g, "-") +
        ".png";
      studentElement.innerHTML = `<h2>Name: ${capitaliseName(
        removeHyphenFromName(student.fullname),
        removeQuotationMarks(student.fullname)
      )}</h2><img src="${imgSrc}" alt="${
        student.fullname
      }"><h2>Gender: ${capitaliseGender(
        student.gender
      )}</h2><h2>House: ${capitaliseHouse(student.house)}</h2>`;
      console.log(`here are the student images${imgSrc}`);
      studentElement.addEventListener("click", () => {
        alert(
          `name: ${student.fullname}\n house:  ${student.house} \ngender: ${student.gender}`
        );
      });
      studentListContainer.appendChild(studentElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching actor data:", error);
  });

function processInput() {
  let input = document.getElementById("input").value;
  let option = document.getElementById("option").value;
  let output = "";

  if (option === "first-name") {
    output = uppercaseName(input);
  } else if (option === "find-first-name") {
    output = findFirstName(input);
  } else if (option === "find-first-name-length") {
    output = findFirstNameLength(input);
  } else if (option === "find-middle-name") {
    output = findMiddleName(input);
  } else if (option === "check-file-extension") {
    output = checkFileExtension(input);

    document.getElementById("output").innerHTML = output;
  }
}

function uppercaseThirdChar(input) {
  let output =
    input.substring(0, 2) + input.charAt(2).toUpperCase() + input.substring(3);
  return output;
}

function uppercaseName(input) {
  let words = input.split(" ");
  let output = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    output += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
  }
  return output.trim();
}

function findFirstName(input) {
  let output = input.split(" ")[0];
  return output;
}

function findFirstNameLength(input) {
  let firstName = findFirstName(input);
  let output = firstName.length;
  return output;
}

function findMiddleName(input) {
  let names = input.trim().split(" ");
  let output = "";

  if (names.length > 2) {
    let middleNames = names.slice(1, -1);

    if (middleNames.length > 0) {
      output = middleNames.join(" ");
    }
  }

  return output;
}

function checkFileExtension(input) {
  let output = "";
  if (input.endsWith(".png")) {
    output = "File extension is .png";
  } else if (input.endsWith(".png")) {
    output = "File extension is .png";
  } else {
    output = "File extension is not supported";
  }
  return output;
}

function hidePassword(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += "*";
  }
  return output;
}

function capitalizeAfterSpaceHyphen(input) {
  let output = input.charAt(0);
  for (let i = 1; i < input.length; i++) {
    if (input.charAt(i - 1) === " " || input.charAt(i - 1) === "-") {
      output += input.charAt(i).toUpperCase();
    } else {
      output += input.charAt(i);
    }
  }
  return output;
}
function capitaliseName(name) {
  if (!name) {
    return "";
  }
  const nameParts = name.split(" ");
  return nameParts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function capitaliseGender(gender) {
  const makeGenderUppercase = gender.split(" ");
  return makeGenderUppercase
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function capitaliseHouse(house) {
  const makeHouseUppercase = house.split(" ");
  return makeHouseUppercase
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function removeHyphenFromName(fullname) {
  let output = "";
  let nicknameStarted = false;

  for (let i = 0; i < fullname.length; i++) {
    if (fullname.charAt(i) === "-") {
      output += " ";
      nicknameStarted = true;
    } else if (nicknameStarted) {
      output += fullname.charAt(i);
    } else {
      output += fullname.charAt(i);
    }
  }

  return output;
}

function removeQuotationMarks(fullname) {
  let result = fullname.replace(/["\\]/g, "");
  return result;
}

//--------------------FUNCTION WHICH SETS THE TIME----------------------------------
// Get a reference to the button elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

// Create a function to update the buttons with the current time and date
function updateButtons() {
  // Get the current time
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0"); // add leading zero if necessary
  const minutes = String(now.getMinutes()).padStart(2, "0"); // add leading zero if necessary
  let suffix = "";

  // Determine whether it's morning or afternoon
  if (hours < 12) {
    suffix = "am";
  } else {
    suffix = "pm";
    hours -= 12;
  }

  // Update the first button with the time and suffix
  button1.textContent = `${hours}:${minutes}${suffix}`;

  // Get the current date
  const day = String(now.getDate()).padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");

  // Update the second button with the date
  button2.textContent = `${day}/${month}/1991`;
}

// Update the buttons every second
setInterval(updateButtons, 1000);

//-----------------------------FUNCTION WHICH ENABLES THE SEARCH BAR FEATURE---------------------------------
function search() {
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("input");
  table = document.getElementById("student-list");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    for (j = 0; j < tr[i].cells.length; j++) {
      td = tr[i].cells[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const students = document.querySelectorAll(".student");
  students.forEach((student) => {
    const name = student
      .querySelector("h2:first-of-type")
      .textContent.toLowerCase();
    const nameWords = name.split(" ");
    if (nameWords.some((word) => word.includes(searchTerm))) {
      student.style.display = "block";
    } else {
      student.style.display = "none";
    }
  });
};

const searchBar = document.getElementById("input");
searchBar.addEventListener("input", handleSearch);
