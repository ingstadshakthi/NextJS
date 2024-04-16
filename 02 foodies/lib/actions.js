'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (!meal.title || !meal.summary || !meal.instructions || !meal.creator || !meal.creator_email || !meal.creator_email) {
        // throw new Error('Invalid Input');
        return {
            message: 'Invalid Input'
        };
    }


    await saveMeal(meal);
    revalidatePath('/meals', 'page'); // only direct page
    // revalidatePath('/meals', 'layout'); // all nested page
    redirect('/meals')
}