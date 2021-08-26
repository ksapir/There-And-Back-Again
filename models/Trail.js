const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// class Trail extends Model{};


const TrailSchema = new Schema(
    {
        User:{
            id: foreignKey,
            

        }
    }
)




const TrailSchema = mongoose.model("Favorite Trails", TrailSchema);


module.exports = Trail