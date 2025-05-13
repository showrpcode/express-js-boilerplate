const dotenv = require('dotenv');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

dotenv.config();

app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
});

