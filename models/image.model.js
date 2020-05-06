const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    fileName: { type: String, required: true },
    data: { type: Buffer,  required: true },
    mimeType: { type: String },
    
}, {
    timestamps: true,
});


const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
