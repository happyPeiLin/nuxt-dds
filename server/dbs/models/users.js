import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    time:{
        type:String,
    },
    type:{
        type:String,
    }
})

export default mongoose.model('User',UserSchema)


