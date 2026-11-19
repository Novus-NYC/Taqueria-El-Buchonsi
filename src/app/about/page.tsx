import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

import { GoogleMap } from "@/components/google-map"
import { PageHero } from "@/components/page-hero"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"
import { Testimonials } from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "About",
  description: `Learn the story behind ${site.name}, a Mexican restaurant in Staten Island focused on authentic flavor and warm hospitality.`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A richer take on the neighborhood taqueria, rooted in tradition."
        description="Taqueria El Buchon combines the energy of Mexican street food with a more polished dining experience that still feels warm, generous, and familiar."
        backgroundImage="/non.jpg"
        backgroundPosition="center 45%"
      />
      <section className="bg-white py-16 sm:py-20">
        <PageShell>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="A little piece of Mexico in the heart of Staten Island."
                description="Taqueria El Buchon was born from a deep desire to honor our roots and share the joy, pride, and unforgettable flavor of true regional Mexican cuisine with every guest."
              />
              <div className="mt-10 space-y-5 text-base leading-8 text-[color:var(--color-muted)]">
                <p>
                  At <Link href={site.directionsUrl} target="_blank" rel="noreferrer" className="font-medium text-[color:var(--color-red)] underline underline-offset-4">841 Castleton Ave</Link>, we do more than serve food. We celebrate our culture, our people, and the memories around the table that make us feel at home.
                </p>
                <p>
                  Every day, we light the stoves with heart. We hand-make our tortillas, prepare sauces full of character, and bring memorable dishes to the table, from juicy birria and ribeye tacos to octopus, tongue, and Baja-style fish. Come toast, laugh, and let yourself be won over by an explosion of flavor from the first bite. At Taqueria El Buchon, you always have a home.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={site.orderUrl} target="_blank" rel="noreferrer">
                  <Button>Start an Order</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Visit Us Today</Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative h-72 overflow-hidden rounded-[2rem] sm:h-[25rem]">
                <Image src="/taqueria-el-buchon-foods-09.jpg" alt="Taqueria dining atmosphere" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="relative h-72 overflow-hidden rounded-[2rem] sm:mt-12 sm:h-[28rem]">
                <Image src="/taqueria-el-buchon-foods-05.jpg" alt="House salsas in Jarritos bottles" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <Testimonials
        heading="The neighborhood trust is already there."
        description="This fits best alongside the story of the restaurant: real guest reactions that reinforce the warmth, consistency, and range people remember."
      />

      <section className="bg-[color:var(--color-surface)] py-16 sm:py-20">
        <PageShell>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6 rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
              <h2 className="font-serif-display text-4xl text-[color:var(--color-ink)]">Find Us</h2>
              <div className="flex gap-4">
                <MapPin className="mt-1 text-[color:var(--color-red)]" size={18} />
                <div className="space-y-1">
                  <p className="font-medium text-[color:var(--color-ink)]">Address</p>
                  <p className="text-sm leading-7 text-[color:var(--color-muted)]">{site.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 text-[color:var(--color-red)]" size={18} />
                <div className="space-y-1">
                  <p className="font-medium text-[color:var(--color-ink)]">Phone</p>
                  <p className="text-sm leading-7 text-[color:var(--color-muted)]">{site.phone}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-medium text-[color:var(--color-ink)]">Hours</p>
                {site.hours.map((entry) => (
                  <div key={entry.label} className="flex items-center justify-between gap-4 border-b border-[color:var(--color-sand-line)] pb-3 text-sm text-[color:var(--color-muted)]">
                    <span>{entry.label}</span>
                    <span className="font-medium text-[color:var(--color-ink)]">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <GoogleMap />
          </div>
        </PageShell>
      </section>
    </>
  )
}
