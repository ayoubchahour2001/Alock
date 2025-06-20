import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // In production, you would query the database based on user ID from session
    const mockDocuments = [
      {
        id: 1,
        name: "Pasaporte",
        description: "Pasaporte válido con al menos 6 meses de vigencia",
        status: "completed",
        uploadDate: "2024-01-15",
        expiryDate: "2026-03-20",
        required: true,
        category: "required",
      },
      {
        id: 2,
        name: "Certificado de Antecedentes Penales",
        description: "Certificado apostillado del país de origen",
        status: "completed",
        uploadDate: "2024-01-14",
        expiryDate: "2024-07-14",
        required: true,
        category: "required",
      },
      {
        id: 3,
        name: "Contrato de Trabajo",
        description: "Contrato firmado por el empleador español",
        status: "pending",
        uploadDate: null,
        expiryDate: null,
        required: true,
        category: "required",
      },
      {
        id: 4,
        name: "Certificado Médico",
        description: "Examen médico realizado en España",
        status: "review",
        uploadDate: "2024-01-13",
        expiryDate: "2024-04-13",
        required: true,
        category: "required",
      },
      {
        id: 5,
        name: "Título Universitario",
        description: "Título apostillado y traducido",
        status: "completed",
        uploadDate: "2024-01-10",
        expiryDate: null,
        required: true,
        category: "required",
      },
      {
        id: 6,
        name: "Certificado de Idioma",
        description: "Certificado DELE o SIELE",
        status: "pending",
        uploadDate: null,
        expiryDate: null,
        required: false,
        category: "optional",
      },
    ]

    return NextResponse.json({ documents: mockDocuments }, { status: 200 })
  } catch (error) {
    console.error("Documents fetch error:", error)
    return NextResponse.json({ error: "Error al obtener documentos" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const documentType = formData.get("documentType") as string
    const notes = formData.get("notes") as string

    if (!file || !documentType) {
      return NextResponse.json({ error: "Archivo y tipo de documento son requeridos" }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"]
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Tipo de archivo no permitido. Solo PDF, JPG, PNG" }, { status: 400 })
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "El archivo es demasiado grande. Máximo 5MB" }, { status: 400 })
    }

    // In production, you would:
    // 1. Save file to cloud storage (AWS S3, Google Cloud, etc.)
    // 2. Save document metadata to database
    // 3. Update document status

    const mockUploadedDocument = {
      id: Date.now(),
      name: documentType,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type,
      status: "review",
      uploadDate: new Date().toISOString(),
      notes: notes || null,
    }

    return NextResponse.json(
      {
        message: "Documento subido exitosamente",
        document: mockUploadedDocument,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Document upload error:", error)
    return NextResponse.json({ error: "Error al subir documento" }, { status: 500 })
  }
}
