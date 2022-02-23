import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  const [users, setUsere] = useState([]);
  const [data, setdata] = useState([]);
  console.log(users);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
      await axios.get(
          'http://localhost:3003/userss'
        )
        .then((response) => {
          console.log(response.data);
          setUsere(response.data);
        })
        .catch((erro) => {
          console.log("error", erro);
        });
  };
  const deleteUser = async (_id) => {
    axios({
      method:"DELETE",
      url:`http://localhost:3003/usersdelete/${_id}`,
    })
    .then((res) => console.log(res),
    loadUsers())
    .catch((e) => console.log(e));
  };
const editUser = async(_id)=>{
//  const data = users.filter((dt) => {
//         return dt._id === _id;
//  });
//  setdata(data);
//  console.log("?>>>>>>>>>>>>>>>",data);
//  navigate("/users/edit")

}
  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1 className="maarging">Home Page</h1>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">city</th>
                <th scope="col">Number</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
          
                  <td>
                    <Link
                      className="btn btn-success mx-1"
                      to={`/users/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/users/edit/${user._id}`}
                      onClick={() => editUser(user._id)}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      to={`/users/edit/${user._id}`}
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
