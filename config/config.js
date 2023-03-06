if (process.env.NODE_ENV == 'production') {
    require('dotenv').config();
    console.log(process.env.MONGOURI?`mongo set ...${process.env.MONGOURI.slice(-5)}`:'mongo not found');
}

module.exports = {
    mongoURI:process.env.MONGOURI
};
