const GIFReducer = require('./reduce-gif-size');

const reduceBtn = document.getElementById('reduce-btn');
const resultDiv = document.getElementById('result');

reduceBtn.addEventListener('click', () => {
  const fileInput = document.getElementById('gif-file');
  if (!fileInput.files || !fileInput.files[0]) {
    return;
  }
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const result = await GIFReducer.reduceGIFSize(reader.result);
      resultDiv.innerHTML = '<h2>Resultado:</h2>';
      const img = document.createElement('img');
      img.src = result;
      resultDiv.appendChild(img);
      resultDiv.style.display = 'block';
    } catch (error) {
      resultDiv.innerHTML = `<h2>Error:</h2><p>${error.message}</p>`;
      resultDiv.style.display = 'block';
    }
  };
  reader.readAsArrayBuffer(file);
});
