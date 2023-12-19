import { useRouter } from "next/navigation"

export default function About() {
    const router = useRouter()
    const handleClick = () =>{
        router.push('/cart')
    }
    return (
        <div id='about' className="flex min-h-screen flex-col items-center justify-between p-24">
            About Us
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={()=>handleClick()}>
                cart
            </button>
        </div>
    )
}
