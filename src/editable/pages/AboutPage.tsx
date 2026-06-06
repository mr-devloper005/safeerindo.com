import Link from 'next/link'
import { Building2, CheckCircle2, MapPin, Search, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const stats = [
  ['Business-first', 'Every page is shaped around providers, services, and contact decisions.'],
  ['Normal width', 'Layouts stay constrained so cards, forms, and content never feel stretched.'],
  ['Action ready', 'Visitors can search, compare, save, and reach a business from the listing flow.'],
]

export default function AboutPage() {
  const listingRoute = SITE_CONFIG.tasks.find((task) => task.key === 'listing' && task.enabled)?.route || '/listing'

  return (
    <EditableSiteShell>
      <main className="bg-[#fff7f0] text-black">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <article className="rounded-lg border border-black/10 bg-white p-8 shadow-sm lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f62eb8]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 text-5xl font-black leading-tight tracking-normal">About {SITE_CONFIG.name}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/68">{pagesContent.about.description}</p>
              <div className="mt-8 space-y-4 text-base leading-8 text-black/72">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={listingRoute} className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Browse businesses</Link>
                <Link href="/create" className="inline-flex items-center gap-2 rounded-full bg-[#f62eb8] px-7 py-3 text-sm font-black text-white"><Building2 className="h-4 w-4" /> Add a listing</Link>
              </div>
            </article>

            <aside className="grid gap-4">
              {pagesContent.about.values.map((value, index) => {
                const Icon = index === 0 ? CheckCircle2 : index === 1 ? ShieldCheck : MapPin
                return (
                  <div key={value.title} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                    <Icon className="h-6 w-6 text-[#f62eb8]" />
                    <h2 className="mt-4 text-2xl font-black tracking-normal">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-black/68">{value.description}</p>
                  </div>
                )
              })}
            </aside>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stats.map(([title, body]) => (
              <div key={title} className="rounded-lg bg-black p-6 text-white">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
