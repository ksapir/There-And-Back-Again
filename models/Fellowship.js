const mongoose = require("mongoose");

const Schema = mongoose.Schema;

class Fellowship extends Model{};


const FellowshipSchema = new Schema(
    {
        members:{
            id: foreignKey,
            

        }
    }
)




const FellowshipSchema = mongoose.model("Fellowship", FellowshipSchema);


module.exports = Fellowship