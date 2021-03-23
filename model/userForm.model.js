const mongoose = require("mongoose");
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const formSchema = new Schema(
  {
    locationSelect: {
      type: String,
      unique: true,
      trim: true,
    },
    tripStart: {
      type: String,
      unique: true,
      trim: true,
    },
    tripEnd: {
      type: String,
      unique: true,
      trim: true,
    },
    adult: {
      type: String,
      unique: true,
      trim: true,
    },
    child: {
      type: String,
      unique: true,
      trim: true,
    },
    custId: {
      type: String,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Form",formSchema)