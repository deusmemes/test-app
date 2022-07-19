import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "../../hooks/useAppDispatch";
import {actions, loginThunk} from "../../app/store/auth/slice";

type Location = {
    fromPage: string
}

const Login = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const login = () => {
        dispatch(loginThunk())
    }

    return (
        <div>
            <h4>login from {location.state as string}</h4>
            <button onClick={login}>login</button>
        </div>
    )
}

export default Login
