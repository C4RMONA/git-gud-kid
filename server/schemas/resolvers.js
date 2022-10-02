const { User, Post } = require("../models");

const resolvers = {
  Query: {
    posts: async (parent, { username }) => {
      const params = username ? { username }: {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },

    // get all users
    users: async () => {
      return User.find()
      .select("-__v -password")
      .populate("posts");
    },
    
    // get user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("posts");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }

      return user;
    }
  }
};

module.exports = resolvers;
