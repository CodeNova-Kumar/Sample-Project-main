const mongoose=require('mongoose');
const url = 'mongodb+srv://KumarVerma:Kumar123@cluster0.nihczvn.mongodb.net/E-Doctor?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url)

.then((result) => {
    console.log('connected to the database')
    
}).catch((err) => {
    console.log(err)
    
});
module.exports = mongoose;