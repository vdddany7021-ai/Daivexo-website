"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-xl w-full p-10 space-y-8">

        <h1 className="text-4xl text-center font-bold">Contact</h1>

        <div className="space-y-6">

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <Mail className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a href="mailto:info@daivexo.be" className="text-white">
                info@daivexo.be
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <Phone className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <a href="tel:+32480673786" className="text-white">
                +32 480 67 37 86
              </a>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-start gap-4">
            <MapPin className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p>
                Leernsesteenweg 124 A<br />
                9800 Deinze<br />
                België
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
