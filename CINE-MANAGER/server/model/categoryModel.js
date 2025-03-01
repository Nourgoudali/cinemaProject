import mongoose from "mongoose";

var categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required : true,
    }

});

const categoryDB = mongoose.model('categories', categorySchema);
export default categoryDB;