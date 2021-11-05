const {getBody} = require( './service');

const getByLot = async (req, res) => {
    try {
        const data = await getBody(req.params.lot);
        res.json({status: 200, data, message: 'data success'});
    } catch (error) {
        const myError = {
            request: JSON.stringify(error.stack.split('\n').slice(1, 4)),
            message: error.message,
            type: 'error',
        };
        res.status(400);
        res.json(myError);
    }
};

module.exports = { getByLot };