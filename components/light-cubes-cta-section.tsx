"use client"

import { FormEvent, useEffect, useState } from "react"
import {
  Calendar,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react"

type FormType = "reservation" | "quote" | null

type FormData = {
  name: string
  email: string
  phone: string
  street: string
  postalCode: string
  city: string
  eventDate: string
  eventType: string
  rentalType: string
  quantity: string
  colors: string
  deliveryAddress: string
  accessNotes: string
  remarks: string
  accessConfirmed: boolean
  powerConfirmed: boolean
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  street: "",
  postalCode: "",
  city: "",
  eventDate: "",
  eventType: "",
  rentalType: "",
  quantity: "1",
  colors: "",
  deliveryAddress: "",
  accessNotes: "",
  remarks: "",
  accessConfirmed: false,
  powerConfirmed: false,
}

export function LightCubesCtaSection() {
  const [formType, setFormType] = useState<FormType>(null)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSending, setIsSending] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)
  const [sendError, setSendError] = useState("")

  useEffect(() => {
    if (!formType) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForm()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [formType])

  const updateField = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  const openForm = (type: Exclude<FormType, null>) => {
    setFormType(type)
    setFormData(initialFormData)
    setSendSuccess(false)
    setSendError("")
  }

  const closeForm = () => {
    if (isSending) return

    setFormType(null)
    setFormData(initialFormData)
    setSendSuccess(false)
    setSendError("")
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!formType) return

    setIsSending(true)
    setSendError("")
    setSendSuccess(false)

    const isReservation = formType === "reservation"

    const subject = isReservation
      ? "Reservatieaanvraag DAIVEXO Light Cubes"
      : "Offerteaanvraag DAIVEXO Light Cubes"

    const message = `
DAIVEXO LIGHT CUBES
${isReservation ? "RESERVATIEAANVRAAG" : "OFFERTEAANVRAAG"}

CONTACTGEGEVENS
Naam: ${formData.name}
E-mail: ${formData.email}
GSM-nummer: ${formData.phone}

ADRES KLANT
Straat en huisnummer: ${formData.street}
Postcode: ${formData.postalCode}
Gemeente: ${formData.city}

EVENT
Datum evenement: ${formData.eventDate}
Type evenement: ${formData.eventType || "Niet opgegeven"}

LIGHT CUBES
Formule: ${formData.rentalType}
Aantal Cubes: ${formData.quantity}
Gewenste kleur(en): ${formData.colors || "Nog te bespreken"}

LEVERING / OPSTELLING
${formData.deliveryAddress}

TOEGANKELIJKHEID
Klant bevestigt dat de volledige toegangsroute geschikt is voor een DAIVEXO Light Cube met een grondmaat van ongeveer 1,00 m x 1,20 m:
${formData.accessConfirmed ? "JA" : "NEE"}

Bijzonderheden toegangsroute:
${formData.accessNotes || "Geen bijzonderheden opgegeven"}

STROOMVOORZIENING
Geschikt 230V-stopcontact binnen bereik:
${formData.powerConfirmed ? "JA" : "NEE"}

OPMERKINGEN
${formData.remarks || "Geen bijkomende opmerkingen"}

---
Aanvraag verstuurd via www.daivexo.com
    `.trim()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject,
          message,
          source: isReservation
            ? "DAIVEXO Light Cubes - Reservatie"
            : "DAIVEXO Light Cubes - Offerte",
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "De aanvraag kon niet worden verstuurd."
        )
      }

      setSendSuccess(true)
      setFormData(initialFormData)
    } catch (error) {
      console.error(error)

      setSendError(
        "De aanvraag kon momenteel niet worden verstuurd. Probeer het later opnieuw of neem contact op via info@daivexo.com."
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div
            className="relative overflow-hidden bg-black border border-primary p-12 md:p-16 lg:p-20 text-center"
            style={{
              boxShadow:
                "0 0 10px rgba(212,175,55,0.16), inset 0 0 18px rgba(212,175,55,0.035)",
            }}
          >
            {/* Scherpe gouden accenten */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-36 bg-primary" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-36 bg-primary/70" />

            {/* Hoekdetails */}
            <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />

            <div className="relative">
              <span className="text-primary text-sm tracking-[0.35em] uppercase">
                DAIVEXO Light Cubes
              </span>

              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 mb-6 text-white text-balance">
                Klaar om je event te laten{" "}
                <span className="text-primary">
                  oplichten?
                </span>
              </h2>

              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-primary" />
              </div>

              <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl mx-auto">
                Reserveer jouw DAIVEXO Light Cubes voor je
                feest, evenement, horecazaak of bedrijf.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                <button
                  type="button"
                  onClick={() => openForm("reservation")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-black text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:brightness-110"
                >
                  <Calendar
                    className="h-5 w-5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  Reserveren
                </button>

                <button
                  type="button"
                  onClick={() => openForm("quote")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-black border border-primary text-primary text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary hover:text-black"
                >
                  <FileText
                    className="h-5 w-5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  Offerte aanvragen
                </button>
              </div>

              <p className="mt-10 text-base md:text-lg text-stone-400 leading-relaxed">
                Meerdere Cubes nodig? Vraag vrijblijvend naar
                de mogelijkheden.
              </p>
            </div>
          </div>

          {/* Brede gouden projectscheiding */}
          <div
            aria-hidden="true"
            className="mx-auto mt-24 flex w-full max-w-5xl items-center justify-center gap-5"
          >
            <div className="h-px flex-1 bg-primary" />
            <div className="h-3 w-3 rotate-45 bg-primary" />
            <div className="h-px flex-1 bg-primary" />
          </div>
        </div>
      </section>

      {/* FORMULIER POPUP */}
      {formType && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 overflow-y-auto p-4 md:p-8"
          onClick={closeForm}
          role="dialog"
          aria-modal="true"
          aria-label={
            formType === "reservation"
              ? "Reservatie DAIVEXO Light Cubes"
              : "Offerte DAIVEXO Light Cubes"
          }
        >
          <div
            className="relative mx-auto my-4 max-w-4xl border border-primary bg-black p-6 md:p-10 lg:p-12"
            style={{
              boxShadow:
                "0 0 14px rgba(212,175,55,0.18)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Hoekdetails */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <button
              type="button"
              onClick={closeForm}
              disabled={isSending}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-primary text-primary hover:bg-primary hover:text-black transition-colors disabled:opacity-40"
              aria-label="Formulier sluiten"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-10 px-8">
              <span className="text-primary text-xs tracking-[0.35em] uppercase">
                DAIVEXO Light Cubes
              </span>

              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-4">
                {formType === "reservation"
                  ? "Reservatie aanvragen"
                  : "Offerte aanvragen"}
              </h3>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-12 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-12 bg-primary" />
              </div>

              <p className="mt-6 text-stone-300 leading-7 max-w-2xl mx-auto">
                Vul onderstaande gegevens zo volledig mogelijk
                in. Zo kunnen we beschikbaarheid, levering en
                toegankelijkheid correct beoordelen.
              </p>
            </div>

            {sendSuccess ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-primary text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h4 className="mt-7 font-serif text-3xl md:text-4xl text-white">
                  Aanvraag ontvangen
                </h4>

                <p className="mx-auto mt-5 max-w-xl text-stone-300 leading-7">
                  Bedankt. Je{" "}
                  {formType === "reservation"
                    ? "reservatieaanvraag"
                    : "offerteaanvraag"}{" "}
                  voor de DAIVEXO Light Cubes werd succesvol
                  verzonden.
                </p>

                <p className="mx-auto mt-3 max-w-xl text-stone-400 leading-7">
                  We nemen zo snel mogelijk contact met je op
                  om beschikbaarheid, levering en verdere
                  afspraken te bevestigen.
                </p>

                <button
                  type="button"
                  onClick={closeForm}
                  className="mt-8 px-10 py-4 bg-primary text-black uppercase tracking-[0.18em] text-xs hover:brightness-110 transition-all"
                >
                  Sluiten
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* Contact */}
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">
                    Contactgegevens
                  </legend>

                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label="Naam en voornaam *">
                      <input
                        required
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) =>
                          updateField(
                            "name",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="E-mailadres *">
                      <input
                        required
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateField(
                            "email",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="GSM-nummer *">
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                        <input
                          required
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            updateField(
                              "phone",
                              e.target.value
                            )
                          }
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                    </FormField>
                  </div>
                </fieldset>

                {/* Adres */}
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">
                    Adres klant
                  </legend>

                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label="Straat en huisnummer *">
                      <input
                        required
                        type="text"
                        autoComplete="street-address"
                        value={formData.street}
                        onChange={(e) =>
                          updateField(
                            "street",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </FormField>

                    <div className="grid grid-cols-2 gap-4">
                      <FormField label="Postcode *">
                        <input
                          required
                          type="text"
                          autoComplete="postal-code"
                          value={formData.postalCode}
                          onChange={(e) =>
                            updateField(
                              "postalCode",
                              e.target.value
                            )
                          }
                          className={inputClass}
                        />
                      </FormField>

                      <FormField label="Gemeente *">
                        <input
                          required
                          type="text"
                          autoComplete="address-level2"
                          value={formData.city}
                          onChange={(e) =>
                            updateField(
                              "city",
                              e.target.value
                            )
                          }
                          className={inputClass}
                        />
                      </FormField>
                    </div>
                  </div>
                </fieldset>

                {/* Event */}
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">
                    Event &amp; Light Cubes
                  </legend>

                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label="Datum evenement *">
                      <input
                        required
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) =>
                          updateField(
                            "eventDate",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="Type evenement">
                      <select
                        value={formData.eventType}
                        onChange={(e) =>
                          updateField(
                            "eventType",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      >
                        <option value="">
                          Maak een keuze
                        </option>
                        <option value="Privéfeest">
                          Privéfeest
                        </option>
                        <option value="Bedrijfsevent">
                          Bedrijfsevent
                        </option>
                        <option value="Horeca">
                          Horeca
                        </option>
                        <option value="Festival / evenement">
                          Festival / evenement
                        </option>
                        <option value="Andere">
                          Andere
                        </option>
                      </select>
                    </FormField>

                    <FormField
                      label={
                        formType === "reservation"
                          ? "Huurformule *"
                          : "Gewenste formule *"
                      }
                    >
                      <select
                        required
                        value={formData.rentalType}
                        onChange={(e) =>
                          updateField(
                            "rentalType",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      >
                        <option value="">
                          Maak een keuze
                        </option>

                        <option value="1 dag">
                          1 dag — €45 per Cube
                        </option>

                        <option value="Weekend">
                          Weekend — €75 per Cube
                        </option>

                        {formType === "quote" && (
                          <>
                            <option value="Aankoop">
                              Aankoop
                            </option>
                            <option value="Offerte op maat">
                              Offerte op maat
                            </option>
                          </>
                        )}
                      </select>
                    </FormField>

                    <FormField label="Aantal Cubes *">
                      <input
                        required
                        min="1"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) =>
                          updateField(
                            "quantity",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="Gewenste kleur(en)">
                      <select
                        value={formData.colors}
                        onChange={(e) =>
                          updateField(
                            "colors",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      >
                        <option value="">
                          Nog te bespreken
                        </option>
                        <option value="Green LED">
                          Green LED
                        </option>
                        <option value="Yellow LED">
                          Yellow LED
                        </option>
                        <option value="Blue LED">
                          Blue LED
                        </option>
                        <option value="Warm White LED">
                          Warm White LED
                        </option>
                        <option value="Meerdere kleuren">
                          Meerdere kleuren
                        </option>
                      </select>
                    </FormField>
                  </div>
                </fieldset>

                {/* Levering */}
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">
                    Levering &amp; toegankelijkheid
                  </legend>

                  <FormField label="Leverings- / opstellingsadres *">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 h-4 w-4 text-primary" />

                      <textarea
                        required
                        rows={3}
                        value={formData.deliveryAddress}
                        onChange={(e) =>
                          updateField(
                            "deliveryAddress",
                            e.target.value
                          )
                        }
                        placeholder="Straat, huisnummer, postcode en gemeente"
                        className={`${inputClass} pl-11 resize-none`}
                      />
                    </div>
                  </FormField>

                  <div className="mt-5 border border-primary/25 bg-primary/[0.03] p-5">
                    <p className="text-white font-medium">
                      Belangrijk voor levering
                    </p>

                    <p className="mt-2 text-sm md:text-base text-stone-300 leading-7">
                      Een Light Cube heeft een grondmaat van
                      ongeveer{" "}
                      <span className="text-primary">
                        1,00 m × 1,20 m
                      </span>
                      . Controleer vooraf de volledige route
                      naar de opstellingsplaats: deuren,
                      poorten, gangen, doorgangen, liften,
                      hoeken en andere obstakels.
                    </p>
                  </div>

                  <label className="mt-5 flex items-start gap-4 cursor-pointer">
                    <input
                      required
                      type="checkbox"
                      checked={
                        formData.accessConfirmed
                      }
                      onChange={(e) =>
                        updateField(
                          "accessConfirmed",
                          e.target.checked
                        )
                      }
                      className="mt-1 h-5 w-5 accent-yellow-500"
                    />

                    <span className="text-sm md:text-base text-stone-200 leading-7">
                      Ik bevestig dat ik de volledige
                      toegangsroute heb gecontroleerd en dat er
                      voldoende ruimte is om de Light Cube tot
                      aan de opstellingsplaats te brengen. *
                    </span>
                  </label>

                  <div className="mt-5">
                    <FormField label="Bijzonderheden van de toegangsroute">
                      <textarea
                        rows={3}
                        value={formData.accessNotes}
                        onChange={(e) =>
                          updateField(
                            "accessNotes",
                            e.target.value
                          )
                        }
                        placeholder="Smalle deur, lift, trap, poort, scherpe bocht, ondergrond..."
                        className={`${inputClass} resize-none`}
                      />
                    </FormField>
                  </div>

                  <label className="mt-5 flex items-start gap-4 cursor-pointer">
                    <input
                      required
                      type="checkbox"
                      checked={formData.powerConfirmed}
                      onChange={(e) =>
                        updateField(
                          "powerConfirmed",
                          e.target.checked
                        )
                      }
                      className="mt-1 h-5 w-5 accent-yellow-500"
                    />

                    <span className="text-sm md:text-base text-stone-200 leading-7">
                      Er is een geschikt 230V-stopcontact
                      beschikbaar binnen bereik van de
                      opstellingsplaats. *
                    </span>
                  </label>
                </fieldset>

                {/* Opmerkingen */}
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">
                    Extra informatie
                  </legend>

                  <FormField label="Opmerkingen of bijzondere wensen">
                    <textarea
                      rows={4}
                      value={formData.remarks}
                      onChange={(e) =>
                        updateField(
                          "remarks",
                          e.target.value
                        )
                      }
                      placeholder="Vermeld hier alle informatie die voor de aanvraag belangrijk kan zijn."
                      className={`${inputClass} resize-none`}
                    />
                  </FormField>
                </fieldset>

                {/* Info */}
                <div className="border-t border-primary/25 pt-7">
                  <p className="text-sm text-stone-400 leading-7">
                    De aanvraag is pas definitief na
                    bevestiging door DAIVEXO. Beschikbaarheid,
                    transport, bereikbaarheid en eventuele
                    bijkomende voorwaarden worden na ontvangst
                    gecontroleerd.
                  </p>
                </div>

                {sendError && (
                  <div className="border border-red-500/40 bg-red-500/5 p-4">
                    <p className="text-sm text-red-300 leading-6">
                      {sendError}
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    type="button"
                    onClick={closeForm}
                    disabled={isSending}
                    className="px-8 py-4 border border-stone-700 text-stone-300 uppercase tracking-[0.18em] text-xs hover:border-primary hover:text-primary transition-colors disabled:opacity-40"
                  >
                    Annuleren
                  </button>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black uppercase tracking-[0.18em] text-xs hover:brightness-110 transition-all disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Mail className="h-4 w-4" />

                    {isSending
                      ? "Aanvraag verzenden..."
                      : formType === "reservation"
                        ? "Reservatieaanvraag versturen"
                        : "Offerteaanvraag versturen"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

const inputClass =
  "w-full border border-stone-700 bg-black px-4 py-3.5 text-white placeholder:text-stone-600 outline-none transition-colors focus:border-primary"

function FormField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-stone-300">
        {label}
      </span>
      {children}
    </label>
  )
}