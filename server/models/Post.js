const { Schema, model } = require('mongoose');
const repliesSchema = require('./Reply');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: 'You have to add content to your post.',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        replies: [repliesSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

postSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

const Post = model('Post', postSchema);

module.exports = Post;