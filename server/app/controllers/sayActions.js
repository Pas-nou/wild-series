// Declare the action

const sayWelcome = (req, res) => {
    console.info(req.query)

    res.send(`Welcome to Wild Series, ${req.query.name} !`);
};

// Export it ti import it somewhere else

module.exports = { sayWelcome };