import mongoose from "mongoose";
const configOptions={
    useNewUrlParser :true,
    UseUnifiedTopology : true,
};
const connectToDB = async () => {
<<<<<<< HEAD
  const connectionurl =
    "Your db url";
=======
  const connectionurl ="add your cluster url here...";
>>>>>>> a9acd5ccab7a88de307abd84e09c225c12df870b
     mongoose.connect(connectionurl,configOptions).then(()=>console.log('data base connected successfully')).catch((err)=>console.log('getting erroe from db connection ${err.message}'))
};
export default connectToDB;
