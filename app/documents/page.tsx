"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Upload,
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
  Plus,
} from "lucide-react"

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const requiredDocuments = [
    {
      id: 1,
      name: "Pasaporte",
      description: "Pasaporte válido con al menos 6 meses de vigencia",
      status: "completed",
      uploadDate: "2024-01-15",
      expiryDate: "2026-03-20",
      required: true,
    },
    {
      id: 2,
      name: "Certificado de Antecedentes Penales",
      description: "Certificado apostillado del país de origen",
      status: "completed",
      uploadDate: "2024-01-14",
      expiryDate: "2024-07-14",
      required: true,
    },
    {
      id: 3,
      name: "Contrato de Trabajo",
      description: "Contrato firmado por el empleador español",
      status: "pending",
      uploadDate: null,
      expiryDate: null,
      required: true,
    },
    {
      id: 4,
      name: "Certificado Médico",
      description: "Examen médico realizado en España",
      status: "review",
      uploadDate: "2024-01-13",
      expiryDate: "2024-04-13",
      required: true,
    },
    {
      id: 5,
      name: "Título Universitario",
      description: "Título apostillado y traducido",
      status: "completed",
      uploadDate: "2024-01-10",
      expiryDate: null,
      required: true,
    },
  ]

  const optionalDocuments = [
    {
      id: 6,
      name: "Certificado de Idioma",
      description: "Certificado DELE o SIELE",
      status: "pending",
      uploadDate: null,
      expiryDate: null,
      required: false,
    },
    {
      id: 7,
      name: "Carta de Motivación",
      description: "Carta explicando motivos de inmigración",
      status: "completed",
      uploadDate: "2024-01-12",
      expiryDate: null,
      required: false,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-primary-600" />
      case "review":
        return <AlertCircle className="h-4 w-4 text-primary-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default">Completado</Badge>
      case "pending":
        return <Badge variant="destructive">Pendiente</Badge>
      case "review":
        return <Badge variant="secondary">En Revisión</Badge>
      default:
        return <Badge variant="outline">Sin Estado</Badge>
    }
  }

  const DocumentCard = ({ doc }: { doc: any }) => (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon(doc.status)}
            <div>
              <CardTitle className="text-lg">{doc.name}</CardTitle>
              <CardDescription>{doc.description}</CardDescription>
            </div>
          </div>
          {getStatusBadge(doc.status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {doc.uploadDate && <p>Subido: {doc.uploadDate}</p>}
            {doc.expiryDate && <p>Expira: {doc.expiryDate}</p>}
          </div>
          <div className="flex space-x-2">
            {doc.status === "pending" ? (
              <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-navy-800">
                <Upload className="h-4 w-4 mr-1" />
                Subir
              </Button>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="ALock" className="h-8" />
            </div>
            <Button className="bg-primary-500 hover:bg-primary-600 text-navy-800">
              <Plus className="h-4 w-4 mr-2" />
              Subir Documento
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mis Documentos</h1>
          <p className="text-gray-600">Gestiona todos tus documentos de inmigración</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Document Tabs */}
        <Tabs defaultValue="required" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="required">Documentos Requeridos</TabsTrigger>
            <TabsTrigger value="optional">Documentos Opcionales</TabsTrigger>
          </TabsList>

          <TabsContent value="required" className="mt-6">
            <div className="space-y-4">
              {requiredDocuments.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="optional" className="mt-6">
            <div className="space-y-4">
              {optionalDocuments.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
