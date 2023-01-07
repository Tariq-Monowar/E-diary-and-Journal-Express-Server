const { default: mongoose } = require("mongoose");
const config = require('./config')

mongoose.set('strictQuery', true)
mongoose.connect(config.app.url)
.then(()=>console.log(`Connected..................`))
.catch(err=>{
    console.log(err.message)
    //process.exit(1)
})