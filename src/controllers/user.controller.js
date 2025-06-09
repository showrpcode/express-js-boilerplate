const userService = require('../services/user.service');

const UserController =
{
    getUsers: async (req, res) => {
        const userList = await userService.getUsers();
        res.status(200).json({
            'success': true,
            'message': 'user details fetch successfully',
            'data': userList,
            'error': {}
        });
    },

    addUser: async (req, res) => {
        const response = await fetch('https://dummyjson.com/products?limit=200');
        const data = await response.json();
        res.status(200).json({
            success: true,
            message: 'User added fetch successfully',
            data: data,
            error: {}
        });

    }
}

module.exports = UserController;