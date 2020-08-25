// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Post {
        _id: ID
        title: String
        postText: String
        createdAt: String
        username: String
        commentCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        about: String
        linkToPortfolio: String
        email: String
        followerCount: Int
        posts: [Post]
        followers: [User]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postText: String!,title:String): Post
        addComment(postId: ID!, commentBody: String!): Post
        addFollower(followerId: ID!): User
        addAbout( aboutText: String):User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;