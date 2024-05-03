'use client';

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser(){
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)
        }

        getUser();
    }, [])

    const handleSignUp = async () => {
        const res = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        setUser(res.data.user)
        router.refresh();
        setEmail('')
        setPassword('')
    }

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password
        })
        setUser(res.data.user)
        router.refresh();
        setEmail('')
        setPassword('')
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.refresh();
        setUser(null)
    }

    console.log({loading, user})

    if (loading){
        return <h1>Loading...</h1>
    }

    if (user){
        return (
            <div className="bg-gray-900 p-8 rounder-lg shadow-md w-96">
                <div className="bg-gray-900 p-8 rounder-lg shadow-md w-96">
                    <h1>You have successfully logged in</h1>
                    <button
                         onClick={handleLogout}
                         className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    } 

    return (
        <main className = "h-screen flex item-center justify-center bg-gray-8-- p-6">
            <div className="bg-gray-900 p-8 rounder-lg shadow-md w-96">
            <input
                type = "email"
                name = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500"
            />
            <input
                type = "password"
                name = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}  
                placeholder="Password"
                className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500"          
            />
            <button
                onClick={handleSignUp}
                className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"          
            >
                Sign Up
            </button>

            <button
                onClick={handleSignIn}
                className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"          
            >
                Sign In
            </button>
            </div>
        </main>    
    )
}