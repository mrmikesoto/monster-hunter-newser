var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AuthorSchema = new Schema({
  // `name` is required and of type String
  name: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // `title` is an object that stores a Title id
  // The ref property links the ObjectId to the Synopsis model
  // This allows us to populate the Article with an associated Title
  title: {
    type: Schema.Types.ObjectId,
    ref: "Synopsis"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Author = mongoose.model("Author", AuthorSchema);

// Export the Author model
module.exports = Author;
