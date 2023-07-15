const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    src:{
        type:String,
        required:true,
        unique:true
    },
    dlink:{
        type:String,
        required:true,
        unique:true
    },
    clink:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    skills:{
        type:String,
        required:true,
    } 
})

const Project = mongoose.model('PROJECT', projectSchema);

module.exports = Project;