import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
        // unique: true,
        // require:true
    },
    age:{
        type:Number,
        // require:true
    },
    time:{
        type:String,
        // require:true
    },
    type:{
        type:String,
    }
})

export default mongoose.model('User',UserSchema)


