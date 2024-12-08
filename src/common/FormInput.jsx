import React from "react";

const FormInput = ({label,name,placeholder,type,handleInputChange}) => {
    return(
        <div className="flex flex-col">
            <label htmlFor={name}>{label}</label>
            <input className="border p-2" type={type} name={name} placeholder={placeholder} onChange={(e) => {
                handleInputChange(e.target.name,e.target.value)
            }} />
        </div>
    )
}
export default FormInput    








