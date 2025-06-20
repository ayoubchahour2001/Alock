"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, Bell, Upload, CheckCircle, AlertCircle, Clock, User, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [user] = useState({
    name: "María González",
    nationality: "Colombia",
    purpose: "Trabajo",
    completedDocuments: 6,
    totalDocuments: 10,
    upcomingAppointments: 2,
    pendingNotifications: 3,
  })

  const recentDocuments = [
    { name: "Pasaporte", status: "completed", uploadDate: "2024-01-15" },
    { name: "Certificado de Antecedentes Penales", status: "completed", uploadDate: "2024-01-14" },
    { name: "Contrato de Trabajo", status: "pending", uploadDate: null },
    { name: "Certificado Médico", status: "review", uploadDate: "2024-01-13" },
  ]

  const upcomingTasks = [
    { task: "Subir Contrato de Trabajo", deadline: "2024-01-20", priority: "high" },
    { task: "Cita en Extranjería", deadline: "2024-01-25", priority: "medium" },
    { task: "Renovar Certificado Médico", deadline: "2024-02-01", priority: "low" },
  ]

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="ALock" className="h-8" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="ml-1 text-xs">
                  {user.pendingNotifications}
                </Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenida, {user.name}</h1>
          <p className="text-gray-600">
            Nacionalidad: {user.nationality} • Propósito: {user.purpose}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documentos Completados</CardTitle>
              <CheckCircle className="h-4 w-4 text-success-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {user.completedDocuments}/{user.totalDocuments}
              </div>
              <Progress value={(user.completedDocuments / user.totalDocuments) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximas Citas</CardTitle>
              <Calendar className="h-4 w-4 text-primary-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.upcomingAppointments}</div>
              <p className="text-xs text-muted-foreground">Esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notificaciones</CardTitle>
              <Bell className="h-4 w-4 text-primary-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.pendingNotifications}</div>
              <p className="text-xs text-muted-foreground">Pendientes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progreso General</CardTitle>
              <FileText className="h-4 w-4 text-navy-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">60%</div>
              <p className="text-xs text-muted-foreground">Completado</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Documentos Recientes</CardTitle>
              <CardDescription>Estado de tus documentos más recientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      {doc.status === "completed" && <CheckCircle className="h-5 w-5 text-success-500" />}
                      {doc.status === "pending" && <Clock className="h-5 w-5 text-orange-600" />}
                      {doc.status === "review" && <AlertCircle className="h-5 w-5 text-primary-500" />}
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        {doc.uploadDate && <p className="text-sm text-gray-500">Subido: {doc.uploadDate}</p>}
                      </div>
                    </div>
                    <Badge
                      variant={
                        doc.status === "completed" ? "default" : doc.status === "pending" ? "destructive" : "secondary"
                      }
                    >
                      {doc.status === "completed"
                        ? "Completado"
                        : doc.status === "pending"
                          ? "Pendiente"
                          : "En Revisión"}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/documents">
                  <Button className="w-full bg-primary-500 hover:bg-primary-600 text-navy-800">
                    <Upload className="h-4 w-4 mr-2" />
                    Ver Todos los Documentos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Próximas Tareas</CardTitle>
              <CardDescription>Tareas pendientes y fechas límite</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{task.task}</p>
                      <p className="text-sm text-gray-500">Fecha límite: {task.deadline}</p>
                    </div>
                    <Badge
                      className={
                        task.priority === "high" ? "bg-primary-500 text-navy-800" : task.priority === "medium" ? "" : ""
                      }
                      variant={
                        task.priority === "high" ? undefined : task.priority === "medium" ? "default" : "secondary"
                      }
                    >
                      {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Media" : "Baja"}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <Link href="/appointments">
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Programar Cita
                  </Button>
                </Link>
                <Link href="/requirements">
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Ver Requisitos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
