const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const LotrJourneySchema = new Schema(
    {
        name:{
            type: String,
        },
        totalDistance:{
            type: Number,
        },
        // userDistance:{
        //     type: Number,
        // },
        milesToGo:{
            type: Number,
        },
        // description: {
        //     type: String,
        // },
        url:{
            type: String,
        
    },
    members:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
    }
    })


const LotrJourney = mongoose.model("LotrJourney", LotrJourneySchema);


module.exports = LotrJourney