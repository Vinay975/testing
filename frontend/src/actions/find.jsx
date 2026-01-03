import { useEffect, useState } from "react";
import axios from "axios";

const Find = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/getdata")
      .then((res) => {
        setUsers(res.data); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr style={{color:"white"}}>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
            <tr>
              <td style={{color:"white"}}>{user.name}</td>
              <td style={{color:"white"}}>{user.email}</td>
              <td style={{color:"white"}}>{user.phone}</td>
              <td style={{color:"white"}}>{user.age}</td>
            </tr>
          ))
         }
      </tbody>
    </table>
  );
};

export default Find;
