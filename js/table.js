function check(minMultiplier, maxMultiplier, minMultiplicand, maxMultiplicand){

  let valid = true;
  let multiplierError = document.getElementById('multiplier-error')
  let multiplicandError = document.getElementById('multiplicand-error')

  //clear error messages or check to ensure they are cleared.

  multiplierError.textContent = ""; 
  multiplicandError.textContent = "";

  //Error Cases:

  if(isNaN(minMultiplier) || isNaN(maxMultiplier)){
    multiplierError.textContent += "\nError: The inputs must be a whole number.";
    valid = false;
  }

  if(isNaN(minMultiplicand) || isNaN(maxMultiplicand)){
    multiplicandError.textContent += "\nError: The inputs must be a whole number";
    valid = false;      
  }
  
  if(minMultiplier > 50 || minMultiplier < -50){
    multiplierError.textContent += "\nError: Minimum must be within the -50 to 50 range.";
    valid = false;
  }

  if(maxMultiplier > 50 || maxMultiplier < -50){
    multiplierError.textContent += "\nError: Maximum must be within the -50 to 50 range.";
    valid = false;
  }

  if(minMultiplicand > 50 || minMultiplicand < -50){
    multiplicandError.textContent += "\nError: Minimum must be within the -50 to 50 range.";
    valid = false;
  }

  if(maxMultiplicand > 50 || maxMultiplicand < -50){
    multiplicandError.textContent += "\nError: Maximum must be within the -50 to 50 range.";
    valid = false;
  }

  if(minMultiplier > maxMultiplier) {
    multiplierError.textContent += "\nError: The minumum must be >= to the maximum.";
    valid = false;
  }

  if(minMultiplicand > maxMultiplicand) {
    multiplicandError.textContent += "\nError: The minumum must be >= to the maximum.";
    valid = false;
  }

  return valid;
}

function generateTable() {
  const minX = parseInt(document.getElementById("startMultiplier").value);
  const maxX = parseInt(document.getElementById("endMultiplier").value);
  const minY = parseInt(document.getElementById("startMultiplicand").value);
  const maxY = parseInt(document.getElementById("endMultiplicand").value);

  var isValid = check(minX, maxX, minY, maxY);

  if (isValid) {
    let table = "<table>";

    for (let r = minY - 1; r <= maxY; r++) {
      table += "<tr>";

      for (let c = minX - 1; c <= maxX; c++) {
        if (r === minY - 1 && c === minX - 1) {
          table += "<th></th>"; 
        } else if (r === minY - 1) {
          table += `<th>${c}</th>`; 
        } else if (c === minX - 1) {
          table += `<th>${r}</th>`; 
        } else {
          table += `<td>${r * c}</td>`; 
        }
      }

      table += "</tr>";
    }

    table += "</table>";
    document.getElementById('tableContainer').innerHTML = table;
  }
}