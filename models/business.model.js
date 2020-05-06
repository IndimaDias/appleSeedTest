const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    pageId: { type: String, unique: true, required: true },
    info: {
        name: { type: String, required: true },
        images: {
            top: { type: String },
        },
        website: { type: String },
        address: {
            addr1: { type: String },
            addr2: { type: String },
            city: { type: String },
            state: { type: String },
            zip: { type: String },
        },
        phone: { type: String },
        email: { type: String },
        topMessage: { type: String },
        bottomMessage: { type: String },
        hours: {
            text: { type: String },
        },
        social: {
            facebook: { type: String },
            twitter: { type: String },
            instagram: { type: String },
        },
        giftCard: {
            text: { type: String },
            url: { type: String },
        },
        onlineSales: {
            text: { type: String },
            url: { type: String },
        },
        delivery: {
            text: { type: String },
            url: { type: String },
        },
        links: {
            link1Label: { type: String },
            link1Url: { type: String },
            link2Label: { type: String },
            link2Url: { type: String },
            link3Label: { type: String },
            link3Url: { type: String },
        },
    }
    
}, {
    timestamps: true,
});


const Business = mongoose.model('Business', businessSchema);

module.exports = Business;