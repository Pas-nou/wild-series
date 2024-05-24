const express = require("express");

const router = express.Router();

const { sayWelcome } = require('../../controllers/sayActions');

router.get('/', sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

//  Items router

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

//  Progams router

const progamsRouter = require('./programs/router');

router.use('/programs', progamsRouter);

// Categories router

const categoriesRouter = require('./categories/router');

router.use('/categories', categoriesRouter);

/* ************************************************************************* */

module.exports = router;
