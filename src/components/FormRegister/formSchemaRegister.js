import { z } from "zod";

export const FormSchemaRegister = z.object ({
    name: z.string().nonempty("Name is required."),
    email: z.string().nonempty("E-mail is required.").email("Invalid e-mail address."),
    password:
     z.string()
     .nonempty("Passoword is required.")
     .min(8, "The password must have at least eight characters.")
     .regex(/(?=.*[a-z])/, " Need is a letter lowercase. ")                                                  
     .regex(/(?=.*[A-Z])/, " Need is a letter uppercase. ")
     .regex(/(?=.*[!@#$%^&*])/, " Need is a letter special character. ")
     .regex(/(?=.*?[0-9])/, "Need a number"),
    
    confirmPassword: 
     z.string()
     .nonempty("Confirm password is required."),

    bio: 
     z.string()
     .nonempty("Bio is required.")
     .min(10, "The bio must have ten characters."), 
    contact: 
    z.string()
    .nonempty("Contact is required.")
    .min(6, "The name must have two characters."),
    course_module: 
    z.string()
    .nonempty("Course is required."),
}).refine( ({password, confirmPassword}) => password === confirmPassword, {
    message: "password do not match", 
    path: [" confirmPassword "],
})