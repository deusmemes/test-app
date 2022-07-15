import {useLocation, useNavigate} from "react-router-dom";
import {Paths} from "../../routes/Paths";

type Location = {
    fromPage: string
}

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const login = () => {
        const from = location.state as string | undefined
       if (from != null) {
           navigate(from)
       } else {
           navigate(Paths.Main)
       }
    }

    return (
        <div>
            <h4>login from {location.state as string}</h4>
            <button onClick={login}>login</button>
        </div>
    )
}

export default Login
