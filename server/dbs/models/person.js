import mongoose from 'mongoose'

const Schema = mongoose.Schema

const personSchema = new Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    type:{
        type:String,
    },
    time:{
        type:String,
    }
})

export default mongoose.model('Person',personSchema)





