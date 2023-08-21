import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"; 
import { logout } from "redux/auth/operations"
import { selectUser } from "redux/auth/selectors"

export const UserMenu = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const handleLogout= () => {
        dispatch(logout());
        navigate('/logIn')
    }

    return (
      <div>
        <p>{user?.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
}