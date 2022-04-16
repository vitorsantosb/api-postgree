module.exports = async (req, res, next) => {
    if(req.headers.authorization === "sweetCQwn8uVj"){
        return next();
    }
    res.status(401).json({message: "Unauthorized"});
}