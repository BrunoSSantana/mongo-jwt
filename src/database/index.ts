import mongoose from 'mongoose'

const { DB_URL } = process.env

const runDatabase = async () => {
  await mongoose.connect(DB_URL || '')
  console.log('db conected')
}

export { runDatabase }
