import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, password, phone, nationality, purpose } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !nationality || !purpose) {
      return NextResponse.json({ error: "Todos los campos requeridos deben ser completados" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Formato de email inválido" }, { status: 400 })
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 8 caracteres" }, { status: 400 })
    }

    // Hash password
    const saltRounds = 12
    const passwordHash = await bcrypt.hash(password, saltRounds)

    // In a real application, you would save to database here
    // For now, we'll simulate a successful registration
    const user = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      nationality,
      immigrationPurpose: purpose,
      createdAt: new Date().toISOString(),
    }

    // Create session token (in production, use proper JWT or session management)
    const sessionToken = btoa(JSON.stringify({ userId: user.id, email: user.email }))

    return NextResponse.json(
      {
        message: "Usuario registrado exitosamente",
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          nationality: user.nationality,
          immigrationPurpose: user.immigrationPurpose,
        },
        sessionToken,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
