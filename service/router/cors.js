const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-type,authorization,token');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

module.exports = allowCrossDomain;