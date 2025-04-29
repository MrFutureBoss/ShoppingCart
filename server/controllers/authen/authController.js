import AccountDAO from "../../repositories/authen/authenDAO.js"


const getAllAccount = async (req, res, next) => {
    try {
        const data = await AccountDAO.getAllAccount();
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export default { getAllAccount }