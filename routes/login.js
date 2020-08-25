// dependencies
var express = require('express');
var db = require('../models');

// new router
var router = express.Router();

router.get('/', (req, res) => {
    db.Subscription.find({})
        .then(subscriptions => res.status(200).json(subscriptions))
        .catch(err => res.status(404).json(err));
});

// export router
module.exports = router;