(function () {
  const createTable = function () {
    const table = document.createElement('table');
    let count = 1;

    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('td');
        cell.textContent = count;
        row.appendChild(cell);
        count += 1;
      }
      table.appendChild(row);
    }
    return table;
  };

  const table = createTable();
  document.body.appendChild(table);
}());
