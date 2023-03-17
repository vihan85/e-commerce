import CreateAccount from "../layout/component/create-account"
import Login from "../layout/component/login/login"
import Modal from "../layout/component/login/modal"
import Button from "../ui/btn/btn"

function LoginForm ({hideModal}) {
    return (
        <Modal login = { <Login />} createAccount = {<CreateAccount/>}>
            <Button marTop maxWidth onClick={()=>{hideModal()}}>Close</Button>
        </Modal>
    )
}
export default LoginForm