import { z } from "zod"

export const FormSchemaLogin = z.object ({
    email: z.string().nonempty("E-mail is required.").email("Invalid e-mail address."),
    password:
     z.string()
     .nonempty("Passoword is required.")
     .min(8, "The password must have at least six characters.")
     .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
        "The password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
        ),
})