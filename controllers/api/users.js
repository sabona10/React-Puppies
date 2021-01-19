const User = require('../../models/user')

const jwt = require('jsonwebtoken')

module.exports = {
    create
};

async function create(req, res) {
    // Baby step...
    try {
        //add user
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
        
    } catch (err) {
        res.status(400).json(err)
    }
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    });
}

/* helper function */
function createJWT(user){
    return jwt.sign(
        { user },
        process.env.SECRET,
        {expiresIn:'24h'}
    );
}