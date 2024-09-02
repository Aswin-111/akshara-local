const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Adjust the path as necessary

const Coords = sequelize.define('Coords', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Country: {
        type: DataTypes.STRING,
    },
    State: {
        type: DataTypes.STRING,
    },
    Coords: {
        type: DataTypes.JSON, // Changed from STRING to JSON
    }
}, {
    tableName: 'coords',
    timestamps: false // Set to true if you want to track createdAt and updatedAt
});

module.exports = Coords;