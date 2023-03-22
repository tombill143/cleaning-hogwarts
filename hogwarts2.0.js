const studentListContainer = document.getElementById("student-list");

fetch("hogwarts.json")
  .then((response) => response.json())
  .then((students) => {
    students.forEach((student) => {
      const studentElement = document.createElement("div");
      studentElement.classList.add("student");
      studentElement.innerHTML = `<h2>Name: ${capitaliseName(
        student.fullname
      )}</h2><h2>Gender: ${capitaliseGender(
        student.gender
      )}</h2><h2>House: ${capitaliseHouse(student.house)}</h2>`;

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
  } else if (input.endsWith(".jpg")) {
    output = "File extension is .jpg";
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

function removeHyphenFromNickname(fullname) {
  let output = fullname.charAt(0);
  for (let i = 1; i < fullname.length; i++) {
    if (fullname.charAt(i - 1) === " " || fullname.charAt(i - 1) === "-") {
      output += fullname.charAt(i).toUpperCase();
    } else {
      output += fullname.charAt(i);
    }
  }
  return output;
}
