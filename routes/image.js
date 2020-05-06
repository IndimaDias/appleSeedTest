const router = require('express').Router();
let Image = require('../models/image.model')


router.route('/upload').post((req, res) => {

    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    console.log("File upload");

    const newImage = new Image();
    newImage.fileName = file.name;
    newImage.data = file.data;
    newImage.mimeType = file.mimetype;


    console.log(file.mimeType);
    console.log(file.name);
    console.log(newImage);

    newImage.save()
        .then(newImage => res.json(newImage._id))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {

    Image.findById( req.params.id )
       .then( image => {
           res.setHeader('content-type', image.mimeType);
           res.send(image.data);
       })
       .catch(err => res.status(400).json('Error: ' + err));

});



module.exports = router;