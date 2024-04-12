// Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'post'
});

module.exports = Post;
