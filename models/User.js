const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// const bcrypt = reuire("bcrypt")



class User extends Model {};


const UserSchema = new Schema(
    {
        Username : {
            type: String,
            allowNull:false,
            trim: true,
            Unique:true,
            required: "Enter Username"
        },

        // add regex to validate email
        email:{
            type: String,
            allowNull: false,
            trim: true,
            Unique:true,
            required: "Enter Email"
        },

        // add regex to validate password
        password:{
            type: String,
            allowNull: false,
            validate: {
                len:[8]
            }
        },

        // might need to add more
        avatar: {
            type: Image,
            allowNull: false,

        }

    }
)


// Need to pass word hashing


const UserSchema = mongoose.model("User", UserSchema);

module.exports = User