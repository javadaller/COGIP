import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import cors from "cors"
import usersRoute from './public/assets/js/server/routes/usersRoute.js'

const app = express()
const PORT = 5173

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(usersRoute)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
