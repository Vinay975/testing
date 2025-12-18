import { useState } from "react"

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

        setData({...data, [key]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        alert("data saved")
        setData({
            name: "",
            email: "",
            phone: "",
            age: ""
        })
    }

    // const handleClick = () => {}
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter name : </label>
                <input type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                /><br />
                <label>Email : </label>
                <input type="email"
                    placeholder="Jhon@gmail.com"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                /><br/>
                <label> Phone No : </label>
                <input type="number"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                /><br />
                <label>Age : </label>
                <input type="number"
                    name="age"
                    value={data.age}
                    onChange={handleChange}
                />
               <button 
                // onClick={hanleClick}
                type="submit">
                Add Data</button>
            </form>
        </>
    )
}

export default Add