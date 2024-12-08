import { useState,useEffect } from "react";
import FormInput from '../common/FormInput'
const Form = ({formButton,formInput,formStyle,image,containerStyle = ''}) => {
    const [formData,setformData] = useState({})
    const handleInputChange = (name,value) => {
        setformData((prevState) => ({
            ...prevState,
            [name]:value
        }))
    }
    return(
        <div className={`${containerStyle} flex ${image?.position === "left" ? "flex" : "flex-row-reverse"}`}>
            {image && <img className={image.style} src={image.url}/>}
            <form className={formStyle} action="">
                {formInput.map(item => <FormInput label={item.label} name={item.name} type={item.type} placeholder={item.placeholder} handleInputChange={handleInputChange} />)}

                {formButton.map(button => <button className={button.style} onClick={button.action}>{button.title}</button>)}
            </form>
        </div>
    )
}
export default Form