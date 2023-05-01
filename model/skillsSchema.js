const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    src:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    style:{
        type:String,
        required:true
    }
})

const Skill = mongoose.model('SKILL', skillSchema);

module.exports = Skill;