const isvalid = require('isvalid')

function doValidation(schema) {
    return async function(req, res, next) {
        try {
            const {body} = req;
            await isvalid(body, schema);
            next();
        } catch (err) {
            res.status(400);
            res.send(`Invalid field ${err.keyPath} - ${err.message}`);
        }
    };
}

module.exports = {
    doValidation
};
