'use client'

import { Building2, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: Building2, title: 'Add or update a business', body: 'Send listing details, category requests, service edits, ownership changes, or profile improvements.' },
  { icon: MapPin, title: 'Local coverage requests', body: 'Ask for a city, region, or category to be added to the directory experience.' },
  { icon: Phone, title: 'Customer support', body: 'Report a listing issue, broken contact detail, duplicate profile, or confusing business information.' },
  { icon: Sparkles, title: 'Partnerships', body: 'Talk to us about featuring providers, supporting local discovery, or building a richer category lane.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fff7f0] text-black">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f62eb8]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight tracking-normal">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/68">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <lane.icon className="h-6 w-6 text-[#f62eb8]" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-black/65">{lane.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-black p-5 text-white">
              <Mail className="h-6 w-6 text-[#ffbd36]" />
              <p className="mt-3 text-lg font-black">We route messages by listing need.</p>
              <p className="mt-2 text-sm leading-7 text-white/70">That means business updates, support requests, and directory questions land in the right workflow faster.</p>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm lg:p-8">
            <h2 className="text-3xl font-black tracking-normal">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
