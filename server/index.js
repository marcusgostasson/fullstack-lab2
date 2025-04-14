import { listen } from './app';

listen(process.env.PORT, () => {
  console.log(`Server start on PORT ${PORT}`);
});