// Gives the user a code and redirects to session once they click on link for the code, and redirected to application

import {createRoutehandlerClient} from '@superbase/auth-helpers-nextjs'
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

export async function GET(request){
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    if (code){
        const cookieStore = cookies();
        const supabase = createRoutehandlerClient({cookieStore: () => cookieStore})
        await supabase.auth.exchangeCodeForSession(code);
    }
    return NextResponse.redirect(requestUrl.origin);
}