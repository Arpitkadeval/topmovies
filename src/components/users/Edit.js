import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactSelect from "react-select";

export default function Edit() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [contries, setContries] = useState([]);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    webside: "",
    city: "",
    gender: "",
    phone: "",
    country: "",
  });
  const { name, username, email, password, city, gender, phone } = user;
  React.useEffect(() => {
    countryDataHandler();
  }, []);

  const onInputChange = (e, key) => {
    if (key === "country") {
      setUser({ ...user, [key]: e.value });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const countryDataHandler = async () => {
    await axios
      .get(
        "https://gist.githubusercontent.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4/raw/3d54c1a6869e2bf35f729881ef85af3f22c74fad/countries.json"
      )
      .then((response) => {
        const Data = response.data.map((i) => ({
          value: i.name,
          label: i.name,
          image: i.flag,
          dialCode: i.dialCode,
        }));

        setContries(Data);
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="maarging">Update You'r Name</h1>
        <form className="mx-1 my-1" onSubmit={(e) => onSubmit(e)}>
          <div className="form-row ">
            <div className="form-group">
              <label for="inputAddress">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="1234 Main St"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Apartment, studio, or floor"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Phone</label>
              <input
                type="number"
                className="form-control"
                name="number"
                placeholder="123456789"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div onChange={(e) => onInputChange(e)}>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              name="gender"
              className="mt-4 mx-1"
            />{" "}
            Male
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              name="gender"
              className="mt-4 mx-1"
            />{" "}
            Female
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <ReactSelect
              name="country"
              onChange={(e) => onInputChange(e, "country")}
              value={contries.filter((contry) => {
                return contry.label === user.country;
              })}
              options={contries || []}
              formatOptionLabel={(country) => (
                <div className="blaack">
                  <img
                    src={country.image}
                    alt="flags"
                    style={{
                      width: "25px",
                      marginRight: "10px",
                    }}
                  />
                  <span className="blaack">
                    {country.dialCode} {country.label}
                  </span>
                </div>
              )}
            />
          </div>
          <button type="submit" className="btn btn-warning my-3 mx-3">
            Updata Name
          </button>
        </form>
      </div>
    </div>
  );
}
