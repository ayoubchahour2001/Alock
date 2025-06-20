import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Calendar, Bell, Shield, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="ALock" className="h-8" />
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="es">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">🇪🇸 Español</SelectItem>
                  <SelectItem value="en">🇬🇧 English</SelectItem>
                  <SelectItem value="ar">🇸🇦 العربية</SelectItem>
                  <SelectItem value="fr">🇫🇷 Français</SelectItem>
                </SelectContent>
              </Select>
              <Link href="/login">
                <Button variant="outline">Iniciar Sesión</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary-500 hover:bg-primary-600 text-navy-800">Registrarse</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Gestiona tus documentos de inmigración en España con ALock
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ALock es la plataforma integral para inmigrantes que simplifica el proceso de gestión y presentación de
            documentos de inmigración en España de forma segura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-3 bg-primary-500 hover:bg-primary-600 text-navy-800">
                Comenzar Ahora
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Saber Más
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todo lo que necesitas en una plataforma</h2>
            <p className="text-lg text-gray-600">
              Simplificamos el proceso de inmigración con herramientas intuitivas y seguras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-primary-500 mb-4" />
                <CardTitle>Gestión de Documentos</CardTitle>
                <CardDescription>Organiza y sube todos tus documentos de forma segura</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-success-500 mb-4" />
                <CardTitle>Cita Previa</CardTitle>
                <CardDescription>Sistema integrado para programar citas oficiales</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="h-12 w-12 text-primary-600 mb-4" />
                <CardTitle>Recordatorios</CardTitle>
                <CardDescription>Notificaciones para fechas límite y documentos faltantes</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle>Seguridad</CardTitle>
                <CardDescription>Tus documentos están protegidos con encriptación avanzada</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-navy-600 mb-4" />
                <CardTitle>Multiidioma</CardTitle>
                <CardDescription>Disponible en español, inglés, árabe y francés</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-navy-700 mb-4" />
                <CardTitle>Soporte Personalizado</CardTitle>
                <CardDescription>Guía específica según tu nacionalidad y propósito</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para simplificar tu proceso de inmigración?</h2>
          <p className="text-xl text-navy-300 mb-8">Únete a miles de inmigrantes que ya confían en ALock</p>
          <Link href="/register">
            <Button size="lg" className="text-lg px-8 py-3 bg-primary-500 hover:bg-primary-600 text-navy-800">
              Crear Cuenta Gratuita
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/logo.png" alt="ALock" className="h-6" />
              </div>
              <p className="text-gray-400">
                Simplificando la inmigración en España de forma segura, un documento a la vez.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features">Características</Link>
                </li>
                <li>
                  <Link href="/pricing">Precios</Link>
                </li>
                <li>
                  <Link href="/security">Seguridad</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Centro de Ayuda</Link>
                </li>
                <li>
                  <Link href="/contact">Contacto</Link>
                </li>
                <li>
                  <Link href="/guides">Guías</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy">Privacidad</Link>
                </li>
                <li>
                  <Link href="/terms">Términos</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ALock. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
