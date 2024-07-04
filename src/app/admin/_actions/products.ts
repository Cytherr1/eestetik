"use server";

import { redirect } from "next/navigation";
import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";

const imageSchema = z
  .instanceof(File, {
    message: "Required",
  })
  .refine((file) => file.size > 0 || file.type.startsWith("image/"));

const addSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().int().positive(),
  description: z.string(),
  imagePath: imageSchema,
});

export async function addProduct(prevState: unknown, formData: FormData) {

  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false)
    return result.error.formErrors.fieldErrors

  const data = result.data

  await fs.mkdir("images", { recursive: true });
  const imagePath = `images/${crypto.randomUUID()}-${data.imagePath.name}`
  await fs.writeFile(imagePath, Buffer.from(await data.imagePath.arrayBuffer()))

  db.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      imagePath,
    },
  });

  redirect("/admin/products")
}
