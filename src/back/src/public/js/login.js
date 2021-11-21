const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();
const pageRouter = require('./routes/page');
const { sequelize } = requrie('./models');
const passportConfig = requrie('./passport');

const app = express();
