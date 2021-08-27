const { Comment, Fellowship, Journey, LotrJourney, Post, Trail, User} = require('../server/models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({})
        },
        matchups: a
    }
}