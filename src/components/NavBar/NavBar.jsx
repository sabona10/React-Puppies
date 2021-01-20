import { Link, NavLink} from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function App({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null)
    }

    return (
        <nav>
            <NavLink exact activeStyle={{backgroundColor:'yellow'}} to="/puppies" >All Puppies</NavLink>
            <NavLink exact activeStyle={{ backgroundColor: 'yellow' }} to="/puppies/new" >New puppy</NavLink> <span>welcome  {user.name}</span>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        );
}
