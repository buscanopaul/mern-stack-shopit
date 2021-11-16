const User = require('../models/user')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/alex-suprun-ZHvM3XIOHoE-unsplash_jqug40',
            url: 'https://res.cloudinary.com/eastwest/image/upload/v1637069163/avatars/alex-suprun-ZHvM3XIOHoE-unsplash_jqug40.jpg'
        }
    }) 

    const token = user.getJwtToken()

    res.status(201).json({
        success: true,
        token
    })
})