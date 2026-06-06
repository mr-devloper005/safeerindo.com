import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-black text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-lg border border-white/12 bg-white p-6 text-black shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="text-3xl font-black tracking-normal">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-black underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f62eb8]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 rounded-lg bg-[#b7dcff] p-5 text-black">
              <p className="text-lg font-black">Your account unlocks listing creation.</p>
              <p className="mt-2 text-sm leading-7 text-black/70">After sign-up, the header changes from login buttons to your name, listing access, and logout.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
