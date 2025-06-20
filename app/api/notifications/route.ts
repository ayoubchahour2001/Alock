import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Mock notifications data
    const mockNotifications = [
      {
        id: 1,
        type: "reminder",
        title: "Documento próximo a vencer",
        message: "Tu Certificado de Antecedentes Penales vence en 30 días",
        isRead: false,
        createdAt: "2024-01-15T10:00:00Z",
        scheduledFor: "2024-02-14T09:00:00Z",
      },
      {
        id: 2,
        type: "deadline",
        title: "Fecha límite próxima",
        message: "Debes subir tu Contrato de Trabajo antes del 20 de enero",
        isRead: false,
        createdAt: "2024-01-14T15:30:00Z",
        scheduledFor: "2024-01-18T09:00:00Z",
      },
      {
        id: 3,
        type: "appointment",
        title: "Recordatorio de cita",
        message: "Tienes una cita en Extranjería mañana a las 10:30",
        isRead: true,
        createdAt: "2024-01-13T18:00:00Z",
        scheduledFor: "2024-01-24T09:00:00Z",
      },
    ]

    return NextResponse.json({ notifications: mockNotifications }, { status: 200 })
  } catch (error) {
    console.error("Notifications fetch error:", error)
    return NextResponse.json({ error: "Error al obtener notificaciones" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { notificationId, isRead } = body

    if (!notificationId) {
      return NextResponse.json({ error: "ID de notificación requerido" }, { status: 400 })
    }

    // In production, update notification status in database

    return NextResponse.json({ message: "Notificación actualizada" }, { status: 200 })
  } catch (error) {
    console.error("Notification update error:", error)
    return NextResponse.json({ error: "Error al actualizar notificación" }, { status: 500 })
  }
}
