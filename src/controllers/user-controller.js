function getUser(req, res) {
    res.status(200).json({
        'success': true,
        'message': 'user details fetch successfully',
        'data': {},
        'error': {}
    });
}

async function addUser(req, res) {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=200');
        const data = await response.json();
        res.status(200).json({
            success: true,
            message: 'User added fetch successfully',
            data: data,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch data',
            data: {},
            error: error.message
        });
    }
}

module.exports = {
    getUser,
    addUser
}