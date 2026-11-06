"use client"

import { FormEvent, useEffect, useState } from "react"
import { Calendar, CheckCircle2, FileText, Mail, MapPin, Phone, X } from "lucide-react"

type Language = "nl" | "en" | "fr" | "de"
const isLanguage = (value: string | null): value is Language => value === "nl" || value === "en" || value === "fr" || value === "de"

type FormType = "reservation" | "quote" | null

type FormData = {
  name: string
  email: string
  phone: string
  street: string
  postalCode: string
  city: string
  eventDate: string
  endDate: string
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
  endDate: "",
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

const formatDate = (date: string) => {
  if (!date) return ""

  const [year, month, day] = date.split("-")

  if (!year || !month || !day) return date

  return `${day}/${month}/${year}`
}

const translations = {
  "nl": {
    "ctaTitle": "Klaar om je event te laten oplichten?",
    "ctaIntro": "Reserveer jouw DAIVEXO Light Cubes voor je feest, evenement, horecazaak of bedrijf.",
    "ctaNote": "Meerdere Cubes nodig? Vraag vrijblijvend naar de mogelijkheden.",
    "reserve": "Reserveren",
    "quote": "Offerte aanvragen",
    "reservationTitle": "Reservatie aanvragen",
    "quoteTitle": "Offerte aanvragen",
    "intro": "Vul onderstaande gegevens zo volledig mogelijk in. Zo kunnen we beschikbaarheid, levering en toegankelijkheid correct beoordelen.",
    "contact": "Contactgegevens",
    "name": "Naam en voornaam *",
    "email": "E-mailadres *",
    "phone": "GSM-nummer *",
    "customerAddress": "Adres klant",
    "street": "Straat en huisnummer *",
    "postcode": "Postcode *",
    "city": "Gemeente *",
    "eventSection": "Event & Light Cubes",
    "eventDate": "Datum evenement *",
    "eventType": "Type evenement",
    "choose": "Maak een keuze",
    "private": "Privéfeest",
    "corporate": "Bedrijfsevent",
    "hospitality": "Horeca",
    "festival": "Festival / evenement",
    "other": "Andere",
    "rentalType": "Huurformule *",
    "desiredType": "Gewenste formule *",
    "oneDay": "1 dag — €59,95 per Cube",
    "multiDay": "Meerdere dagen — €59,95 + €29,95 per extra dag",
    "weekend": "Weekend (za–ma) — €79,95 per Cube",
    "purchase": "Aankoop",
    "customQuote": "Offerte op maat",
    "endDate": "Einddatum huur *",
    "quantity": "Aantal Cubes *",
    "colors": "Gewenste kleur(en)",
    "colorsLater": "Nog te bespreken",
    "multipleColors": "Meerdere kleuren",
    "deliverySection": "Levering & toegankelijkheid",
    "deliveryAddress": "Leverings- / opstellingsadres *",
    "deliveryPlaceholder": "Straat, huisnummer, postcode en gemeente",
    "deliveryImportant": "Belangrijk voor levering",
    "deliveryInfo": "Een Light Cube heeft een grondmaat van ongeveer 1,00 m × 1,20 m. Controleer vooraf de volledige route naar de opstellingsplaats: deuren, poorten, gangen, doorgangen, liften, hoeken en andere obstakels.",
    "accessConfirm": "Ik bevestig dat ik de volledige toegangsroute heb gecontroleerd en dat er voldoende ruimte is om de Light Cube tot aan de opstellingsplaats te brengen. *",
    "accessNotes": "Bijzonderheden van de toegangsroute",
    "accessPlaceholder": "Smalle deur, lift, trap, poort, scherpe bocht, ondergrond...",
    "powerConfirm": "Er is een geschikt 230V-stopcontact beschikbaar binnen bereik van de opstellingsplaats. *",
    "extra": "Extra informatie",
    "remarks": "Opmerkingen of bijzondere wensen",
    "remarksPlaceholder": "Vermeld hier alle informatie die voor de aanvraag belangrijk kan zijn.",
    "pricingTitle": "Huurprijzen en voorwaarden",
    "vatInfo": "Alle vermelde huurprijzen zijn inclusief 21% btw.",
    "deliveryCostInfo": "Leveringskosten worden afzonderlijk berekend volgens de afstand en vooraf meegedeeld.",
    "depositInfo": "Waarborg: € 25 per Light Cube. De waarborg wordt volledig terugbetaald wanneer de Light Cubes na de verhuur onbeschadigd en compleet worden teruggegeven.",
    "conditions": "De aanvraag is pas definitief na bevestiging door DAIVEXO. Beschikbaarheid, transport, bereikbaarheid en eventuele bijkomende voorwaarden worden na ontvangst gecontroleerd.",
    "cancel": "Annuleren",
    "sending": "Aanvraag verzenden...",
    "sendReservation": "Reservatieaanvraag versturen",
    "sendQuote": "Offerteaanvraag versturen",
    "successTitle": "Aanvraag ontvangen",
    "successReservation": "Bedankt. Je reservatieaanvraag voor de DAIVEXO Light Cubes werd succesvol verzonden.",
    "successQuote": "Bedankt. Je offerteaanvraag voor de DAIVEXO Light Cubes werd succesvol verzonden.",
    "successInfo": "We nemen zo snel mogelijk contact met je op om beschikbaarheid, levering en verdere afspraken te bevestigen.",
    "close": "Sluiten",
    "error": "De aanvraag kon momenteel niet worden verstuurd. Probeer het later opnieuw of neem contact op via info@daivexo.com.",
    "estimateTitle": "Jouw voorlopige kostenoverzicht",
    "estimateRent": "Huurprijs (incl. 21% btw)",
    "estimateDeposit": "Terugbetaalbare waarborg",
    "estimateTotal": "Voorlopig totaal",
    "estimateDelivery": "Leveringskosten zijn niet inbegrepen en worden vooraf meegedeeld.",
    "estimateDates": "Selecteer een geldige start- en einddatum (minstens 2 huurdagen).",
    "estimateSelect": "Kies een huurformule en vul een geldig aantal Cubes in.",
    "estimateDisclaimer": "Dit is een prijsindicatie, geen definitieve reservatie.",
  },
  "en": {
    "ctaTitle": "Ready to light up your event?",
    "ctaIntro": "Book DAIVEXO Light Cubes for your party, event, hospitality venue or business.",
    "ctaNote": "Need several Cubes? Ask us about the options without obligation.",
    "reserve": "Reserve",
    "quote": "Request a quote",
    "reservationTitle": "Request a reservation",
    "quoteTitle": "Request a quote",
    "intro": "Please complete the details below as fully as possible so we can assess availability, delivery and access.",
    "contact": "Contact details",
    "name": "Full name *",
    "email": "Email address *",
    "phone": "Phone number *",
    "customerAddress": "Customer address",
    "street": "Street and house number *",
    "postcode": "Postal code *",
    "city": "Town / city *",
    "eventSection": "Event & Light Cubes",
    "eventDate": "Event date *",
    "eventType": "Event type",
    "choose": "Select an option",
    "private": "Private party",
    "corporate": "Corporate event",
    "hospitality": "Hospitality",
    "festival": "Festival / event",
    "other": "Other",
    "rentalType": "Rental option *",
    "desiredType": "Preferred option *",
    "oneDay": "1 day — €59.95 per Cube",
    "multiDay": "Multiple days — €59.95 + €29.95 per extra day",
    "weekend": "Weekend (Sat–Mon) — €79.95 per Cube",
    "purchase": "Purchase",
    "customQuote": "Custom quote",
    "endDate": "Rental end date *",
    "quantity": "Number of Cubes *",
    "colors": "Preferred colour(s)",
    "colorsLater": "To be discussed",
    "multipleColors": "Multiple colours",
    "deliverySection": "Delivery & accessibility",
    "deliveryAddress": "Delivery / setup address *",
    "deliveryPlaceholder": "Street, house number, postal code and city",
    "deliveryImportant": "Important for delivery",
    "deliveryInfo": "A Light Cube has a footprint of approximately 1.00 m × 1.20 m. Check the entire access route to the setup area, including doors, gates, corridors, lifts, corners and other obstacles.",
    "accessConfirm": "I confirm that I have checked the entire access route and that there is sufficient space to move the Light Cube to its setup location. *",
    "accessNotes": "Access route details",
    "accessPlaceholder": "Narrow doorway, lift, stairs, gate, tight corner, ground surface...",
    "powerConfirm": "A suitable 230V power socket is available within reach of the setup location. *",
    "extra": "Additional information",
    "remarks": "Comments or special requests",
    "remarksPlaceholder": "Add any information that may be relevant to your request.",
    "pricingTitle": "Rental prices and conditions",
    "vatInfo": "All listed rental prices include 21% VAT.",
    "deliveryCostInfo": "Delivery costs are calculated separately based on distance and communicated in advance.",
    "depositInfo": "Security deposit: €25 per Light Cube. The deposit is refunded in full when the Light Cubes are returned undamaged and complete after the rental.",
    "conditions": "Your request is not confirmed until DAIVEXO accepts it. Availability, transport, access and any additional conditions will be checked after submission.",
    "cancel": "Cancel",
    "sending": "Sending request...",
    "sendReservation": "Send reservation request",
    "sendQuote": "Send quote request",
    "successTitle": "Request received",
    "successReservation": "Thank you. Your DAIVEXO Light Cubes reservation request has been sent successfully.",
    "successQuote": "Thank you. Your DAIVEXO Light Cubes quote request has been sent successfully.",
    "successInfo": "We will contact you as soon as possible to confirm availability, delivery and the next steps.",
    "close": "Close",
    "error": "Your request could not be sent. Please try again later or contact info@daivexo.com.",
    "estimateTitle": "Your estimated cost breakdown",
    "estimateRent": "Rental price (incl. 21% VAT)",
    "estimateDeposit": "Refundable deposit",
    "estimateTotal": "Estimated total",
    "estimateDelivery": "Delivery costs are not included and will be communicated in advance.",
    "estimateDates": "Select valid start and end dates (at least 2 rental days).",
    "estimateSelect": "Choose a rental option and enter a valid number of Cubes.",
    "estimateDisclaimer": "This is an estimate, not a confirmed booking.",
  },
  "fr": {
    "ctaTitle": "Prêt à illuminer votre événement ?",
    "ctaIntro": "Réservez vos Light Cubes DAIVEXO pour votre fête, événement, établissement ou entreprise.",
    "ctaNote": "Besoin de plusieurs Cubes ? Demandez-nous les possibilités sans engagement.",
    "reserve": "Réserver",
    "quote": "Demander un devis",
    "reservationTitle": "Demander une réservation",
    "quoteTitle": "Demander un devis",
    "intro": "Veuillez compléter les informations ci-dessous afin que nous puissions vérifier la disponibilité, la livraison et l’accès.",
    "contact": "Coordonnées",
    "name": "Nom et prénom *",
    "email": "Adresse e-mail *",
    "phone": "Numéro de téléphone *",
    "customerAddress": "Adresse du client",
    "street": "Rue et numéro *",
    "postcode": "Code postal *",
    "city": "Ville / commune *",
    "eventSection": "Événement & Light Cubes",
    "eventDate": "Date de l’événement *",
    "eventType": "Type d’événement",
    "choose": "Faites votre choix",
    "private": "Fête privée",
    "corporate": "Événement d’entreprise",
    "hospitality": "Horeca",
    "festival": "Festival / événement",
    "other": "Autre",
    "rentalType": "Formule de location *",
    "desiredType": "Formule souhaitée *",
    "oneDay": "1 jour — 59,95 € par Cube",
    "multiDay": "Plusieurs jours — 59,95 € + 29,95 € par jour supplémentaire",
    "weekend": "Week-end (sam.–lun.) — 79,95 € par Cube",
    "purchase": "Achat",
    "customQuote": "Devis personnalisé",
    "endDate": "Date de fin de location *",
    "quantity": "Nombre de Cubes *",
    "colors": "Couleur(s) souhaitée(s)",
    "colorsLater": "À définir",
    "multipleColors": "Plusieurs couleurs",
    "deliverySection": "Livraison & accessibilité",
    "deliveryAddress": "Adresse de livraison / installation *",
    "deliveryPlaceholder": "Rue, numéro, code postal et ville",
    "deliveryImportant": "Important pour la livraison",
    "deliveryInfo": "Un Light Cube mesure environ 1,00 m × 1,20 m au sol. Vérifiez tout le trajet jusqu’au lieu d’installation : portes, portails, couloirs, ascenseurs, virages et autres obstacles.",
    "accessConfirm": "Je confirme avoir vérifié l’ensemble du trajet d’accès et disposer de suffisamment d’espace pour acheminer le Light Cube jusqu’à son emplacement. *",
    "accessNotes": "Particularités du trajet d’accès",
    "accessPlaceholder": "Porte étroite, ascenseur, escalier, portail, virage serré, sol...",
    "powerConfirm": "Une prise électrique 230 V adaptée est disponible à proximité du lieu d’installation. *",
    "extra": "Informations complémentaires",
    "remarks": "Remarques ou demandes particulières",
    "remarksPlaceholder": "Indiquez toute information utile à votre demande.",
    "pricingTitle": "Tarifs et conditions de location",
    "vatInfo": "Tous les tarifs de location indiqués comprennent 21 % de TVA.",
    "deliveryCostInfo": "Les frais de livraison sont calculés séparément en fonction de la distance et communiqués à l’avance.",
    "depositInfo": "Caution : 25 € par Light Cube. La caution est intégralement remboursée lorsque les Light Cubes sont restitués complets et sans dommages après la location.",
    "conditions": "La demande ne devient définitive qu’après confirmation par DAIVEXO. La disponibilité, le transport, l’accès et les éventuelles conditions supplémentaires seront vérifiés.",
    "cancel": "Annuler",
    "sending": "Envoi de la demande...",
    "sendReservation": "Envoyer la demande de réservation",
    "sendQuote": "Envoyer la demande de devis",
    "successTitle": "Demande reçue",
    "successReservation": "Merci. Votre demande de réservation pour les Light Cubes DAIVEXO a bien été envoyée.",
    "successQuote": "Merci. Votre demande de devis pour les Light Cubes DAIVEXO a bien été envoyée.",
    "successInfo": "Nous vous contacterons dès que possible pour confirmer la disponibilité, la livraison et les modalités.",
    "close": "Fermer",
    "error": "Votre demande n’a pas pu être envoyée. Réessayez plus tard ou contactez info@daivexo.com.",
    "estimateTitle": "Votre récapitulatif estimatif",
    "estimateRent": "Location (TVA de 21 % incluse)",
    "estimateDeposit": "Caution remboursable",
    "estimateTotal": "Total estimé",
    "estimateDelivery": "Les frais de livraison ne sont pas inclus et seront communiqués à l’avance.",
    "estimateDates": "Choisissez des dates de début et de fin valides (au moins 2 jours de location).",
    "estimateSelect": "Choisissez une formule et un nombre de Cubes valide.",
    "estimateDisclaimer": "Il s’agit d’une estimation, pas d’une réservation confirmée.",
  },
  "de": {
    "ctaTitle": "Bereit, Ihr Event zum Leuchten zu bringen?",
    "ctaIntro": "Reservieren Sie DAIVEXO Light Cubes für Ihre Feier, Veranstaltung, Gastronomie oder Ihr Unternehmen.",
    "ctaNote": "Sie benötigen mehrere Cubes? Fragen Sie unverbindlich nach den Möglichkeiten.",
    "reserve": "Reservieren",
    "quote": "Angebot anfordern",
    "reservationTitle": "Reservierung anfragen",
    "quoteTitle": "Angebot anfordern",
    "intro": "Bitte füllen Sie die folgenden Angaben möglichst vollständig aus, damit wir Verfügbarkeit, Lieferung und Zugang prüfen können.",
    "contact": "Kontaktdaten",
    "name": "Vor- und Nachname *",
    "email": "E-Mail-Adresse *",
    "phone": "Telefonnummer *",
    "customerAddress": "Kundenadresse",
    "street": "Straße und Hausnummer *",
    "postcode": "Postleitzahl *",
    "city": "Ort / Stadt *",
    "eventSection": "Veranstaltung & Light Cubes",
    "eventDate": "Veranstaltungsdatum *",
    "eventType": "Veranstaltungsart",
    "choose": "Bitte auswählen",
    "private": "Private Feier",
    "corporate": "Firmenveranstaltung",
    "hospitality": "Gastronomie",
    "festival": "Festival / Veranstaltung",
    "other": "Sonstiges",
    "rentalType": "Mietoption *",
    "desiredType": "Gewünschte Option *",
    "oneDay": "1 Tag — 59,95 € pro Cube",
    "multiDay": "Mehrere Tage — 59,95 € + 29,95 € je weiterem Tag",
    "weekend": "Wochenende (Sa–Mo) — 79,95 € pro Cube",
    "purchase": "Kauf",
    "customQuote": "Individuelles Angebot",
    "endDate": "Mietende *",
    "quantity": "Anzahl Cubes *",
    "colors": "Gewünschte Farbe(n)",
    "colorsLater": "Noch zu besprechen",
    "multipleColors": "Mehrere Farben",
    "deliverySection": "Lieferung & Zugänglichkeit",
    "deliveryAddress": "Liefer- / Aufstelladresse *",
    "deliveryPlaceholder": "Straße, Hausnummer, Postleitzahl und Ort",
    "deliveryImportant": "Wichtig für die Lieferung",
    "deliveryInfo": "Ein Light Cube benötigt eine Grundfläche von etwa 1,00 m × 1,20 m. Prüfen Sie den gesamten Zugangsweg zum Aufstellort: Türen, Tore, Flure, Aufzüge, Kurven und andere Hindernisse.",
    "accessConfirm": "Ich bestätige, dass ich den gesamten Zugangsweg geprüft habe und ausreichend Platz vorhanden ist, um den Light Cube zum Aufstellort zu bringen. *",
    "accessNotes": "Besonderheiten des Zugangswegs",
    "accessPlaceholder": "Schmale Tür, Aufzug, Treppe, Tor, enge Kurve, Bodenbelag...",
    "powerConfirm": "Eine geeignete 230-V-Steckdose ist in Reichweite des Aufstellorts vorhanden. *",
    "extra": "Zusätzliche Informationen",
    "remarks": "Anmerkungen oder besondere Wünsche",
    "remarksPlaceholder": "Geben Sie hier alle für Ihre Anfrage wichtigen Informationen an.",
    "pricingTitle": "Mietpreise und Bedingungen",
    "vatInfo": "Alle angegebenen Mietpreise enthalten 21 % MwSt.",
    "deliveryCostInfo": "Die Lieferkosten werden je nach Entfernung gesondert berechnet und im Voraus mitgeteilt.",
    "depositInfo": "Kaution: 25 € pro Light Cube. Die Kaution wird vollständig zurückerstattet, wenn die Light Cubes nach der Miete unbeschädigt und vollständig zurückgegeben werden.",
    "conditions": "Die Anfrage ist erst nach Bestätigung durch DAIVEXO verbindlich. Verfügbarkeit, Transport, Zugang und zusätzliche Bedingungen werden nach Eingang geprüft.",
    "cancel": "Abbrechen",
    "sending": "Anfrage wird gesendet...",
    "sendReservation": "Reservierungsanfrage senden",
    "sendQuote": "Angebotsanfrage senden",
    "successTitle": "Anfrage erhalten",
    "successReservation": "Vielen Dank. Ihre Reservierungsanfrage für DAIVEXO Light Cubes wurde erfolgreich gesendet.",
    "successQuote": "Vielen Dank. Ihre Angebotsanfrage für DAIVEXO Light Cubes wurde erfolgreich gesendet.",
    "successInfo": "Wir melden uns schnellstmöglich, um Verfügbarkeit, Lieferung und weitere Einzelheiten zu bestätigen.",
    "close": "Schließen",
    "error": "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie info@daivexo.com.",
    "estimateTitle": "Ihre voraussichtliche Kostenübersicht",
    "estimateRent": "Mietpreis (inkl. 21 % MwSt.)",
    "estimateDeposit": "Erstattbare Kaution",
    "estimateTotal": "Voraussichtlicher Gesamtbetrag",
    "estimateDelivery": "Lieferkosten sind nicht enthalten und werden vorab mitgeteilt.",
    "estimateDates": "Wählen Sie gültige Anfangs- und Enddaten (mindestens 2 Miettage).",
    "estimateSelect": "Wählen Sie eine Mietoption und eine gültige Anzahl Cubes.",
    "estimateDisclaimer": "Dies ist eine Schätzung, keine bestätigte Buchung."
  }
} as const

// Monetary calculations use integer cents to avoid floating-point rounding errors.
const rentalEstimate = (data: FormData) => {
  const quantity = Number(data.quantity)
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 10000) return null
  let pricePerCubeCents: number
  if (data.rentalType === "1 dag") pricePerCubeCents = 5995
  else if (data.rentalType === "Weekend") pricePerCubeCents = 7995
  else if (data.rentalType === "Meerdere dagen") {
    if (!data.eventDate || !data.endDate) return null
    const start = Date.parse(`${data.eventDate}T00:00:00Z`)
    const end = Date.parse(`${data.endDate}T00:00:00Z`)
    if (!Number.isFinite(start) || !Number.isFinite(end)) return null
    const days = Math.round((end - start) / 86400000) + 1
    if (days < 2) return null
    pricePerCubeCents = 5995 + (days - 1) * 2995
  } else return null // Purchase and custom quotes have no fixed rental price.
  const rentCents = quantity * pricePerCubeCents
  const depositCents = quantity * 2500
  return { rentCents, depositCents, totalCents: rentCents + depositCents }
}

