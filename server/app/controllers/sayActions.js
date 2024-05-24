// Declare the action

const sayWelcome = (req, res) => {
    res.send('Welcome to Wild Series !');
};

// Export it ti import it somewhere else

module.exports = { sayWelcome };