const mongoose = require('mongoose')
const Schema = mongoose.Schema
const createClassModal = new Schema({
    subjectName: { type: String, required: true },
    subjectCode: { type: String, required: true },
    time: { type: Date, required: true },
    teacher:{type:Schema.Types.ObjectId,ref:'user'}
})
module.exports=createClass=mongoose.model('createclass',createClassModal)