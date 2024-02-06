const asyncHandler = require("express-async-handler");
const AppError = require('../utils/appError');
const Contact = require("../models/contactModel");

exports.getAllContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.find({ user_id: req.user.id });
    // console.log(req.body); // in this body data about the contacts.. that we set in json format
    res.status(200).json({
        status: 'success',
        data: contact
    });
});
exports.createContact = asyncHandler(async(req, res, next) => {
    const { user, email, contact } = req.body;
    if(!user || !email || !contact) {
        res.status(400)
        throw new Error("This is fields are required for signup.")
    }

    const contactCreate = await Contact.create({
        user,
        email,
        contact,
        user_id: req.user.id
    })
    res.status(201).json({
        status: 'success',
        data: contactCreate
    });
    // next();
});

exports.getContact = asyncHandler(async(req, res, next) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
      return next(new AppError(`There is no contact with id: ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: 'success',
        data: {data: contact},
        message: `Get contact: ${req.params.id}`
    });
});

exports.updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }
    );
    res.status(200).json({
        status: 'success',
        data: contact,
        message: `Get contact: ${req.params.id}`
    });
});

exports.deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found!!")
    };

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
      }
      await Contact.deleteOne({ _id: req.params.id });
      
    res.status(200).json({
        status: 'success',
        data: null,
        message: `Deleted contact ID: ${req.params.id}`
    });
});