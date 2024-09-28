function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Toggle between dark and light mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change button text based on current mode
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = 'Modo Claro';
    } else {
        themeToggleBtn.innerText = 'Modo Oscuro';
    }
}

function toggleMeasurementUnits() {
    const measurementSystem = document.getElementById('measurement-system').value;
    const metricInputs = document.getElementById('metric-inputs');
    const imperialInputs = document.getElementById('imperial-inputs');

    if (measurementSystem === 'metric') {
        metricInputs.classList.remove('hidden');
        imperialInputs.classList.add('hidden');
    } else {
        metricInputs.classList.add('hidden');
        imperialInputs.classList.remove('hidden');
    }
}

function calculateBMI() {
    const measurementSystem = document.getElementById('measurement-system').value;
    const category = document.getElementById('category').value;
    const age = document.getElementById('age').value;
    let height, weight;

    if (measurementSystem === 'metric') {
        height = document.getElementById('height-cm').value / 100; // Convert to meters
        weight = document.getElementById('weight').value;
    } else {
        const feet = document.getElementById('height-ft').value;
        const inches = document.getElementById('height-in').value;
        height = ((feet * 12) + parseFloat(inches)) * 0.0254; // Convert to meters
        weight = document.getElementById('weight').value * 0.453592; // Convert to kg
    }

    const bmi = weight / (height * height);
    displayResult(bmi, category, age);
}

function displayResult(bmi, category, age) {
    let recommendation = '';
    
    if (bmi < 18.5) {
        recommendation = 'Estás bajo de peso. Te recomendamos mejorar tu alimentación.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        recommendation = 'Tu peso es normal. Sigue manteniéndote saludable.';
    } else if (bmi >= 25 && bmi < 29.9) {
        recommendation = 'Tienes sobrepeso. Considera hacer más ejercicio.';
    } else {
        recommendation = 'Tienes obesidad. Es recomendable consultar a un médico.';
    }

    document.getElementById('bmi-result').innerText = `Tu IMC es: ${bmi.toFixed(2)}`;
    document.getElementById('bmi-recommendation').innerText = recommendation;
    document.getElementById('result').classList.remove('hidden');

    // Mostrar el formulario de Google después de calcular el IMC
    document.getElementById('google-form').classList.remove('hidden');
}

