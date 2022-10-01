const { Post } = require("../models");

const resolvers = {
  Query: {
    posts: async (parent, { username }) => {
      const params = username ? { username }: {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { _id }) => {
      return post.findOne({ _id });
    },
  },
};

module.exports = resolvers;
