const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Adjust the path as necessary

const Language = sequelize.define('Language', {
    Sl_No: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  WALS_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ISO_639_3: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Genus: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Family: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Macroarea: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Latitude: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Longitude: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Countries: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Current_Status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Script: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  
  Using_Scripts: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Alphabets: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Sub_Languages: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Reference: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Tribal_Language: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  
  Num_of_speakers: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Census_Year: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Other_Names: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'languages',
  timestamps: false // Set to true if you want to track createdAt and updatedAt
});

module.exports = Language;