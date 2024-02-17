
const eSubmitButton = document.getElementById("EsubmitBtn");





eSubmitButton.addEventListener('click', function(event) {
  event.preventDefault();  // Prevent the form from being submitted

  // Get the form input by its id
  const n = parseFloat(document.getElementById("Nbjob").value);

  for (let i = 1; i <= n; i++) {
    let form = document.getElementById('Formmain');
      // Create new div elements
      let jobDiv = document.createElement('div');
      jobDiv.id = 'Job' + i;
      jobDiv.className = 'row';

      let colDivs = ['col-6', 'col-2', 'col-2', 'col-2'];
      let formLabels = ["Nom corps d'emploi", 'X', 'H', '$/H'];
      let inputIds = ['Namejob', 'Nombrestaff', 'Nombreheures', 'Costheure'];
      let inputTypes = ['text', 'number', 'number', 'number'];
      let placeholders = ['0', '0', '0', '0'];

      for (let j = 0; j < colDivs.length; j++) {
          let colDiv = document.createElement('div');
          colDiv.className = colDivs[j];

          let formDiv = document.createElement('div');
          formDiv.className = 'form-floating mb-3';

          let input = document.createElement('input');
          input.type = inputTypes[j];
          input.className = 'form-control';
          input.id = inputIds[j] + i;
          input.placeholder = placeholders[j];
          if (j > 0) {
              input.inputmode = 'numeric';
          }

          let label = document.createElement('label');
          label.htmlFor = inputIds[j] + i;
          label.textContent = formLabels[j];

          formDiv.appendChild(input);
          formDiv.appendChild(label);
          colDiv.appendChild(formDiv);
          jobDiv.appendChild(colDiv);
      }

      // Append jobDiv to body (or any other container)
      form.insertBefore(jobDiv, form.firstChild);
  }
})

const submitButton = document.getElementById("submitBtn");

// Event handler for form submission
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Access form elements
  // let nombreHeures1 = parseFloat(document.getElementById("Nombreheures1").value);
  // let nombreStaff1 = parseFloat(document.getElementById("Nombrestaff1").value);
  // let coutHeure1 = parseFloat(document.getElementById("Costheure1").value);
  // let nombreHeures2 = parseFloat(document.getElementById("Nombreheures2").value);
  // let nombreStaff2 = parseFloat(document.getElementById("Nombrestaff2").value);
  // let coutHeure2 = parseFloat(document.getElementById("Costheure2").value);
  let coutFixe = parseFloat(document.getElementById("Costfixe").value);
  let contingence = parseFloat(document.getElementById("Contingence").value);

  // Calculate the total cost
  const n = parseFloat(document.getElementById("Nbjob").value);
  let totalCost = coutFixe;

  for (let i = 1; i <= n; i++) {
    let nombreHeures = parseFloat(document.getElementById('Nombreheures' + i).value);
    let nombreStaff = parseFloat(document.getElementById('Nombrestaff' + i).value);
    let coutHeure = parseFloat(document.getElementById('Costheure' + i).value);

    totalCost += nombreHeures * nombreStaff * coutHeure;
  }

  totalCost *= ((contingence / 100) + 1);
  // Display the result
  document.getElementById("Costprojet").innerHTML = totalCost + " $"; // Ensure proper addition

});