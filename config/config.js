require('dotenv').config()

const dev = {
    app: {
        url: process.env.DBURL
    },
    port: process.env.PORT || 5050,

    key: process.env.UPDATKEY
}
module.exports = dev