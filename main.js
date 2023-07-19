function addRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(table.rows.length);
  var surnameCell = row.insertCell(0);
  var nameCell = row.insertCell(1);
  var ageCell = row.insertCell(2);
  var numberCell = row.insertCell(3);
  var countryCell = row.insertCell(4);
  var actionsCell = row.insertCell(5);
  surnameCell.innerHTML = "<th>Mr</th>";
  nameCell.innerHTML = "<th>Alex</th>";
  ageCell.innerHTML = "<th>30</th>";
  numberCell.innerHTML = "<th>998917777777</th>";
  countryCell.innerHTML = "<th>England</th>";
  ageCell.innerHTML = "<th>Alex</th>";
  actionsCell.innerHTML = "<button onclick='deleteRow(this)'>Delete</button>";
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
