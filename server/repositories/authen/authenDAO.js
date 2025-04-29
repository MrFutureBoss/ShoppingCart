import Account from "../../models/authen/accountModel.js"
import bcrypt from "bcrypt";


const getAllAccount = async (req, res) => {
    try {
        return await Account.find();
    } catch (error) {
        throw new Error(error);
    }
}


const register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        return await Account.create({
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role,
            status: req.body.status,
            refreshToken: req.body.refreshToken,
            socketId: req.body.socketId,
            lastLogin: req.body.lastLogin,
        });
    } catch (error) {
        throw new Error(error);
    }
}

export default {getAllAccount, register }