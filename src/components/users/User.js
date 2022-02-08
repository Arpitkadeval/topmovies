import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    webside: "",
    city: "",
    phone: "",
    catchPhrase: "",
    zipcode: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div classNameName="containar py-3 mx-5 py-3 m-1">
      <div className="container m-4">
        <Link rel="stylesheet" href="" className=" btn btn-primary" to="/">
          back Home
        </Link>
      </div>
      <div className="containar mx-5">
        <h3 classNameName="display-4 m-3">User Id {id}</h3>
      </div>
      <hr />

      <form className="mx-5">
        <div className="form-group row ">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.name}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            user name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.username}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            email:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.email}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            password:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.password}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            webside:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.webside}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            city:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.city}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            phone:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.phone}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            catchPhrase:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.catchPhrase}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            zipcode:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={user.zipcode}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
