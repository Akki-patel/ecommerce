import mongoose from "mongoose";
const configOptions={
    useNewUrlParser :true,
    UseUnifiedTopology : true,
};
const connectToDB = async () => {
  const connectionurl =
    "mongodb+srv://sanganiakshay101:12345@cluster0.ccw6waa.mongodb.net/?retryWrites=true&w=majority";
     mongoose.connect(connectionurl,configOptions).then(()=>console.log('data base connected successfully')).catch((err)=>console.log('getting erroe from db connection ${err.message}'))
};
export default connectToDB;
