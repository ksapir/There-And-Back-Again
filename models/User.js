const mongoose = require("mongoose")

const Schema = mongoose.Schema;




class User extends Model {};


const UserSchema = new Schema(
    {
        Username : {
            type: String,
            allowNull:false,
            trim: true,
            required: "Enter Username"
        },
        email:{
            type: String,
            allowNull: false,
            trim: true,
            required: "Enter Email"
        },
        password:{
            type: String,
            allowNull: false,
            
        }

    }
)




const UserSchema = mongoose.model("User", UserSchema);

module.exports = User