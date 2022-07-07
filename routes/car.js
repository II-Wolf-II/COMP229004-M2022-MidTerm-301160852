var express = require('express');
var router = express.Router();

let carController = require('../controllers/car');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    // ADD YOUR CODE HERE  
    if (req.isAuthenticated()==false){
    }
    if (req.isAuthenticated()==true) {
     // req.user is available for use here
        return next(); 
        
    }
    console.log(req.originalUrl)

      // denied. redirect to login
       res.redirect('/users/signin')
 
    }
     
    
       


/* GET list of items */
router.get('/list', carController.carList);

// Route for Details
router.get('/edit/:id', requireAuth, carController.displayEditPage);
router.post('/edit/:id', requireAuth, carController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, carController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth ,carController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, carController.processAddPage);

module.exports = router;