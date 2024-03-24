import { LOGIN_TOKEN } from '@/app/core/constans'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const userToken = request.cookies.get(LOGIN_TOKEN)?.value
    const path = request.nextUrl.pathname
    if (!userToken) {
        if (path != '/') {
            return NextResponse.redirect(new URL('/', request.url))
        }
    } else {
        if (userToken && path != '/profile') {
            return NextResponse.redirect(new URL('/profile', request.url))
        }
    }
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
}