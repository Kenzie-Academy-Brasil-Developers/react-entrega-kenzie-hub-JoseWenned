import { UserItem } from "../UserItem"
import { ContainerUserList } from "../UserList/style"
export const UserList = ({ userName, course_module, userList }) => {

    if(!userList) {
        return <div></div>
    }

    return(
        <ContainerUserList>
            {userList.map(user => (
                <UserItem 
                    key={user.id} 
                    name={userName} 
                    courseModule={course_module}
                />
            ))}
        </ContainerUserList>
    )
}