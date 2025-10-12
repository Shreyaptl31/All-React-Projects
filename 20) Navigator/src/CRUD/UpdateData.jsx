import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom';

const UpdateData = () => {

    const { register, handleSubmit, setValue, reset } = useForm()
    const { id } = useParams();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        // console.log(data);
        const response = await axios.put(`http://localhost:3000/posts/${id}`, data)
        console.log(response.data);
        reset();
        navigate('/');
        // getData();                                                      
    };

    const getData = async () => {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        // console.log(response.data);
        setValue("Username", response.data.Username);
        setValue("City", response.data.City);
    };

    useEffect(() => {
        getData();
    }, []);

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
        </>
    )
}

export default UpdateData