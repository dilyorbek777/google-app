"use client"

import { useRouter } from "next/navigation"


export default function GoForward() {
    const router = useRouter()

    return (
        <button type="button" className="border p-1 rounded-full ml-2" onClick={() => router.forward()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button>
    )
}

