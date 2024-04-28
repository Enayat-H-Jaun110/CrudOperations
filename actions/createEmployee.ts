"use server";
import { z } from "zod";
import { EmployeeSchema } from "@/schemas";
import { db } from "@/lib/db";

export const createEmployee = async (values : z.infer<typeof EmployeeSchema>) => {

    const validatedValues = EmployeeSchema.safeParse(values);

    if(!validatedValues.success) {
        return {
            error: "The values are invalid"
        }
    }

    const employee = await db.employee.create({
        data: {
            FirstName: validatedValues.data.FirstName,
            LastName: validatedValues.data.LastName,
            email: validatedValues.data.email,
            phone: validatedValues.data.phone
        }
    });

    console.log(employee);
}