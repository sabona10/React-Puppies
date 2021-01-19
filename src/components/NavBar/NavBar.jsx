import { NavLink} from 'react-router-dom'

export default function App() {
return (
    <nav>
        <NavLink exact activeStyle={{backgroundColor:'yellow'}} to="/puppies" >All Puppies</NavLink>
        <NavLink exact activeStyle={{ backgroundColor: 'yellow' }} to="/puppies/new" >New puppy</NavLink>
        </nav>
    );
}
