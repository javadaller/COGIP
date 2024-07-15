import { connectToDatabase, closeDatabaseConnection } from './assets/js/server/connect/connect.js'

const startApp = async () => {
  try {
    const connection = await connectToDatabase()

    console.log('connected ',connection)
    
    await closeDatabaseConnection()
  } catch (error) {
    console.error('Error in startApp:', error)
  }
};

startApp()
