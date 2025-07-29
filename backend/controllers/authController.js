import userModel from '../models/userModel.js';
export const registerController = async (req, res) => {
    
    try {
        const { username, email, password} = req.body;
        // Validate
        if (!username ) {
            return res.status(400).send({success: false, message: 'Username is required'});
        }
        if (!email ) {
            return res.status(400).send({success: false, message: 'Email is required'});
        }
        if (!password ) {
            return res.status(400).send({success: false, message: 'Password is required'});
        }

        const existingUser = await userModel.findOne({ email });
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: 'User already exists, Please login'
            })
        }
        // Create new user
        const user = await userModel.create({username, email, password});
        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user,
        })

    } catch (error) {
        console.log(error) 
        res.status(400).send(
            {
                message: 'Error registering user',
                error: error.message,
                success: false
            }
        )
    }
}