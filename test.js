("use strict");
//------------------------------ALL THE DATA WILL GO INTO THIS ARRAY CALLED STUDENTS-------------------------

let settings = {
  allStudents: [],
};

window -
  addEventListener("DOMContentLoaded", () => {
    displayUserData(settings.allStudents);
  });

//-----------------------------THIS FUNCTION DISPLAYS MY DATA-------------------------------------------------

function displayUserData(userData) {
  console.log("Here is the user data washed thoroughly:", userData);

  const table = document.querySelector("#table-body");

  // Clear existing rows from table body
  table.innerHTML = "";

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
  for (let header of headers) {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Loop through the userData array and create a table row for each user
  userData.forEach((student) => {
    console.log(student);
    student.fullname = capitaliseName(student.fullname);

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.firstname}</td>
        <td>${student.middlename}</td>
        <td>${student.lastname}</td>
        <td>${student.gender}</td>
        <td>${student.obj}</td>
        <td>${student.house}</td>
    `;
    table.appendChild(row);
  });
}
//-----------------------------THIS METHOD WILL FETCH THE DATA FROM THE JSON FILE------------------------

fetch("https://petlatkea.dk/2021/hogwarts/students.json")
  .then((response) => response.json())
  .then((data) => {
    displayUserData(data);
    // rest of the code...
  })
  .catch((error) => {
    // handle any errors that occur while fetching the data
    console.log(error);
  });
//****************************************************SERVER POWERRRRRRRRRRRRRRRRRRRRR*********************/

function capitaliseName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function removeHyphens(name) {
  return name.replaceAll(/-/g, " ");
}

function removeQuotes(str) {
  return str.replaceAll(/"/g, "");
}

function getFirstName(fullname) {
  const gettingFirstname = fullname.trim().split(" ")[0];
  const firstname = capitaliseName(gettingFirstname);
  return firstname;
}

function getMiddleName(fullname) {
  const gettingMiddlename = fullname.trim().split(" ");
  if (gettingMiddlename.length > 2) {
    const middlename = capitaliseName(gettingMiddlename[1]);
    return middlename;
  }
}

function getLastName(fullname) {
  const gettingLastname = fullname.substring(fullname.lastIndexOf(" ") + 1);
  const lastname = capitaliseName(gettingLastname);
  return lastname;
}

function getGender(gender) {
  const gettingGender = gender.trim().split(" ");
  const capitalisedGender = capitaliseName(gettingGender[0]);
  return capitalisedGender;
}

function getHouseName(house) {
  const gettingHouseName = house.trim().split(" ");
  const housename = capitaliseName(gettingHouseName);
  return housename;
}

function tidyData(data) {
  data.forEach((student) => {
    const fullnameWords = removeQuotes(student.fullname)
      .trim()
      .replace(/-/g, " ")
      .split(/\s+/);
    let firstname = getFirstName(student.fullname);
    let middlename = getMiddleName(student.fullname);
    let lastname = getLastName(student.fullname);
    let gender = student.gender;
    let house = capitaliseName(student.house.trim());

    // add space after hyphen
    if (lastname.includes("-")) {
      lastname = lastname.replace("-", " - ");
    }

    lastname = removeHyphens(lastname); // remove hyphens before the surname is capitalised
    lastname = capitaliseName(lastname); // capitalize surname after removing hyphens
    /* let firstname = capitaliseName(fullnameWords.shift()); */
    /* let middlename = fullnameWords.join(" ");
    if (!middlename) {
      middlename = null;
    } */
    if (!lastname) {
      lastname = "";
    }
    const cleaned = {
      firstname,
      middlename,
      lastname,
      /* portrait, */
      gender,
      house,
    };
    settings.allStudents.push(cleaned);
  });
}
function cleanData(data) {
  const cleanedData = data.map((row) => {
    const tidiedRow = {};

    // Clean up name field
    const nameParts = row.fullname.trim().split(" ");
    tidiedRow["First Name"] =
      nameParts[0].charAt(0).toUpperCase() +
      nameParts[0].slice(1).toLowerCase();
    tidiedRow["Middle Name"] =
      nameParts.length > 2
        ? nameParts
            .slice(1, -1)
            .map(
              (name) =>
                name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            )
            .join(" ")
        : "";
    tidiedRow["Last Name"] =
      nameParts[nameParts.length - 1].charAt(0).toUpperCase() +
      nameParts[nameParts.length - 1].slice(1).toLowerCase();

    // Clean up house field
    tidiedRow["House"] =
      row.house.trim().charAt(0).toUpperCase() +
      row.house.trim().slice(1).toLowerCase();

    // Clean up gender field
    tidiedRow["Gender"] =
      row.gender.trim().charAt(0).toUpperCase() +
      row.gender.trim().slice(1).toLowerCase();

    return tidiedRow;
  });

  return cleanedData;
}
