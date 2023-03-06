if (process.env.NODE_ENV == 'production') {
    require('dotenv').config();
    console.log(process.env.MONGOURI?'mongo env':'mongo not found');
}

module.exports = {
    mongoURI:process.env.MONGOURI
};
