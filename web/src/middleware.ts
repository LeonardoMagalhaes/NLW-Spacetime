import { NextRequest, NextResponse } from 'next/server'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  
  // Verifica se o usuário está logado e redireciona pra página de Login
  if (!token) {
    return NextResponse.redirect(signInURL, {
      // caso não estehja logado, ele salva o endereço que estava tentando acessar pra depois de logado redirecioná-lo para esse mesmo endereço.
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
      },
    })
  }

  // Caso esteja logado .. next .. segue a vida.
  return NextResponse.next()
}

export const config = {
  // Quais endereços da aplicação vão ser aplicados o midleware
  matcher: '/memories/:path*',
}