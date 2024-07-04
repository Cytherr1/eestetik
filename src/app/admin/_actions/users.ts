"use server"

import { redirect } from "next/navigation"
import db from "@/db/db"
import { z } from "zod"

const addSchema = z.object(
    {
        name: z.string().min(1),
        surname: z.string().min(1),
        email: z.string().min(8),
        hashedPassword: z.string().min(8),
        telephoneNumber: z.string().min(11)
    }
)

export async function addUser(prevState: unknown, formData : FormData){

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))

    if (result.success === false)
        return result.error.formErrors.fieldErrors

    const data = result.data

    await db.user.create({
        data: {
            name: data.name,
            surname: data.surname,
            email: data.email,
            hashedPassword: data.hashedPassword,
            telephoneNumber : data.telephoneNumber
        }
    })

    redirect("/admin/users")

}