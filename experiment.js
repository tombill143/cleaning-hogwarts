const studentListContainer = document.getElementById("student-list");

fetch("https://petlatkea.dk/2021/hogwarts/students.json")
  .then((response) => response.json())
  .then((students) => {
    students.forEach((student) => {
      const studentElement = document.createElement("div");
      studentElement.classList.add("student");
      studentElement.innerHTML = `<h2>${student.fullname}</h2><h2>${student.gender}<h2>${student.house}</h2>`;
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
