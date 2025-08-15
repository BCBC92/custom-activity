const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); // Para procesar JSON en POST
app.use(express.static(__dirname));

// Modal de configuración
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint que se llama al hacer clic en "Done"
app.post('/save', (req, res) => {
  console.log('✅ Save called with:', req.body);
  res.status(200).send({ success: true });
});

// Endpoint que se llama cuando el Journey se publica
app.post('/publish', (req, res) => {
  console.log('🚀 Publish called');
  res.status(200).send({ success: true });
});

// Endpoint que se llama cuando el Journey se valida
app.post('/validate', (req, res) => {
  console.log('🔍 Validate called');
  res.status(200).send({ success: true });
});

// Endpoint que se llama cuando el Journey se detiene
app.post('/stop', (req, res) => {
  console.log('🛑 Stop called');
  res.status(200).send({ success: true });
});

// Endpoint principal que se ejecuta en el Journey
app.post('/execute', (req, res) => {
  console.log('⚙️ Execute called with:', JSON.stringify(req.body, null, 2));
  res.status(200).send({ success: true });
});

app.listen(10000, () => {
  console.log('Custom Activity listening on port 10000');
});