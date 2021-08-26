const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// const bcrypt = reuire("bcrypt")

// class User extends Model {};

const UserSchema = new Schema(
    {
        Username : {
            type: String,
            allowNull:false,
            trim: true,
            Unique:true,
            required: "Enter Username"
        },

       
        email:{
            type: String,
            allowNull: false,
            trim: true,
            Unique:true,
            required: "Enter Email"
        },

        password:{
            type: String,
            allowNull: false,
            minLength: 8
            // validate: {
            //     minlength:[8]
            // }
        },

        // might need to add more
        avatar: {
            type: String,
            allowNull: false,

        },
        
        journey: [{
            type: Schema.Types.ObjectId,
            ref: 'Journey'
        }]

    }
)


// Need to pass word hashing


const User = mongoose.model("User", UserSchema);

module.exports = User