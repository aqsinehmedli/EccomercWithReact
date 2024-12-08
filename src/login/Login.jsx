import Form from '../common/Form'
import React from 'react'
import FormInput from '../common/FormInput'

const Login = () => {
    const formInput = [
        {
            email:"email",
            label:"Label",
            type:"email",
            placeholder:"Enter your Email:"
        },
        {
            password:"password",
            label:"Password",
            type:"password",
            placeholder:"Enter your password:"
        }
    ]
    const handleDataSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const formButton = [
        {
            title:"Login",
            style:"bg-blue-700 text-white py-3 rounded-md",
            action:handleDataSubmit
        },
        {
            title:"Don't have an account?",
            style:"text-blue-700",
            action: () => { }
        },
        {
            title:"Forgot password?",
            style:"text-red-600",
            action: () => { }
        }
    ]
    return (
        <Form image={{
            url: "https://cdn.stocksnap.io/img-thumbs/280h/cliff-clouds_IZB4SE5SRJ.jpg",
            position: "right", style: "w-[450px]"
        }} containerStyle='w-[850px] mt-12 mx-auto' formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md" formInput={formInput} formButton={formButton} />
    )
}
export default Login