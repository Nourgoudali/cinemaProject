import mongoose from "mongoose";

var hallSchema = new mongoose.Schema ({
    name: {
        type : String,
        required : true,
    },

    seats : {
        type : Number,
        required : true,
    },

    capacity : {
        type : String,
        required : true,
    }
})

const hallDb = mongoose.model('halls', hallSchema);

export default hallDb;