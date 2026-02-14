import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import CommonForm from '../../components/common/form'
import { registerFormControls } from '../../config'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/auth-slice'
import { toast } from "sonner";

const initialState = {
    userName: "",
    email: "",
    password: ""
}
const AuthRegister = () => {

    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()
        dispatch(registerUser(formData)).then((data) => {
            if (data?.payload?.success) {
                toast.success(data?.payload?.message || "Register Successful");
                navigate("/auth/login");
            } else {
                toast.error(data?.payload?.message || "Register Failed");
            }
            console.log(data);
        })
    }
    // console.log(formData)
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new account</h1>
                <p className='mt-2'>Already have an account
                    <Link to="/auth/login" className='font-medium ml-2 text-primary hover:underline'>Login</Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={'Sign Up'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default AuthRegister
