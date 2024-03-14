interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Hisoka",
  lastName: "Morrow",
  age: 28,
  location: "Tokyo",
};

const student2: Student = {
  firstName: "Carl",
  lastName: "Johnson",
  age: 24,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// ------- rendering the table ---------

const body = document.body;

const table = document.createElement("table");
table.style.border = "1px solid #000";

const thRow = document.createElement("tr");
thRow.style.border = "1px solid #000";

const thFirstName = document.createElement("th");
thFirstName.style.border = "1px solid #000";
thFirstName.textContent = "First name";
thRow.appendChild(thFirstName);

const thLastName = document.createElement("th");
thLastName.style.border = "1px solid #000";
thLastName.textContent = "Last name";
thRow.appendChild(thLastName);

table.appendChild(thRow);

body.appendChild(table);

studentsList.forEach(({ firstName, lastName }) => {
  const tr = document.createElement("tr");

  const tdFirstName = document.createElement("td");
  tdFirstName.style.border = "1px solid #000";
  tdFirstName.textContent = firstName;
  tr.appendChild(tdFirstName);

  const tdLastName = document.createElement("td");
  tdLastName.style.border = "1px solid #000";
  tdLastName.textContent = lastName;
  tr.appendChild(tdLastName);

  table.appendChild(tr);
});
