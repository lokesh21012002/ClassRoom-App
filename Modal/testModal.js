const mongoose = require('mongoose')
const Schema = mongoose.Schema
const testModal = new Schema({
    name: { type: String, required: true },
    subjectName: { type: String, required: true },
    subjectCode: { type: String, required: true },
    link: { type: String },
    date: { type: Date, required: true },
    marks: { type: Number, minlength: 1 },
    creator:{type:Schema.Types.ObjectId,ref:'teacher'}
})
module.exports=Test=mongoose.model('test',testModal)