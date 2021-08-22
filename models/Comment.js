const mongoose = require("mongoose");

const Schema = mongoose.Schema;


class Comment extends Model{};


const CommentSchema = new Schema(
    {
        body: {
            type: String,
            allowNull: false
        },
        date: {
            type: Date,
            default: Date.now
        }

    }
)





module.exports = Comment