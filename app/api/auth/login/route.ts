import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ error: "Email y contraseña son requeridos" }, { status: 400 })
    }

    // In a real application, you would query the database here
    // For demo purposes, we'll simulate a user lookup
    const mockUser = {
      id: 1,
      email: "maria.gonzalez@email.com",
      passwordHash: await bcrypt.hash("password123", 12),
      firstName: "María",
      lastName: "González",
      nationality: "Colombia",
      immigrationPurpose: "Trabajo",
    }

    // Check if user exists (in production, query database)
    if (email !== mockUser.email) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, mockUser.passwordHash)
    if (!isValidPassword) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    // Create session token (in production, use proper JWT or session management)
    const sessionToken = btoa(
      JSON.stringify({
        userId: mockUser.id,
        email: mockUser.email,
        exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      }),
    )

    return NextResponse.json(
      {
        message: "Inicio de sesión exitoso",
        user: {
          id: mockUser.id,
          firstName: mockUser.firstName,
          lastName: mockUser.lastName,
          email: mockUser.email,
          nationality: mockUser.nationality,
          immigrationPurpose: mockUser.immigrationPurpose,
        },
        sessionToken,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
