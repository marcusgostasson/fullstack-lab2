import app from './app.js';

// Listen for PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server start on PORT ${PORT}`);
});
