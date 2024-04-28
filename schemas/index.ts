
import { z } from "zod"

export const EmployeeSchema = z.object({
    FirstName: z.string().min(2, {
        message: "First Name should be at least 2 characters"
    }),
    LastName: z.string().min(2, {
        message: "Last Name should be at least 2 characters"
    }),
    email: z.string().email({
        message: "Invalid Email"
    }),
    phone: z.string().min(11, {
        message: "number must contain 11 digits"
    })

})