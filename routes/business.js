const router = require('express').Router();
const storage = require('node-sessionstorage');
let Business = require('../models/business.model');

router.route('/').get((req, res) => {
    
    Business.find()
        .then(business => res.json(business))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {

    const newBusiness = new Business(req.body);

    newBusiness.save()
        .then(business => {
            storage.setItem("user", newBusiness.username);
            res.json(newBusiness)
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/login').post((req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    Business.findOne( { username : username})
        .then( business => {
           login = false;

           if(business != null && password==business.password) {
                login = true;
            } else {
                login = false;
            }
            if(login==true) {
                storage.setItem("user", username);
                res.json(business.pageId);
            } else {
               res.status(401).json("Login Failed");
            }
        }
           
        )
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {

    Business.findById( req.params.id )
        .then( business => {

            business.info = req.body.info;

            business.save()
                .then(business => res.json('Business updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {

    Business.findByIdAndDelete( req.params.id )
       .then( () => res.json('Business deleted!'))
       .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:pageId').get((req, res) => {

     Business.findOne( { pageId : req.params.pageId})
        .then(  business => {
            
            business.username = ''
            business.password = ''
            res.json(business) 
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/load/:pageId').get((req, res) => {

    console.log("Loading: " +req.params.pageId );

    Business.findOne( { pageId : req.params.pageId})
        .then(  business => {

            const loggedInUser =  storage.getItem("user");  
            console.log(loggedInUser);
            console.log(business.username);
            if(!(loggedInUser === business.username)) {
                res.status(403).json("Login required");
            } else {
                res.json(business) 
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;