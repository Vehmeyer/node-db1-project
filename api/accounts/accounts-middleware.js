const Account = require('./accounts-model')

exports.checkAccountPayload = async (req, res, next) => {

}

exports.checkAccountNameUnique = (req, res, next) => {
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    if (!account) {
      res.status(404).json({message: "account not found"})
    } else {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
}
