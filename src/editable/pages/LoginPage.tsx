import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fff7f0] text-black">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f62eb8]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-black/68">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {['Save listing drafts', 'Manage profile details', 'Contact providers faster'].map((item) => <div key={item} className="rounded-lg bg-white p-4 text-sm font-black shadow-sm ring-1 ring-black/10">{item}</div>)}
            </div>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(16,36,31,0.12)] sm:p-8">
            <h2 className="text-3xl font-black tracking-normal">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-black/70">New here? <Link href="/signup" className="font-black underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
