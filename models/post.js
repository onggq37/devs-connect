const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: schema.Types.ObjectId,
    ref: "users",
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: string,
  },
  likes: [
    {
      user: {
        type: schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      user: {
        type: schema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: string,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Post = mongoose.model("post", PostSchema);
