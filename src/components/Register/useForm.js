import {useState, useEffect} from "react";

const useForm = (validate) => {
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        userName: "",
        email: "",
        password: "",
        password2: "",
        type:"user"
    })

    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState();
    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitted(true);

        //This should be validated before sending to the database
        //If Errors exist then set the Submitted state to false.

    };

    return {handleChange, values, handleSubmit, errors, isSubmitted};
}
export default useForm;
