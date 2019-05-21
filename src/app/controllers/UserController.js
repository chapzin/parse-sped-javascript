const User = require('../models/User')

const store = async (req, res) => {
  const { email } = req.body
  if (await User.findOne({ email })) {
    return res.status(400).json({ error: 'User already exists' })
  }

  const user = await User.create(req.body)

  return res.status(200).json(user)
}

module.exports = { store }
