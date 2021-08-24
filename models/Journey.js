const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// class Journey extends Model{};


const JourneySchema = new Schema(
    {
        members:[{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    }
)




const Journey = mongoose.model("Journey", JourneySchema);


module.exports = Journey