import React, { useState, useEffect } from "react"

// https://segmentfault.com/a/1190000015049343
function UserList(){
    const [ users, setUsers ] = useState([]);

    useEffect(()=>{
        fetch(
            'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all'
        )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUsers(data);
      })
      .catch(e => console.error('error:', e))
    });

    return (
        <div>
            <ul>
                {users &&
                 users.map((item, index) => (
                    <li key={index.toString()}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;