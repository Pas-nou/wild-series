const express = require("express");

const router = express.Router();

//  sayWelcome Route

const { sayWelcome } = require('../../controllers/sayActions');

router.get('/', sayWelcome);

//  browse Route

const { browse } = require('../../controllers/programActions');

router.get('/', browse);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

//  Items router

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

//  Progams router

const progamsRouter = require('./programs/router');

router.use('/programs', progamsRouter);

/* ************************************************************************* */

module.exports = router;
