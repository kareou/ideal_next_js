// import type { NextRequest } from 'next/server'
// import { verifyJwt } from '@/lib/utils'
// import { NextResponse } from 'next/server'

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get('authToken')?.value
//   const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login')
//   const isDashboard = request.nextUrl.pathname.startsWith('/admin/dashboard')
//   console.log('Middleware token:', token)
//   if (!token || token ===  undefined) {
//     // Not authenticated, redirect to login if accessing dashboard
//     if (isDashboard) {
//       return NextResponse.redirect(new URL('/admin/login', request.url))
//     }
//     return NextResponse.next()
//   }

//   const payload = await verifyJwt(token)
//   if (!payload) {
//     // Invalid/expired token, redirect to login if accessing dashboard
//     if (isDashboard) {
//       const response = NextResponse.redirect(new URL('/admin/login', request.url))
//       response.cookies.delete('authToken')
//       return response
//     }
//     return NextResponse.next()
//   }

//   // If authenticated and trying to access login, redirect to dashboard
//   if (isLoginPage) {
//     return NextResponse.redirect(new URL('/admin/dashboard', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/admin/dashboard/:path*'],
// }

import type { NextRequest } from 'next/server'
import { verifyJwt } from '@/lib/utils'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login')
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/admin') && !isLoginPage
  
  console.log('Middleware token:', token)
  console.log('Path:', request.nextUrl.pathname)
  
  if (!token || token === undefined) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    return NextResponse.next()
  }

  const payload = await verifyJwt(token)
  if (!payload) {
    if (isProtectedRoute) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url))
      response.cookies.delete('authToken')
      return response
    }
    return NextResponse.next()
  }

  if (isLoginPage) {
    return NextResponse.redirect(new URL('/admin/billing', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'], 
}