const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import programs-related actions
const { browse, read } = require("../../../controllers/programActions");

// Route to get a list of programs
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;