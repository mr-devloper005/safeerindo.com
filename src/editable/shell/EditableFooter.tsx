'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, MessageCircle, Search, Store } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#050505', '--editable-footer-text': '#ffffff' } as CSSProperties
  const listingRoute = SITE_CONFIG.tasks.find((task) => task.key === 'listing' && task.enabled)?.route || '/listing'
  const taskLinks = [
    { label: 'Browse businesses', href: listingRoute },
    { label: 'Search directory', href: '/search' },
    { label: 'Add a listing', href: '/create' },
    { label: 'Contact support', href: '/contact' },
  ]
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="bg-[#b7dcff] text-black">
        <div className="mx-auto flex max-w-[var(--editable-container)] flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="text-3xl font-black tracking-normal">Get started with business discovery</h2>
          <Link href={session ? '/create' : '/signup'} className="inline-flex w-fit items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-black text-white">
            {session ? 'Add a listing' : 'Sign up for free'}
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr_0.95fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-12 w-12 rounded-lg object-contain" />
            <span className="text-lg font-black tracking-normal">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          <div className="mt-6 flex gap-3">
            <Link href="/search" aria-label="Search" className="grid h-11 w-11 place-items-center rounded-full bg-white text-black"><Search className="h-5 w-5" /></Link>
            <Link href="/contact" aria-label="Contact" className="grid h-11 w-11 place-items-center rounded-full bg-[#f62eb8] text-white"><MessageCircle className="h-5 w-5" /></Link>
            <Link href="/create" aria-label="Create listing" className="grid h-11 w-11 place-items-center rounded-full border border-white/20"><Store className="h-5 w-5" /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Marketplace</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.href} href={task.href} className="inline-flex items-center gap-2 text-sm font-bold text-white/72 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Company</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-white/72 hover:text-white">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-white/72 hover:text-white">Logout</button> : null}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black leading-tight">Are you a business owner?</h3>
          <p className="mt-3 text-sm leading-7 text-white/72">Create a profile, share services, and help customers understand why your company is worth contacting.</p>
          <Link href={session ? '/create' : '/signup'} className="mt-5 inline-flex items-center gap-2 text-sm font-black underline underline-offset-4">
            Start here <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15 px-4 py-5 text-center text-xs font-bold text-white/55">
        (c) {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
