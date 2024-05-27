import { CloseButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "./store/slices/userSlice";

const UserDetail = () => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.users);   
    
    const deleteSeletedUser = (user) => {
        dispatch(deleteUser(user.id));
    }
    return(
    <>
        {
            users.map((user, id) => {
                return <tr key={id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.fullName}</td>
                <td>{user.dob}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
                <td>{user.zipCode}</td>
                <td><CloseButton onClick={()=>deleteSeletedUser(user)}></CloseButton></td>
              </tr>
            })
        }
        </>
    )

}

export default UserDetail;