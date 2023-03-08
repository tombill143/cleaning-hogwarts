let settings = {
  allStudents: [],
  filteredStudents: [],
};
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
    portrait: "../images/not-on-record.png",
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

//console.table(students);

// create table element
const table = document.createElement("table");

// create header row
const headerRow = document.createElement("tr");
const headers = [
  "first name",
  "middle name",
  "last name",
  "gender",
  "portrait",
  "house",
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

  const data = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    gender: student.gender,
    portrait: student.portrait,
    house: student.house,
  };

  settings.allStudents.push(data);
}

// append table to container element
const container = document.getElementById("table-container");
container.appendChild(table);

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

const tableContainer = document.getElementById("table-container");
const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((button) => {
  button.addEventListener("click", handleFilterButtonClick);
});

function filterTable(house) {
  const tableRows = document.querySelectorAll("#table-container tr");
  tableRows.forEach((row) => {
    const houseCell = row.querySelector("td:nth-child(2)");
    if (house === "*" || house === houseCell.textContent) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function handleFilterButtonClick(event) {
  event.stopImmediatePropagation();
  const house = event.target.dataset.filter;
  console.log({ house });
  if (house === "*") {
    console.log("here is all my student data", students);
    displayData(settings.allStudents);
  } else {
    settings.filteredStudents = filterData(settings.allStudents, house);
    displayData(settings.filteredStudents);
  }
}

function filterData(data, house) {
  let filteredData = data.filter(function (student) {
    return student.house === house;
  });

  console.log(filteredData); // add this line to check filteredData

  return filteredData;
}

function displayData(studentInfo) {
  console.log("All studenbts", settings.allStudents);
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  /*const houseColors = {
    Gryffindor: "red",
    Hufflepuff: "yellow",
    Ravenclaw: "blue",
    Slytherin: "green",
  };*/

  studentInfo.forEach((student) => {
    console.log(student);
    const row = document.createElement("tr");
    headers.forEach((header) => {
      const td = document.createElement("td");

      switch (header) {
        case "first name":
          const firstName = document.createElement("td");
          firstName.textContent = student["firstName"];
          td.textContent = student["firstName"];

          break;
        case "middle name":
          const middleName = document.createElement("td");
          middleName.textContent = student["middleName"];
          td.textContent = student["middleName"];
          break;
        case "last name":
          const lastName = document.createElement("td");
          lastName.textContent = student["lastName"];
          td.textContent = student["lastName"];
          break;
        case "gender":
          const gender = document.createElement("td");
          gender.textContent = student["gender"];
          td.textContent = student["gender"];
          break;
        case "portrait":
          const portraitImg = document.createElement("img");
          portraitImg.src = `./images/${student[header]}`;
          portraitImg.alt = `img`;
          td.appendChild(portraitImg);
          break;
        case "house":
          const houseImg = document.createElement("img");
          houseImg.src = `./house-images/${student[header]}.png`;
          houseImg.alt = `img`;
          td.appendChild(houseImg);
          break;
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

      row.appendChild(td);
    });
    table.appendChild(row);
  });

  const container = document.getElementById("table-container");
  container.innerHTML = "";
  container.appendChild(table);
}

displayData(settings.allStudents);
