const User = require('./User');
const Post = require('./Post');
const create = require('./create');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Create.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Create };