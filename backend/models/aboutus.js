// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const aboutusSchema = new Schema({
//   firstname: { type: String, required: true },
//   lastname: { type: String, required: true },
//   email: { type: String, required: true },
// }, {
//   timestamps: true,
// });

class AboutUs {
  constructor(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

// const AboutUs = mongoose.model('AboutUs', aboutusSchema);

module.exports = AboutUs;