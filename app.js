// Agrega el siguiente código en el archivo app.js
let menuOpen = false;

document.querySelector('.menu-toggle').addEventListener('click', () => {
  if (!menuOpen) {
    document.querySelector('.menu').classList.add('menu-open');
    document.querySelector('.menu-options').classList.add('menu-visible');
    menuOpen = true;
  } else {
    document.querySelector('.menu').classList.remove('menu-open');
    document.querySelector('.menu-options').classList.remove('menu-visible');
    menuOpen = false;
  }
});

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      themeToggleBtn.textContent = 'Modo Claro';
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      themeToggleBtn.textContent = 'Modo Oscuro';
    }
  }

function toggleMeasurementUnits() {
  const measurementSystem = document.getElementById('measurement-system').value;
  if (measurementSystem === 'metric') {
    document.getElementById('metric-inputs').classList.remove('hidden');
    document.getElementById('imperial-inputs').classList.add('hidden');
  } else {
    document.getElementById('metric-inputs').classList.add('hidden');
    document.getElementById('imperial-inputs').classList.remove('hidden');
  }
}

function calculateBMI() {
    const age = document.getElementById('age').value;
    let height;
    if (document.getElementById('measurement-system').value === 'metric') {
      height = document.getElementById('height-cm').value / 100; // Conversión de centímetros a metros
    } else {
      const feet = document.getElementById('height-ft').value;
      const inches = document.getElementById('height-in').value;
      height = ((feet * 12) + parseFloat(inches)) * 0.0254; // Conversión de pies y pulgadas a metros
    }
    const weight = document.getElementById('weight').value;
    const category = document.getElementById('category').value;
  
    const bmi = weight / (height * height);
  
    let recommendation = '';
    let message = '';
  
    if (category === 'adult') {
      if (bmi < 18.5) {
        recommendation = 'Bajo peso';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de bajo peso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite <a href="https://www.cdc.gov/healthyweight/spanish/assessing/bmi/adult_bmi/spanish_bmi_calculator/index.html">Acerca del índice de masa corporal para adultos</a>.`;
      } else if (bmi < 25) {
        recommendation = 'Peso normal';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de peso normal para adultos de su estatura. Felicidades! Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre cómo incorporar hábitos saludables, visite <a href="https://www.cdc.gov/healthyweight/spanish/healthy_eating/index.html">Peso, nutrición y actividad física saludables</a>.`;
      } else if (bmi < 30) {
        recommendation = 'Sobrepeso';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de sobrepeso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite <a href="https://www.cdc.gov/healthyweight/spanish/assessing/bmi/adult_bmi/spanish_bmi_calculator/index.html">Acerca del índice de masa corporal para adultos</a>. Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del sobrepeso y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto. Tome esta prueba de riesgo de prediabetes de 1 minuto. <a href="https://www.cdc.gov/diabetes/risk-test/spanish.html">Prueba de riesgo de prediabetes</a>.`;
      } else {
        recommendation = 'Obesidad';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de obesidad para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite <a href="https://www.cdc.gov/healthyweight/spanish/assessing/bmi/adult_bmi/spanish_bmi_calculator/index.html">Acerca del índice de masa corporal para adultos</a>. Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones de la obesidad y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto. Tome esta prueba de riesgo de prediabetes de 1 minuto. <a href="https://www.cdc.gov/diabetes/risk-test/spanish.html">Prueba de riesgo de prediabetes</a>.`;
      }
    } else {
      if (bmi < 15) {
        recommendation = 'Bajo peso';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de bajo peso para niños de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite <a href="https://www.cdc.gov/healthyweight/spanish/assessing/bmi/child_bmi/spanish_bmi_calculator/index.html">Acerca del índice de masa corporal para niños</a>.`;
      } else if (bmi < 18.5) {
        recommendation = 'Peso normal';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de peso normal para niños de su estatura. Felicidades! Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que crece. Para obtener más información sobre cómo incorporar hábitos saludables, visite <a href="https://www.cdc.gov/healthyweight/spanish/healthy_eating/index.html">Peso, nutrición y actividad física saludables</a>.`;
      } else if (bmi < 25) {
        recommendation = 'Sobrepeso';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de sobrepeso para niños de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite <a href="https://www.cdc.gov/healthyweight/spanish/assessing/bmi/child_bmi/spanish_bmi_calculator/index.html">Acerca del índice de masa corporal para niños</a>. Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del sobrepeso y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto. Tome esta prueba de riesgo de prediabetes de 1 minuto. <a href="https://www.cdc.gov/diabetes/risk-test/spanish.html">Prueba de riesgo de prediabetes</a>.`;
      } else {
        recommendation = 'Obesidad';
        message = `Su IMC es ${bmi.toFixed(2)}, lo que indica que su peso está en la categoría de obesidad para niños de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite <a href="https://www.cdc.gov/healthyweight/spanish/assessing/bmi/child_bmi/spanish_bmi_calculator/index.html">Acerca del índice de masa corporal para niños</a>. Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones de la obesidad y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto. Tome esta prueba de riesgo de prediabetes de 1 minuto. <a href="https://www.cdc.gov/diabetes/risk-test/spanish.html">Prueba de riesgo de prediabetes</a>.`;
      }
    }
  
    document.getElementById('bmi-result').innerText = `Su IMC es ${bmi.toFixed(2)}`;
    document.getElementById('bmi-recommendation').innerHTML = message;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('google-form').classList.remove('hidden');
    document.getElementById('fitia-link').classList.remove('hidden');
  }
  
