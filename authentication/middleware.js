import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'

// This code will run before each routeis accessed or rendered
export async function middleware(req){
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req, res});
    await supabase.auth.getSession(); //updates cookies
    return res; // return the response in an actve session
}