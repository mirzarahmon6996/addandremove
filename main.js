function addRow() {
  let table = document.getElementById("myTable");
  let row = table.insertRow(table.rows.length);
  let surnameCell = row.insertCell(0);
  let nameCell = row.insertCell(1);
  let ageCell = row.insertCell(2);
  let numberCell = row.insertCell(3);
  let countryCell = row.insertCell(4);
  let actionsCell = row.insertCell(5);
  surnameCell.innerHTML = "<th>Mr</th>";
  nameCell.innerHTML = "<th>Alex</th>";
  ageCell.innerHTML = "<th>30</th>";
  numberCell.innerHTML = "<th>998917777777</th>";
  countryCell.innerHTML = "<th>England</th>";
  actionsCell.innerHTML = "<button onclick='deleteRow(this)'>Delete</button>";
}

function deleteRow(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
