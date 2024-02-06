const mongoose = require("mongoose");

const contactModel = new mongoose.Schema({
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
        user: {
          type: String,
          required: [true, "Please add the contact name"],
        },
        email: {
          type: String,
          required: [true, "Please add the contact email address"],
        },
        contact: {
          type: String,
          required: [true, "Please add the contact phone number"],
        },
      },
      {
        timestamps: true,
});

const Contact = mongoose.model("Contact", contactModel);

module.exports = Contact;