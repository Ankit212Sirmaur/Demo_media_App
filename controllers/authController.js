const User = require('../models/UserSchema')
const bcrypt = require('bcrypt');
const signupController = async (req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: 'All field are required'
            });
        }
        const olduser = await User.findOne({email});
        if(olduser) {
            return res.status(409).json({
                message: 'This email is already'
            })
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = await User.create({
            email,
            password: hashPassword,
        })
        return res.status(201).json({
            user,
        })
    } catch (error) {
        console.log(error);
    }
}
const loginController = async (req, res) =>{
    try {
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: 'All field are required'
            });
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message: 'This email is not registred'
            })
        }
        const matchpass = bcrypt.compareSync(password, user.password);
        if(!matchpass){
            return res.status(403).json({
                message: 'password incorrect'
            })
        }
        return res.status(202).json({
            message : 'user details are below',
            user,
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    signupController, loginController
}