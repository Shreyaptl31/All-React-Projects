import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const { register, handleSubmit, reset } = useForm();
    const [userdata, setuser] = useState([])
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        const res = await axios.post("http://localhost:3000/posts", data)
        console.log(res.data);
        reset();
    }

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/posts")
        setuser(res.data)
    }
    useEffect(() => {
        getData();
    }, [])

    const handleDelete = async (id) => {
        const deleteId = await axios.delete(`http://localhost:3000/posts/${id}`)
        console.log(deleteId);
        alert("Deleted successfully")
        getData();
    }

    const handleEdit = async (id) => {
        navigate(`/updatedata/${id}`)
    }

    return (
        <>
            <h1>CRUD  OPERATION </h1>
            <div className="container bg-dark text-white mt-4">
                <form class="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required {...register("Username")} />
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Phone number</label>
                        <input type="number" class="form-control" id="validationCustom03" required {...register("Number")} />
                    </div>

                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>

            <div className="container">
                <table className="table table-success table-hover table-bordered mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.length > 0 ? (
                            userdata.map((items, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{items.Username}</td>
                                        <td>{items.Number}</td>
                                        <td>
                                            <button onClick={() => handleEdit(items.data)}>Edit</button>
                                            <button onClick={() => handleDelete(items.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (<tr>
                            <td className="text-center display-6" colSpan={4}>No data found</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Edit