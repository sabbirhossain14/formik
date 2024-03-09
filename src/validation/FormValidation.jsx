import * as Yup from 'yup';
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
 
export const validation = Yup.object({
    firstname : Yup.string()
              .max(15, 'Must be 15 characters or less')
              .min(5, 'Must be 2 characters or Above')
              .required("First Name Missing"),

    lastname : Yup.string()   
                .max(15, 'Must be 15 characters or less')
                .min(5, 'Must be 2 characters or Above')
                .required("Last Name Missing"), 

    email   : Yup.string()
    .email('Invalid email address')
    .matches(emailRegex , "Invalid email address")
    .required("Email Missing")   ,
    
    password: Yup.string()
            .matches (passwordRegex ,
                " password must contain at least 8 characters,one uppercase, one number and one special case character")
            .required ("Password Missing")
})