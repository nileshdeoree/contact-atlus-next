import mongoose from "mongoose";

const connectDb = handler => async (req, res)=>{
    if(mongoose.connections[0].readyState){
        return handler (req, res)
    }
    await mongoose.connect("mongodb+srv://nileshdeore:12501250@cluster0.qogyo0p.mongodb.net/Portfolio?retryWrites=true&w=majority")
    return handler(req, res);
}

export default connectDb;