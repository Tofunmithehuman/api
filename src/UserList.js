import UserCard from './UserCard';
import './App.css';
const UserList = ({ users }) => {
    //console.log('from component:', users);
    return (
        <div className='firstDivUserList'>
            {users.map((element) => <UserCard key={element.id} user={element} />)}
        </div>
    );
}
export default UserList;