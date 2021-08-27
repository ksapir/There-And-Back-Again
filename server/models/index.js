// model index
// const User = require("./User");
// const Journey = require("./Journey");
// const Post = require("./Post");
// const Comment = require("./Comment");
// const Fellowship = require("./Fellowship");
// const Trail = require("./Trail")

// User.belongsToMany(Journey,{
//     through: "MembershipIdk",
//     as: "Members",
//     foreignKey: "MemberId",

// });

// User.belongsToMany(Fellowship,{
//     though: "JoinFellowShipIdk",
//     as: "Fellow",
//     foreignKey: "FellowshipId"
// });

// User.hasMany(Post,{
//     onDelete: "CASCADE",
//     foreignKey: {
//         allowNull: false
//     }
// });

// User.hasMany(Comment, {
//     onDelete: "CASCADE",
//     foreignKey: {
//         allowNull: false
//     }
// });

// User.belongsToMany(User,{
//     though:"Followed/Following",
//     as: "Followers",
//     foreignKey:"FollowerId",
//     otherKey:"FollowId"
// });

// User.belongsToMany(User ,{
//     though: "Followed/Following",
//     as: "Follows",
//     foreignKey: "FollowId",
//     otherKey:"FollowersId"
// });

// User.hasMany(Trail ,{
//     onDelete: "CASCADE",
//     foreignKey: "MyTrailsId"
// });

// Trail.belongsTo(User);

// Post.belongsTo(User);

// Comment.belongsTo(User);

// Comment.belongsTo(Post);

// Post.hasMany(Comment,{
//     onDelete:"CASCADE",
//     foreignKey:{
//         allowNull: false
//     }
// });

// Journey.hasMany(Fellowship,{
//     though: "CurrentFellowships",
//     as: "FellowshipID",
//     foreignKey: "FellowshipId"
// });

// Fellowship.belongsTo(Journey);


// module.exports = {
//     User,
//     Journey,
//     Post,
//     Comment,
//     Fellowship,
//     Trail
// }