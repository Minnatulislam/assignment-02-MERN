// Gettting the input fields
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const resultParagraph = document.getElementById("result");

// Attach an event listener to the button
const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function() {
  // Get the values 
  const weight = weightInput.value;
  const height = heightInput.value;

  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the result
  resultParagraph.textContent = "Your BMI is " + bmi.toFixed(2);
});
