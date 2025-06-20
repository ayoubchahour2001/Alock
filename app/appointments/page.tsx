"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Clock, MapPin, Phone, Plus, Edit, Trash2 } from "lucide-react"

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedOffice, setSelectedOffice] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [notes, setNotes] = useState("")

  const upcomingAppointments = [
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

  const availableOffices = [
    {
      name: "Oficina de Extranjería Madrid Centro",
      address: "Calle de la Montera, 15, 28013 Madrid",
      phone: "+34 91 537 17 00",
      services: ["Visados", "Permisos de Residencia", "Reagrupación Familiar"],
    },
    {
      name: "Comisaría de Policía Nacional",
      address: "Calle de los Madrazo, 9, 28014 Madrid",
      phone: "+34 91 322 15 60",
      services: ["NIE", "Certificados", "Denuncias"],
    },
  ]

  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
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
            <Button className="bg-primary-500 hover:bg-primary-600 text-navy-800">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Cita
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Appointment Booking */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Programar Nueva Cita</CardTitle>
                <CardDescription>Selecciona fecha, hora y oficina para tu cita</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Seleccionar Fecha</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border mt-2 [&_.rdp-day_selected]:bg-primary-500 [&_.rdp-day_selected]:text-navy-800"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Oficina</Label>
                  <Select onValueChange={setSelectedOffice}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una oficina" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableOffices.map((office, index) => (
                        <SelectItem key={index} value={office.name}>
                          {office.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Hora</Label>
                  <Select onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTimes.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Notas (Opcional)</Label>
                  <Textarea
                    placeholder="Información adicional sobre tu cita..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-navy-800">Confirmar Cita</Button>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Appointments */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Próximas Citas</CardTitle>
                <CardDescription>Tus citas programadas y confirmadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="border-l-4 border-l-primary-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{appointment.type}</CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                {appointment.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {appointment.time}
                              </div>
                            </div>
                          </div>
                          <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                            {appointment.status === "confirmed" ? "Confirmada" : "Pendiente"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                            <div>
                              <p className="font-medium">{appointment.office}</p>
                              <p className="text-sm text-gray-600">{appointment.address}</p>
                            </div>
                          </div>

                          <div className="mt-3">
                            <p className="text-sm font-medium mb-1">Documentos necesarios:</p>
                            <div className="flex flex-wrap gap-1">
                              {appointment.documents.map((doc, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-4">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Cancelar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Información de Oficinas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableOffices.map((office, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium">{office.name}</h4>
                      <div className="mt-2 space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {office.address}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {office.phone}
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-medium">Servicios:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {office.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
