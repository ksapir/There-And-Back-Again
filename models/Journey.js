const mongoose = require("mongoose");

const Schema = mongoose.Schema;

class Journey extends Model{};


const JourneySchema = new Schema(
    {
        members:{
            id: foreignKey,
            

        }
    }
)




const JourneySchema = mongoose.model("Journey", JourneySchema);


module.exports = Journey