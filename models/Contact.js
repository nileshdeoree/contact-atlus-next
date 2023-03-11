const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    title: { type: String, required: true },
    email: {type: String, required : true},
    phone: {type: Number, required: true},
    message: {type: String, required: true}
}, { timestamps: true});

mongoose.models = {}
export default mongoose.model('Contact', ContactSchema);





// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     slug: {type: String, required: true, unique: true},
//     desc: {type: String, required: true},
//     img: {type: String, required: true},
//     category: {type: String, required: true},
//     size: {type: String},
//     color: {type: String},
//     price: {type: Number, required: true},
//     availableQty: {type: Number, required: true},

//   }, { timestamps: true});

//   mongoose.models = {}
//   export default mongoose.model("Product", ProductSchema);