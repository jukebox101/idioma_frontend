import React from 'react';

function UserAccount (props) {
    console.log(props.currentUser.username)
    return(
        <div>
            <h1>
                Welcome, {props.currentUser.username}
            </h1>
            
        </div>
    )
}
export default UserAccount;