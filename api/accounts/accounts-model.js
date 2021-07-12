const db = require('../../data/db-config')

const getAll = async () => {
  const accounts = await db('accounts')
  // console.log(accounts)
  return accounts
}

const getById = async id => {
  const account = await db('accounts').where('id', id).first()
  return account
}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

const deleteById = async id => {
  const toBeDeleted = await getById(id)
  const numOfDeletedRecords = await db('accounts').where('id', id).del()
  return toBeDeleted
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
