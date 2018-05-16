const joi = require('joi');

const validater = module.exports = (schema = {}, options = {}) => (req, res, next) => {
    const query = req.query || {};
    const params = req.params || {};
    const body = req.body || {};
    const { error } = joi.validate({ query, body, params }, schema, options);

    if (error) return res.status(400).json({ message: error.message });

    next();
};

validater.body = (schema = {}, options = {}) => (req, res, next) => {
    const body = req.body || {};
    const { error } = joi.validate(body, schema, options);

    if (error) return res.status(400).json({ message: error.message });

    next();
};

validater.params = (schema = {}, options = {}) => (req, res, next) => {
    const params = req.params || {};
    const { error } = joi.validate(params, schema, options);

    if (error) return res.status(400).json({ message: error.message });

    next();
};

validater.query = (schema = {}, options = {}) => (req, res, next) => {
    const query = req.query || {};
    const { error } = joi.validate(query, schema, options);

    if (error) return res.status(400).json({ message: error.message });

    next();
};
