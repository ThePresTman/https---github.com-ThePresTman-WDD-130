// Function to calculate BMI
function calculateBMI() {
  const weightLbs = parseFloat(document.getElementById("bmi-weight").value);
  const feet = parseInt(document.getElementById("bmi-feet").value, 10);
  const inches = parseInt(document.getElementById("bmi-inches").value, 10);
  const gender = document.getElementById("bmi-gender").value;

  if (isNaN(weightLbs) || isNaN(feet) || isNaN(inches)) {
    document.getElementById("bmi-result").textContent = "Please enter valid values.";
    return;
  }

  // Convert height to inches
  const totalInches = feet * 12 + inches;
  const heightMeters = totalInches * 0.0254;

  // Convert weight to kilograms
  const weightKg = weightLbs * 0.453592;

  // Calculate BMI
  const bmi = weightKg / (heightMeters * heightMeters);

  // Gender-specific ranges (example ranges; customize as needed)
  let bmiCategory = "Unknown";
  if (gender === "male") {
    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi < 24.9) bmiCategory = "Normal weight";
    else if (bmi < 29.9) bmiCategory = "Overweight";
    else bmiCategory = "Obese";
  } else if (gender === "female") {
    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi < 24.9) bmiCategory = "Normal weight";
    else if (bmi < 29.9) bmiCategory = "Overweight";
    else bmiCategory = "Obese";
  }

  // Show BMI result in the box
  document.getElementById("bmi-result").textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
  document.getElementById("bmi-result-box").style.display = "block"; // Show result box
}

// Function to calculate daily energy needs
function calculateEnergy() {
  const weightLbs = parseFloat(document.getElementById("energy-weight").value);
  const feet = parseInt(document.getElementById("energy-feet").value, 10);
  const inches = parseInt(document.getElementById("energy-inches").value, 10);
  const age = parseInt(document.getElementById("energy-age").value, 10);
  const gender = document.getElementById("energy-gender").value;
  const activityLevel = parseFloat(document.getElementById("energy-activity").value);

  if (isNaN(weightLbs) || isNaN(feet) || isNaN(inches) || isNaN(age) || isNaN(activityLevel)) {
    document.getElementById("energy-result").textContent = "Please enter valid values.";
    return;
  }

  // Convert weight to kilograms
  const weightKg = weightLbs * 0.453592;

  // Convert height to inches and then to cm
  const totalInches = feet * 12 + inches;
  const heightCm = totalInches * 2.54;

  // Calculate Basal Metabolic Rate (BMR) using Harris-Benedict equation
  let bmr;
  if (gender === "male") {
    bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
  } else if (gender === "female") {
    bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
  }

  // Calculate daily calorie needs
  const dailyCalories = bmr * activityLevel;

  // Show energy result in the box
  document.getElementById("energy-result").textContent = `Your daily calorie needs are approximately ${dailyCalories.toFixed(0)} calories.`;
  document.getElementById("energy-result-box").style.display = "block"; // Show result box
}
