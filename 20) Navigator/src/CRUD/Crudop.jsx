import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const Crudop = () => {
    const { register, handleSubmit, reset } = useForm()
    const [userdata, setUserData] = useState([]);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        const response = await axios.post("http://localhost:3000/posts", data)
        console.log(response.data);
        reset();
        getData();
    };

    const getData = async () => {
        const response = await axios.get('http://localhost:3000/posts');
        // console.log(response.data);
        setUserData(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = async (id) => {
        // console.log(id, "deleted");
        const deleteId = await axios.delete(`http://localhost:3000/posts/${id}`)
        console.log(deleteId);
        alert("Deleted successfully");
        getData();
    }

    const handleEdit = async (id) => {
        navigate(`/updatedata/${id}`)
    }

    return (
        <>
            <h1 class="text-center"> CRUD Form Validation</h1>
            <div className="container bg-dark text-white mt-4">
                <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit(onSubmit)}>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" {...register("Username")} required />
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationCustom03" {...register("City")} required />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>

            <div className="container">
                <table className="table table-success table-hover table-bordered mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.length > 0 ? (
                            userdata.map((item, index) => {
                                return (
                                    <tr>
                                        <td key={index}>{index + 1}</td>
                                        <td>{item.Username}</td>
                                        <td>{item.City}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td className="text-center display-6" colSpan={4}>No data found</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Crudop;