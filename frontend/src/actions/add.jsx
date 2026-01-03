import { useState } from "react"
import axios from 'axios'
import "../style/add.css"

const Add = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        age: ""
    })

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setData({ ...data, [key]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/api/user/adduser", data)
            console.log(data)
            alert(res.data.message);
            alert("data saved")
        }
        catch (err) {
            console.log(err)
        }
        setData({
            name: "",
            email: "",
            phone: "",
            age: ""
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter name : </label>
                <input type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required={true}
                /><br />
                <label>Email : </label>
                <input type="email"
                    placeholder="Jhon@gmail.com"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required={true}
                /><br />
                <label> Phone No : </label>
                <input
                    type="text"
                    name="phone"
                    value={data.phone}
                    maxLength={10}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    placeholder="10-digit phone"
                    required
                /><br />
                <label>Age : </label>
                <input type="number"
                    name="age"
                    value={data.age}
                    onChange={handleChange}
                    required={true}
                />
                <button
                    type="submit">
                    Add Data</button>
            </form>
        </>
    )
}

export default Add