const students = [
  {
    fullname: "Pansy parkinson",
    gender: "girl",
    portrait: "../images/parkinson_p.png",
    house: "slytherin",
  },
  {
    fullname: "hannah Abbott",
    gender: "girl",
    portrait: "../images/abbott_h.png",
    house: "Hufflepuff",
  },
  {
    fullname: "Susan bones",
    gender: "girl",
    portrait: "../images/bones_s.png",
    house: "hufflepuff",
  },
  {
    fullname: "Justin Finch-Fletchley",
    gender: "boy",
    portrait: "../images/fletchley_j.png",
    house: "Hufflepuff",
  },
  {
    fullname: "Terry BOOT",
    gender: "boy",
    portrait: "../images/boot_t.png",
    house: "RAVENCLAW",
  },
  {
    fullname: "zacharias smith",
    gender: "boy",
    portrait: "../images/smith_z.png",
    house: "Hufflepuff",
  },
  {
    fullname: 'Ernest "Ernie" Macmillan',
    gender: "boy",
    portrait: "../images/macmillan_e.png",
    house: "hufflepuff",
  },
  {
    fullname: "megan Jones",
    gender: "girl",
    portrait: "../images/jones_m.png",
    house: "Hufflepuff",
  },
  {
    fullname: "wayne hopkins",
    gender: "boy",
    portrait: "../images/hopkins_w.png",
    house: "Hufflepuff",
  },
  {
    fullname: "Leanne",
    gender: "girl",
    portrait: null,
    house: "hufflepuff",
  },
  {
    fullname: "Lavender brown",
    gender: "girl",
    portrait: "../images/brown_l.png",
    house: "Gryffindor",
  },
  {
    fullname: "Seamus finnigan",
    gender: "boy",
    portrait: "../images/finnigan_s.png",
    house: "gryffindor",
  },
  {
    fullname: "hermione jean Granger",
    gender: "girl",
    portrait: "../images/granger_h.png",
    house: "Gryffindor",
  },
  {
    fullname: "neville longbottom",
    gender: "boy",
    portrait: "../images/longbottom_n.png",
    house: "Gryffindor",
  },
  {
    fullname: "Parvati Patil",
    gender: "girl",
    portrait: "../images/patil_parvati.png",
    house: "GRYFFINDOR",
  },
  {
    fullname: "harry James POTTER",
    gender: "boy",
    portrait: "../images/potter_h.png",
    house: "GRYFFINDOR",
  },
  {
    fullname: "Dean Thomas",
    gender: "boy",
    portrait: "../images/thomas_d.png",
    house: "gryffindor",
  },
  {
    fullname: "RONald Bilius weasley",
    gender: "boy",
    portrait: "../images/weasley_r.png",
    house: "Gryffindor",
  },
  {
    fullname: "Mandy brocklehurst",
    gender: "girl",
    portrait: "../images/brocklehurst_m.png",
    house: "Ravenclaw",
  },
  {
    fullname: "Padma Patil",
    gender: "girl",
    portrait: "../images/patil_padma.png",
    house: "ravenclaw",
  },
  {
    fullname: "lisa Turpin",
    gender: "girl",
    portrait: "../images/turpin_l.png",
    house: "RAVENCLAW",
  },
  {
    fullname: "Stephen Cornfoot",
    gender: "boy",
    portrait: "../images/cornfoot_s.png",
    house: "Hufflepuff",
  },
  {
    fullname: "anthony goldstein",
    gender: "boy",
    portrait: "../images/goldstein_a.png",
    house: "Ravenclaw",
  },
  {
    fullname: "Michael Corner",
    gender: "boy",
    portrait: "../images/corner_m.png",
    house: "RAVENCLAW",
  },
  {
    fullname: "Kevin Entwistle",
    gender: "boy",
    portrait: "../images/entwistle_k.png",
    house: "Ravenclaw",
  },
  {
    fullname: "Sue Li",
    gender: "girl",
    portrait: "../images/li_s.png",
    house: "ravenclaw",
  },
  {
    fullname: "draco lucius Malfoy",
    gender: "boy",
    portrait: "../images/malfoy_d.png",
    house: "Slytherin",
  },
  {
    fullname: "Vincent Crabbe",
    gender: "boy",
    portrait: "../images/crabbe_v.png",
    house: "slytherin",
  },
  {
    fullname: "Tracey davis",
    gender: "girl",
    portrait: "../images/davis_t.png",
    house: "Slytherin",
  },
  {
    fullname: "gregory Goyle",
    gender: "boy",
    portrait: "../images/goyle_g.png",
    house: "Slytherin",
  },
  {
    fullname: "Millicent bulstrode",
    gender: "girl",
    portrait: "../images/bulstrode_m.png",
    house: "Slytherin",
  },
  {
    fullname: "theodore Nott",
    gender: "boy",
    portrait: "../images/nott_t.png",
    house: "slYtherin",
  },
  {
    fullname: "Daphne Greengrass",
    gender: "girl",
    portrait: "../images/greengrass_d.png",
    house: "Slytherin",
  },
  {
    fullname: "blaise Zabini",
    gender: "boy",
    portrait: "../images/zabini_b.png",
    house: "sLYTHERIN",
  },
];

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

const capitalize = (name) => {
  const capitalize_surname = (surname) => {
    const parts = surname.split("-");
    const capitalized_parts = parts.map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    );
    return capitalized_parts.join("-");
  };

  const words = name.split(" ");
  const capitalizedWords = words.map((word, index) => {
    if (word.length > 1) {
      if (index > 0 && word.includes("-")) {
        // Capitalize double-barrel surnames
        return capitalize_surname(word);
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    } else {
      return word.toUpperCase();
    }
  });
  return capitalizedWords.join(" ");
};

const sortedStudents = students.sort((a, b) => {
  const nameA = capitalize(a.fullname);
  const nameB = capitalize(b.fullname);
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(sortedStudents);

const capitalisedGender = capitaliseGender(students);
console.log(capitalisedGender);

console.table(students);

// create table element
const table = document.createElement("table");

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

// create data rows
const houseColors = {
  Gryffindor: "#740001",
  Slytherin: "#1A472A",
  Hufflepuff: "#cebd28",
  Ravenclaw: "#222F5B",
};

for (let student of students) {
  const row = document.createElement("tr");
  const fullNameArray = capitalize(student.fullname.replace(/["']/g, "")).split(
    " "
  );
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
    const td = document.createElement("td");
    if (datum === student.portrait) {
      const img = document.createElement("img");
      img.src = `./images/${datum}`;
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

  table.appendChild(row);
}

// append table to container element
const container = document.getElementById("table-container");
container.appendChild(table);

function displayData(data) {
  var table = document.getElementById("student-table");
  table.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    // Create a new row element
    var row = table.insertRow(i);

    // Create a new cell for each data field
    var nameCell = row.insertCell(0);
    var houseCell = row.insertCell(1);
    var color;
    var imgCell = row.insertCell(5); // Add new cell for image

    // Set the background color of the row
    row.style.backgroundColor = color;

    // Add the data to the cells
    nameCell.innerHTML = data[i].name;
    houseCell.innerHTML = data[i].house;

    // Create and add the image to the cell
    var img = document.createElement("img");
    var imgSrc = `./images/data[i]${name.toLowerCase()}_data[i].${house.toLowerCase()}.png`;
    img.src = imgSrc;
    imgCell.appendChild(img);
  }
}

// Sort the students by their first names
students.sort((a, b) => {
  const nameA = a.fullname.split(" ")[0].toLowerCase();
  const nameB = b.fullname.split(" ")[0].toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
