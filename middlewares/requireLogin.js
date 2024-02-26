module.exports = async (req, res, next) => {
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.json('Authorization is required');
    }
    next();
}