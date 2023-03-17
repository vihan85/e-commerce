import {MongoClient} from "mongodb"

async function ConnectMongofDb () {
  const client =  MongoClient.connect('mongodb+srv://login:yEM6tD8ipziAXDkE@cluster0.7pwrkrt.mongodb.net/login?retryWrites=true&w=majority')
  return client
}
export default ConnectMongofDb