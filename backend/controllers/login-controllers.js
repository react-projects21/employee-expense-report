import login from "../models/login";
// import bcrypt from 'bcryptjs';

export const getAlluser = async (req, res, next) => {
    let users;
    try{
        users= await login.find();
    }catch(err){
        console.log(err);
    }

    if (!users){
        return res.ststus(404).json({ message: "No Users Found"});
    }
    return res.status(200).json({users})
};



export const signup = async (req,res, next) => {
    const {email , password} = req.body;
    let existingUser;
    try{
        existingUser =await login.findOne({email});
    }catch(err){
      return  console.log(err);
    }
    if (existingUser){
        return res.status(400).json({message: "user already existed"})
    }
      
    // const hashedPassword = bcrypt.hashSync(password);
    const user = new login({
        email,
        password
        // blogs:[],
    });
    
    try{
        user.save();
    }catch(err){
        console.log(err);
    }
    return res.status(201).json({user})
}
 
export const login = async (req, res, next) => {
    const {email, password} = req.body;
    let existingUser;
    try{
        existingUser = await login.findOne({ email });
    } catch (err){
        return console.log(err);
    }
    if (!existingUser){
        return res
        .status(404)
        .json({message: "Coundnt Find the user by this email"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect){
        return res.status(400).json({message: "incorrect password"})
    }
    return res.status(200).json({message:"Login sucessfull"})
}