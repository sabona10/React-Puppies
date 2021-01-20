import React from 'react'
import * as usersService from '../../utilities/users-service'

function AllPuppiesPage() {
    async function handleCheckToken() {
        const expDate = await usersService.checkToken();
        console.log(expDate)
    }
    return (
        <div className="AllPuppiesPage">
            <h1>All Puppies</h1>
            <button onClick={handleCheckToken}>Check when my login expires</button>
        </div>
    );
}

export default AllPuppiesPage;
