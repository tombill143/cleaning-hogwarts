"use strict";

let settings = {
  allStudents: [],
};

//----------------------FETCHING----------------------------------------------------------

fetch("https://petlatkea.dk/2021/hogwarts/students.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the cleanData function with the data from the endpoint
    const cleanedData = cleanData(data);

    // Do something with the cleaned data, such as displaying it on a web page
    console.log(cleanedData);
    const tableBody = document.getElementById("table-body");
    // loop through the data and create a row for each student
    data.forEach((item) => {
      const fullname = item.fullname;
      const gender = item.gender;
      const house = item.house;

      // create a new row
      const row = document.createElement("tr");

      // create a cell for the name
      const nameCell = document.createElement("td");
      nameCell.textContent = fullname;
      row.appendChild(nameCell);

      // create a cell for the gender
      const genderCell = document.createElement("td");
      genderCell.textContent = gender;
      row.appendChild(genderCell);

      // create a cell for the house
      const houseCell = document.createElement("td");
      houseCell.textContent = house;
      row.appendChild(houseCell);

      // add the row to the table
      tableBody.appendChild(row);
    });

    // render the data in the table
    renderData(cleanData);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//-----------------------FETCHING END-------------------------------------------------

function renderData(data) {
  // get the table body element
  const tableBody = document.getElementById("table-body");

  // iterate over data array and create table rows
  for (let student of data) {
    const row = document.createElement("tr");
    const fullNameArray = capitalise(
      student.fullname.replace(/["']/g, "")
    ).split(" ");
    let firstName = fullNameArray[0];
    let middleName =
      fullNameArray.length === 3 && fullNameArray[1] !== ""
        ? fullNameArray[1].charAt(0).toUpperCase() + fullNameArray[1].slice(1)
        : null;
    let lastName = fullNameArray[fullNameArray.length - 1];

    if (lastName) {
      lastName = lastName.replace(/-/g, " ");
    }
    if (middleName === null) {
      middleName = "null";
    }

    const data = [
      firstName,
      middleName,
      lastName,
      student.gender,
      student.portrait,
      student.house,
    ];

    for (let datum of data) {
      const row = document.createElement("tr");
      const fullNameArray = capitalize(
        student.fullname.replace(/["']/g, "")
      ).split(" ");
      const td = document.createElement("td");
      if (datum === student.portrait) {
        const img = document.createElement("img");
        img.src = `./images/${datum}`;
        img.alt = `img`;
        td.appendChild(img);
      } else if (datum === student.house) {
        const img = document.createElement("img");
        img.src = `./house-images/${datum}.png`; // assuming the house image file names end with ".png"
        img.alt = `img`;
        td.appendChild(img);
      } else {
        td.textContent = datum;
      }
      row.appendChild(td);
    }

    row.style.backgroundColor = houseColors[student.house];
    if (student.house === "Hufflepuff") {
      for (let td of row.children) {
        td.style.color = "black";
      }
    } else if (student.house === "Gryffindor") {
      for (let td of row.children) {
        td.style.color = "#F0BA2B";
      }
    } else if (student.house === "Slytherin") {
      for (let td of row.children) {
        td.style.color = "#c9c6c6";
      }
    } else if (student.house === "Ravenclaw") {
      for (let td of row.children) {
        td.style.color = "#da9d43";
      }
    }

    tableBody.appendChild(row);
  }
}

//--------------------------THE HEADERS-----------------------------------------------------

// create header row
const headerRow = document.createElement("tr");
const headers = [
  "First Name",
  "Middle Name",
  "Last Name",
  "Gender",
  "Portrait",
  "House",
];

headers.forEach((header) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = header;
  headerRow.appendChild(headerCell);
});

// create table element
const table = document.createElement("table");

// append header row to table
table.appendChild(headerRow);

//----------------- -----THE HEADERS END -----------------------------------------------------

//--------------------CLEANED DATA FUNCTIONS-------------------------------------------------
function cleanData(input) {
  let output = input;

  output = capitaliseName(output);
  output = capitaliseHouse(output);
  output = capitaliseGender(output);

  // Add any other cleaning functions here

  return output;
}

const cleanedStudents = cleanData(allStudents);
console.log("cleanedStudents:", cleanedStudents);

//--------------------CLEANED DATA FUNCTIONS END---------------------------------------------

//-------------------CAPITALISING THE STUDENT NAMES------------------------------------------

function capitaliseName(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let student = input[i];
    let words = student.fullname.split(" ");
    let capitalisedWords = [];
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      capitalisedWords.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    }
    student.fullname = capitalisedWords.join(" ");
    output.push(student);
  }
  return output;
}

const capitalisedStudents = capitaliseName(students);
console.log(capitalisedStudents);

//-------------------CAPITALISING THE HOUSE NAMES------------------------------------------

function capitaliseHouse(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let student = input[i];
    let words = student.house.split(" ");
    let capitalisedWords = [];
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      capitalisedWords.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    }
    student.house = capitalisedWords.join(" ");
    output.push(student);
  }
  return output;
}

const capitalisedHouseName = capitaliseHouse(students);
console.log(capitalisedHouseName);

//-------------------CAPITALISING THE GENDERS------------------------------------------

function capitaliseGender(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let student = input[i];
    let words = student.gender.split(" ");
    let capitalisedWords = [];
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      capitalisedWords.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    }
    student.gender = capitalisedWords.join(" ");
    output.push(student);
  }
  return output;
}

//---------------------HYPHEN REMOVAL ---------------------------------------------------------
function hyphenRemove(name) {
  function capitalizeHyphenatedName(name) {
    let parts = name.split("-");
    let capitalizedParts = parts.map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    );
    return capitalizedParts.join("-");
  }

  const capitalisedName = capitalizeHyphenatedName(name);
  const capitalisedSurname = capitalise_surname(capitalisedName);
  const surnameWithoutHyphen = capitalisedSurname.replace(/-/g, "");
  return surnameWithoutHyphen;

  function capitalise_surname(surname) {
    const parts = surname.split("-");
    const capitalised_parts = parts.map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    );
    return capitalised_parts.join("");
  }
}
