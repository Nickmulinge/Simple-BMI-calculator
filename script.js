document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid numbers for weight and height.';
        return;
    }

    const bmi = weight / (height * height);
    let resultText = `Your BMI is ${bmi.toFixed(2)}. `;

    if (bmi < 18.5) {
        resultText += 'You are underweight.';
    } else if (bmi < 24.9) {
        resultText += 'You have a normal weight.';
    } else if (bmi < 29.9) {
        resultText += 'You are overweight.';
    } else {
        resultText += 'You are obese.';
    }

    document.getElementById('result').textContent = resultText;
});
