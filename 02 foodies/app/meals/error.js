'use client'

export default function MealsError({ error }) {
    return (
        <main className='error'>
            <h1>An error occurred</h1>
            <p>Failed to fetch Meals data. Please try again Later. </p>
        </main>
    )
}
