const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// class Fellowship extends Model{};


const FellowshipSchema = new Schema(
    {
        // members:{
        //     id: foreignKey,
            

        // }
        name:{
            type: String
        },

        reaminingDistance: {
            type: Number
        },

        members:[{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    }
)




const Fellowship = mongoose.model("Fellowship", FellowshipSchema);


module.exports = Fellowship