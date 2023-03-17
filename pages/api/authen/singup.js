import { hashPassword } from "../../../lib/auth"
import ConnectMongofDb from "../../../lib/dbConect"

async function handeler (req, res) {
    if (req.method === 'POST') {}
    const {email, password} = req.body

    // login fail
    if(!email || !password || password.trim().length < 7) {
        res.status(422).json({message: "invalid input!"})
    }

    //login succesfully
    const client =  await ConnectMongofDb()
    const db = client.db()

    // hash password by bcryptjs
    const hashedPassword = await hashPassword(password)
    const result = await db.collection('authen').insertOne({
        email: email,
        password: hashedPassword
    })
    res.status(201).json({message:'Created user!'})
    
}
export default handeler