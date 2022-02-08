import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Home() {
  const [users, setUsere] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsere(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

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
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                      to="/"
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
