const mongoose = require("mongoose");


const Schema = mongoose.Schema;


// class Post extends Model {};

const PostSchema = new Schema(
    {
        body:{
            type: String,
            allowNull: false

        },
        date: {
            type: Date,
            default: Date.now
        }
    }
)


const Post = mongoose.model("Post", PostSchema);

module.exports = Post