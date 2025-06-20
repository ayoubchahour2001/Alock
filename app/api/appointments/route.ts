import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Mock appointments data
    const mockAppointments = [
      {
        id: 1,
        type: "Cita Previa - Extranjería",
        date: "2024-01-25",
        time: "10:30",
        office: "Oficina de Extranjería Madrid Centro",
        address: "Calle de la Montera, 15, 28013 Madrid",
        status: "confirmed",
        documents: ["Pasaporte", "Contrato de Trabajo", "Certificado Médico"],
      },
      {
        id: 2,
        type: "Renovación NIE",
        date: "2024-02-15",
        time: "14:00",
        office: "Comisaría de Policía Nacional",
        address: "Calle de los Madrazo, 9, 28014 Madrid",
        status: "pending",
        documents: ["NIE Actual", "Pasaporte", "Justificante de Pago"],
      },
    ]

    return NextResponse.json({ appointments: mockAppointments }, { status: 200 })
  } catch (error) {
    console.error("Appointments fetch error:", error)
    return NextResponse.json({ error: "Error al obtener citas" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date, time, office, type, notes } = body

    // Validate required fields
    if (!date || !time || !office || !type) {
      return NextResponse.json({ error: "Fecha, hora, oficina y tipo son requeridos" }, { status: 400 })
    }

    // Validate date is in the future
    const appointmentDate = new Date(date)
    const today = new Date()
    if (appointmentDate <= today) {
      return NextResponse.json({ error: "La fecha debe ser futura" }, { status: 400 })
    }

    // In production, you would:
    // 1. Check office availability
    // 2. Validate time slot
    // 3. Save to database
    // 4. Send confirmation email/SMS

    const mockAppointment = {
      id: Date.now(),
      type,
      date,
      time,
      office,
      status: "scheduled",
      notes: notes || null,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        message: "Cita programada exitosamente",
        appointment: mockAppointment,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Appointment creation error:", error)
    return NextResponse.json({ error: "Error al programar cita" }, { status: 500 })
  }
}
