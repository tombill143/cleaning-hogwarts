("use strict");
//------------------------------ALL THE DATA WILL GO INTO THIS ARRAY CALLED STUDENTS-------------------------

let settings = {
  allStudents: [],
};
console.log(
  "This is my array (the one that will get cleanedData later) -",
  settings
);

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
    student.fullname = capitaliseSurname(student.fullname);
    console.log("After capitalising surname:", student.fullname);

    const row = document.createElement("tr");
    const fullnameWords = student.fullname.trim().split(/\s+/);
    let lastname = fullnameWords.pop();
    lastname = removeHyphens(lastname); // remove hyphens from last name
    lastname = capitaliseSurname(lastname); // capitalize surname
    let firstname = fullnameWords.shift();
    let middlename = fullnameWords.join(" ");
    if (!middlename) {
      middlename = null;
    }
    if (!lastname) {
      lastname = "";
    }

    row.innerHTML = `
        <td>${firstname}</td>
        <td>${middlename}</td>
        <td>${lastname}</td>
        <td>${student.gender}</td>
        <td>${student.obj}</td>
        <td>${student.house}</td>
    `;
    table.appendChild(row);
  });

  // Create an object for each image file name
  /*const imageFileNames = [
    "parkinson_p.png",
    "abbott_h.png",
    "bones_s.png",
    "fletchley_j.png",
    "boot_t.png",
    "smith_z.png",
    "macmillan_e.png",
    "jones_m.png",
    "hopkins_w.png",
    "not-on-record.png",
    "brown_l.png",
    "finnigan_s.png",
    "granger_h.png",
    "longbottom_n.png",
    "goldstein_a.png",
    "corner_m.png",
    "entwistle_k.png",
    "li_s.png",
    "malfoy_d.png",
    "crabbe_v.png",
    "davis_t.png",
    "goyle_g.png",
    "bulstrode_m.png",
    "nott_t.png",
    "greengrass_d.png",
    "zabini_b.png",
  ];*/

  /*const imageObjects = imageFileNames.map((filename) => {
    const image = new Image();
    image.src = `./images/${filename}`;
    return { filename, image };
  });*/

  // Loop through the userData array and create a table row for each user
  userData.forEach((student) => {
    const imageObject = imageElement.find(
      (obj) => obj.filename === student.firstname.lastname
    );
    const imageElement = document.createElement("img");
    if (imageObject) {
      imageElement.src = `./images/${student.firstname.join()}_${student.lastname
        .charAt(0)
        .toLowerCase()}.png`;
    } else {
      imageElement.src = "./images/not-on-record.png";
    }

    table.appendChild(row);
  });
}
//-----------------------------THIS METHOD WILL FETCH THE DATA FROM THE JSON FILE------------------------

fetch("https://petlatkea.dk/2021/hogwarts/students.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Here is my displayed user data that's very very dirty ", data);
    console.log("Here is my data that is still a bit stinky", data);
    const capitalisedData = capitaliseUserData(data);
    const cleanedData = tidyData(data);
    console.log(
      "Here is my cleaned user data even though it still stinks:",
      cleanedData
    );
    // rest of the code...
  })
  .catch((error) => {
    // handle any errors that occur while fetching the data
    console.log(
      "errors are detected here, I FUCKING HATE THIS ASSIGNMENT!!!",
      error,
      "seriously, FUCK OF!!!!!!!!!!!!!!!!"
    );
  });
//****************************************************SERVER POWERRRRRRRRRRRRRRRRRRRRR*********************/

//----------------------------------------JSON CONTAINING THE IMAGES-----------------------------------------

/*fetch("images.json")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data
  })
  .catch((error) => console.error(error));*/

//---------------------------------------------------------------------------------------------------

//--------------------ALL OF THIS CODE UNDERNEATH IS GOING TO MAKE MY CODE SPICK AND SPAN--------------
function capitaliseUserData(userData) {
  const capitalisedData = userData.map((student) => {
    return {
      fullname: capitaliseName(removeQuotes(student.fullname)),
      gender: capitaliseGender(student.gender),
      house: capitaliseHouseName(student.house),
    };
  });

  displayUserData(capitalisedData);
  console.log(
    "potter and boot better look right after this log. It does , so this is my clean data even though capitalisedData is being returned",
    capitalisedData
  );

  return capitalisedData;
}

function capitaliseName(name) {
  const words = name.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.toUpperCase() === word) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
}

function capitaliseSurname(name) {
  const surname = name.split(" ").pop(); // get the last name

  const capitalisedSurname = surname.charAt(0).toUpperCase() + surname.slice(1); // capitalize the first letter of the surname
  /*console.log(
    "I think this is some uncleaned data that is about to be cleaned",
    surname
  );*/
  return name.replace(surname, capitalisedSurname); // replace the original surname with the capitalized surname
}

function capitaliseGender(gender) {
  return gender.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
}

function capitaliseHouseName(name) {
  const words = name.split(" ");
  const capitalisedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalisedWords.join(" ");
}

function removeHyphens(name) {
  return name.replaceAll(/-/g, " ");
}

function removeQuotes(str) {
  return str.replaceAll(/"/g, "");
}

function tidyData(data) {
  const cleanedData = data.map((student) => {
    // do something to clean up each student object
    const fullnameWords = removeQuotes(student.fullname)
      .trim()
      .replace(/-/g, " ")
      .split(/\s+/);
    let lastname = fullnameWords.pop();

    // add space after hyphen
    if (lastname.includes("-")) {
      lastname = lastname.replace("-", " - ");
    }

    lastname = removeHyphens(lastname); // remove hyphens before the surname is capitalised
    lastname = capitaliseSurname(lastname); // capitalize surname after removing hyphens
    let firstname = capitaliseName(fullnameWords.shift());
    let middlename = fullnameWords.join(" ");
    if (!middlename) {
      middlename = null;
    }
    if (!lastname) {
      lastname = "";
    }
    return {
      firstname,
      middlename,
      lastname,
      portrait,
      gender: capitaliseGender(student.gender),
      house: capitaliseHouseName(student.house),
    };
  });
  return cleanedData;
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
