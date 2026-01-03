import { useState } from "react";
import axios from "axios";

const Update = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState(null);

  const handleFind = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/find",
        { email: data }
      );
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert(err)
    }
  };

  const handleChange = (e) => {
    setResult({
      ...result,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/user/update/${result._id}`,
        result
      );
      alert("User updated successfully");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <>
      <h2 style={{ color: "white" }}>Find by email</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={handleFind}>Find</button>

      <h1 style={{ color: "red" }}>{data}</h1>

      {result && (
        <>
          <input
            name="name"
            value={result.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            name="email"
            value={result.email}
            disabled
          />

          <input
            name="phone"
            value={result.phone}
            onChange={handleChange}
            placeholder="Phone"
          />

          <input
            name="age"
            value={result.age}
            onChange={handleChange}
            placeholder="Age"
          />

          <button onClick={handleUpdate}>Update</button>
        </>
      )}

    </>
  );
};

export default Update;
