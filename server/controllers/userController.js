const User = require('../models/userModel.js');
const userController = {};

userController.createUser = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next({
            log: 'Error occurred in userController.createUser',
            status: 400,
            message: { err: 'An error occurred' }
        });
    }
    try {
        console.log(username , password)
        res.locals.user = req.body;
        const user = await User.create({ username, password });
        res.locals.true = true;
        return next();
    } catch (err) {
        return next({
            log: 'Error occurred in userController.createUser',
            status: 400,
            message: { err: 'An error occurred' },
        });
    }
};