const formatEuro = (cents: number, language: Language) =>
  new Intl.NumberFormat(({ nl: "nl-BE", en: "en-GB", fr: "fr-BE", de: "de-DE" })[language], {
    style: "currency", currency: "EUR"
  }).format(cents / 100)

const inputClass = "w-full border border-stone-700 bg-black px-4 py-3.5 text-white placeholder:text-stone-600 outline-none transition-colors focus:border-primary"

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm text-stone-300">{label}</span>{children}</label>
}

export function LightCubesCtaSection() {
  const [language, setLanguage] = useState<Language>("nl")
  const [formType, setFormType] = useState<FormType>(null)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSending, setIsSending] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)
  const [sendError, setSendError] = useState("")
  const t = translations[language]
  const estimate = rentalEstimate(formData)

  useEffect(() => {
    const url = new URL(window.location.href)
    const explicitLanguage = url.searchParams.get("lang")
    let detected: Language = "nl"
    if (isLanguage(explicitLanguage)) {
      detected = explicitLanguage
    } else {
      // The international pages link back to the homepage to open this popup.
      // The referrer retains the visitor's source language on normal navigation.
      let previousPath = ""
      try { previousPath = new URL(document.referrer).pathname } catch { /* no referrer */ }
      const match = previousPath.match(/^\/(en|fr|de)(?:\/|$)/)
      if (match && isLanguage(match[1])) detected = match[1]
    }
    setLanguage(detected)
    const requested = url.searchParams.get("lightcubes")
    if (requested === "reservation" || requested === "quote") {
      setFormType(requested)
      setFormData(initialFormData)
      setSendSuccess(false)
      setSendError("")
      url.searchParams.delete("lightcubes")
      // Keep the explicit language in the URL so refresh and future CTA clicks remain consistent.
      window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash)
    }
  }, [])

  useEffect(() => {
    if (!formType) return
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape" && !isSending) closeForm() }
    document.addEventListener("keydown", onEscape)
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onEscape); document.body.style.overflow = oldOverflow }
  }, [formType, isSending])

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(previous => ({ ...previous, [field]: value }))
  }
  const updateRentalType = (value: string) => {
    setFormData(previous => ({ ...previous, rentalType: value, endDate: value === "Meerdere dagen" ? previous.endDate : "" }))
  }
  const openForm = (type: Exclude<FormType, null>) => {
    setFormType(type); setFormData(initialFormData); setSendSuccess(false); setSendError("")
  }
  const closeForm = () => {
    if (isSending) return
    setFormType(null); setFormData(initialFormData); setSendSuccess(false); setSendError("")
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formType) return
    const currentEstimate = rentalEstimate(formData)
    if (formData.rentalType === "Meerdere dagen" && !currentEstimate) {
      setSendError(t.estimateDates)
      return
    }
    setIsSending(true); setSendError(""); setSendSuccess(false)
    const isReservation = formType === "reservation"
    // Keep the original Dutch email structure and canonical option values.
    // This preserves existing downstream handling regardless of the visitor's language.
    const subject = isReservation ? "Reservatieaanvraag DAIVEXO Light Cubes" : "Offerteaanvraag DAIVEXO Light Cubes"
    const message = `
DAIVEXO LIGHT CUBES
${isReservation ? "RESERVATIEAANVRAAG" : "OFFERTEAANVRAAG"}
Taal bezoeker: ${language.toUpperCase()}

CONTACTGEGEVENS
Naam: ${formData.name}
E-mail: ${formData.email}
GSM-nummer: ${formData.phone}

ADRES KLANT
Straat en huisnummer: ${formData.street}
Postcode: ${formData.postalCode}
Gemeente: ${formData.city}

EVENT
Startdatum: ${formatDate(formData.eventDate)}
${formData.rentalType === "Meerdere dagen" ? `Einddatum: ${formatDate(formData.endDate)}` : ""}
Type evenement: ${formData.eventType || "Niet opgegeven"}

LIGHT CUBES
Formule: ${formData.rentalType}
Aantal Cubes: ${formData.quantity}
Gewenste kleur(en): ${formData.colors || "Nog te bespreken"}

VOORLOPIGE KOSTENRAMING
${currentEstimate ? `Huurprijs incl. 21% btw: ${formatEuro(currentEstimate.rentCents, "nl")}
Terugbetaalbare waarborg: ${formatEuro(currentEstimate.depositCents, "nl")}
Voorlopig totaal exclusief levering: ${formatEuro(currentEstimate.totalCents, "nl")}` : "Prijs op aanvraag (aankoop / offerte op maat)"}
Leveringskosten: afzonderlijk volgens afstand, vooraf mee te delen.
De reservatie is pas definitief na bevestiging door DAIVEXO.

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
        method: "POST", headers: { "Content-Type": "application/json" },
      
body: JSON.stringify({
  name: formData.name,
  email: formData.email,
  subject,
  message,
  language,
  source: isReservation
    ? "DAIVEXO Light Cubes - Reservatie"
    : "DAIVEXO Light Cubes - Offerte",
}),
  
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || "Sending failed")
      setSendSuccess(true); setFormData(initialFormData)
    } catch (error) {
      console.error(error)
      setSendError(translations[language].error)
    } finally { setIsSending(false) }
  }

  return (
    <>
      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden bg-black border border-primary p-12 md:p-16 lg:p-20 text-center"
            style={{ boxShadow: "0 0 10px rgba(212,175,55,0.16), inset 0 0 18px rgba(212,175,55,0.035)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-36 bg-primary" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-36 bg-primary/70" />
            <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
            <div className="relative">
              <span className="text-primary text-sm tracking-[0.35em] uppercase">DAIVEXO Light Cubes</span>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 mb-6 text-white text-balance">{t.ctaTitle}</h2>
              <div className="flex items-center justify-center gap-4 mb-8"><div className="h-px w-16 bg-primary"/><div className="h-2 w-2 rotate-45 bg-primary"/><div className="h-px w-16 bg-primary"/></div>
              <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl mx-auto">{t.ctaIntro}</p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                <button type="button" onClick={() => openForm("reservation")} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-black text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:brightness-110"><Calendar className="h-5 w-5" strokeWidth={1.5} aria-hidden="true"/>{t.reserve}</button>
                <button type="button" onClick={() => openForm("quote")} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-black border border-primary text-primary text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary hover:text-black"><FileText className="h-5 w-5" strokeWidth={1.5} aria-hidden="true"/>{t.quote}</button>
              </div>
              <p className="mt-10 text-base md:text-lg text-stone-400 leading-relaxed">{t.ctaNote}</p>
            </div>
          </div>
          <div aria-hidden="true" className="mx-auto mt-24 flex w-full max-w-5xl items-center justify-center gap-5"><div className="h-px flex-1 bg-primary"/><div className="h-3 w-3 rotate-45 bg-primary"/><div className="h-px flex-1 bg-primary"/></div>
        </div>
      </section>

      {formType && (
        <div className="fixed inset-0 z-[9999] bg-black/95 overflow-y-auto p-4 md:p-8" onClick={closeForm} role="dialog" aria-modal="true" aria-label={formType === "reservation" ? t.reservationTitle : t.quoteTitle}>
          <div className="relative mx-auto my-4 max-w-4xl border border-primary bg-black p-6 md:p-10 lg:p-12" style={{ boxShadow: "0 0 14px rgba(212,175,55,0.18)" }} onClick={event => event.stopPropagation()}>
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
            <button type="button" onClick={closeForm} disabled={isSending} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-primary text-primary hover:bg-primary hover:text-black transition-colors disabled:opacity-40" aria-label={t.close}><X className="h-5 w-5" /></button>
            <div className="text-center mb-10 px-8">
              <span className="text-primary text-xs tracking-[0.35em] uppercase">DAIVEXO Light Cubes</span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-4">{formType === "reservation" ? t.reservationTitle : t.quoteTitle}</h3>
              <div className="flex items-center justify-center gap-4 mt-6"><div className="h-px w-12 bg-primary"/><div className="h-2 w-2 rotate-45 bg-primary"/><div className="h-px w-12 bg-primary"/></div>
              <p className="mt-6 text-stone-300 leading-7 max-w-2xl mx-auto">{t.intro}</p>
              <div className="mt-5 flex justify-center gap-2 flex-wrap" aria-label="Language / Langue / Sprache / Taal">
                {(["nl", "en", "fr", "de"] as const).map(lang => (
                  <button key={lang} type="button" onClick={() => setLanguage(lang)} disabled={isSending} aria-pressed={language === lang}
                    className={`border px-3 py-1 text-xs uppercase tracking-wider transition-colors ${language === lang ? "border-primary bg-primary text-black" : "border-stone-600 text-stone-300 hover:border-primary"}`}>{lang}</button>
                ))}
              </div>
            </div>
            {sendSuccess ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-primary text-primary"><CheckCircle2 className="h-8 w-8"/></div>
                <h4 className="mt-7 font-serif text-3xl md:text-4xl text-white">{t.successTitle}</h4>
                <p className="mx-auto mt-5 max-w-xl text-stone-300 leading-7">{formType === "reservation" ? t.successReservation : t.successQuote}</p>
                <p className="mx-auto mt-3 max-w-xl text-stone-400 leading-7">{t.successInfo}</p>
                <button type="button" onClick={closeForm} className="mt-8 px-10 py-4 bg-primary text-black uppercase tracking-[0.18em] text-xs hover:brightness-110 transition-all">{t.close}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">{t.contact}</legend>
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label={t.name}><input required type="text" autoComplete="name" value={formData.name} onChange={e => updateField("name", e.target.value)} className={inputClass}/></FormField>
                    <FormField label={t.email}><input required type="email" autoComplete="email" value={formData.email} onChange={e => updateField("email", e.target.value)} className={inputClass}/></FormField>
                    <FormField label={t.phone}><div className="relative"><Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"/><input required type="tel" autoComplete="tel" value={formData.phone} onChange={e => updateField("phone", e.target.value)} className={`${inputClass} pl-11`}/></div></FormField>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">{t.customerAddress}</legend>
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label={t.street}><input required type="text" autoComplete="street-address" value={formData.street} onChange={e => updateField("street", e.target.value)} className={inputClass}/></FormField>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField label={t.postcode}><input required type="text" autoComplete="postal-code" value={formData.postalCode} onChange={e => updateField("postalCode", e.target.value)} className={inputClass}/></FormField>
                      <FormField label={t.city}><input required type="text" autoComplete="address-level2" value={formData.city} onChange={e => updateField("city", e.target.value)} className={inputClass}/></FormField>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">{t.eventSection}</legend>
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label={t.eventDate}><input required type="date" value={formData.eventDate} onChange={e => { const date=e.target.value; setFormData(prev=>({...prev,eventDate:date,endDate:prev.endDate && prev.endDate < date ? "" : prev.endDate})) }} className={inputClass}/></FormField>
                    <FormField label={t.eventType}><select value={formData.eventType} onChange={e => updateField("eventType",e.target.value)} className={inputClass}>
                      <option value="">{t.choose}</option><option value="Privéfeest">{t.private}</option><option value="Bedrijfsevent">{t.corporate}</option><option value="Horeca">{t.hospitality}</option><option value="Festival / evenement">{t.festival}</option><option value="Andere">{t.other}</option>
                    </select></FormField>
                    <FormField label={formType === "reservation" ? t.rentalType : t.desiredType}><select required value={formData.rentalType} onChange={e=>updateRentalType(e.target.value)} className={inputClass}>
                      <option value="">{t.choose}</option>
                      <option value="1 dag">{t.oneDay}</option>
                      <option value="Meerdere dagen">{t.multiDay}</option>
                      <option value="Weekend">{t.weekend}</option>
                      {formType === "quote" && <><option value="Aankoop">{t.purchase}</option><option value="Offerte op maat">{t.customQuote}</option></>}
                    </select></FormField>
                    {formData.rentalType === "Meerdere dagen" && <FormField label={t.endDate}><input required type="date" min={formData.eventDate ? new Date(Date.parse(`${formData.eventDate}T00:00:00Z`) + 86400000).toISOString().slice(0, 10) : undefined} value={formData.endDate} onChange={e=>updateField("endDate",e.target.value)} className={inputClass}/></FormField>}
                    <FormField label={t.quantity}><input required min="1" type="number" value={formData.quantity} onChange={e=>updateField("quantity",e.target.value)} className={inputClass}/></FormField>
                    <FormField label={t.colors}><select value={formData.colors} onChange={e=>updateField("colors",e.target.value)} className={inputClass}>
                      <option value="">{t.colorsLater}</option><option value="Green LED">Green LED</option><option value="Yellow LED">Yellow LED</option><option value="Blue LED">Blue LED</option><option value="Warm White LED">Warm White LED</option><option value="Meerdere kleuren">{t.multipleColors}</option>
                    </select></FormField>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">{t.deliverySection}</legend>
                  <FormField label={t.deliveryAddress}><div className="relative"><MapPin className="absolute left-4 top-4 h-4 w-4 text-primary"/><textarea required rows={3} value={formData.deliveryAddress} onChange={e=>updateField("deliveryAddress",e.target.value)} placeholder={t.deliveryPlaceholder} className={`${inputClass} pl-11 resize-none`}/></div></FormField>
                  <div className="mt-5 border border-primary/25 bg-primary/[0.03] p-5">
                    <p className="text-white font-medium">{t.deliveryImportant}</p><p className="mt-2 text-sm md:text-base text-stone-300 leading-7">{t.deliveryInfo}</p>
                  </div>
                  <label className="mt-5 flex items-start gap-4 cursor-pointer"><input required type="checkbox" checked={formData.accessConfirmed} onChange={e=>updateField("accessConfirmed",e.target.checked)} className="mt-1 h-5 w-5 accent-yellow-500"/><span className="text-sm md:text-base text-stone-200 leading-7">{t.accessConfirm}</span></label>
                  <div className="mt-5"><FormField label={t.accessNotes}><textarea rows={3} value={formData.accessNotes} onChange={e=>updateField("accessNotes",e.target.value)} placeholder={t.accessPlaceholder} className={`${inputClass} resize-none`}/></FormField></div>
                  <label className="mt-5 flex items-start gap-4 cursor-pointer"><input required type="checkbox" checked={formData.powerConfirmed} onChange={e=>updateField("powerConfirmed",e.target.checked)} className="mt-1 h-5 w-5 accent-yellow-500"/><span className="text-sm md:text-base text-stone-200 leading-7">{t.powerConfirm}</span></label>
                </fieldset>
                <fieldset><legend className="text-primary text-xs tracking-[0.3em] uppercase mb-5">{t.extra}</legend><FormField label={t.remarks}><textarea rows={4} value={formData.remarks} onChange={e=>updateField("remarks",e.target.value)} placeholder={t.remarksPlaceholder} className={`${inputClass} resize-none`}/></FormField></fieldset>
                 {formData.rentalType !== "Aankoop" && formData.rentalType !== "Offerte op maat" && (
                   <div className="border border-primary p-5 md:p-6 space-y-3" aria-live="polite">
                     <h4 className="text-primary font-medium text-lg">{t.estimateTitle}</h4>
                     {estimate ? (
                       <>
                         <div className="flex justify-between gap-4 text-stone-200"><span>{t.estimateRent}</span><strong>{formatEuro(estimate.rentCents, language)}</strong></div>
                         <div className="flex justify-between gap-4 text-stone-200"><span>{t.estimateDeposit}</span><strong>{formatEuro(estimate.depositCents, language)}</strong></div>
                         <div className="border-t border-primary/30 pt-3 flex justify-between gap-4 text-white"><strong>{t.estimateTotal}</strong><strong className="text-primary">{formatEuro(estimate.totalCents, language)}</strong></div>
                       </>
                     ) : <p className="text-stone-300">{formData.rentalType === "Meerdere dagen" ? t.estimateDates : t.estimateSelect}</p>}
                     <p className="text-sm text-stone-300">{t.estimateDelivery}</p>
                     <p className="text-sm text-stone-400">{t.estimateDisclaimer}</p>
                   </div>
                 )}
                 <div className="border border-primary/40 p-5 md:p-6 space-y-3" aria-label={t.pricingTitle}>
                   <h4 className="text-primary font-medium text-lg">{t.pricingTitle}</h4>
                   <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-stone-200 leading-7">
                     <li>{t.oneDay}</li>
                     <li>{t.multiDay}</li>
                     <li>{t.weekend}</li>
                   </ul>
                   <p className="text-sm md:text-base text-stone-200 leading-7">{t.vatInfo}</p>
                   <p className="text-sm md:text-base text-stone-200 leading-7">{t.deliveryCostInfo}</p>
                   <p className="text-sm md:text-base text-stone-200 leading-7">{t.depositInfo}</p>
                 </div>
                <div className="border-t border-primary/25 pt-7"><p className="text-sm text-stone-400 leading-7">{t.conditions}</p></div>
                {sendError && <div className="border border-red-500/40 bg-red-500/5 p-4"><p className="text-sm text-red-300 leading-6">{sendError}</p></div>}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button type="button" onClick={closeForm} disabled={isSending} className="px-8 py-4 border border-stone-700 text-stone-300 uppercase tracking-[0.18em] text-xs hover:border-primary hover:text-primary transition-colors disabled:opacity-40">{t.cancel}</button>
                  <button type="submit" disabled={isSending} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black uppercase tracking-[0.18em] text-xs hover:brightness-110 transition-all disabled:cursor-not-allowed disabled:opacity-60"><Mail className="h-4 w-4"/>{isSending ? t.sending : formType === "reservation" ? t.sendReservation : t.sendQuote}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
