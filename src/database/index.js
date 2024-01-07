import mongoose from "mongoose";
const configOptions={
    useNewUrlParser :true,
    UseUnifiedTopology : true,
};
const connectToDB = async () => {
  const connectionurl =
    "Your db url";
     mongoose.connect(connectionurl,configOptions).then(()=>console.log('data base connected successfully')).catch((err)=>console.log('getting erroe from db connection ${err.message}'))
};
export default connectToDB;
