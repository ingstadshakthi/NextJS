import Link from 'next/link';
export default function Blogs() {
    return (
        <main>
            <div>My Blogs</div>
            <p><Link href='/blog/blog-1'>Blog 1</Link></p>
            <p><Link href='/blog/blog-2'>Blog 2</Link></p>
        </main>
    )
}
