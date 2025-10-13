import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';


const EditPage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const res = await axios.put(`http://localhost:3000/posts/${id}`, data)
        console.log(res.data);
        Navigate('/')
        reset();
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
                        <button class="btn btn-primary" type="submit">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditPage