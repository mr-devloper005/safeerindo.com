'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle, UserCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { getVisualPreset, visualSystem } from '@/editable/theme/visual-system'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const preset = getVisualPreset(visualSystem.recommendedPreset as any)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': '#ffffff', '--editable-nav-text': preset.colors.foreground, '--editable-nav-active': preset.colors.foreground, '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': '#f62eb8', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#fff7f0', '--editable-border': 'rgba(0,0,0,0.12)' } as CSSProperties
  const listingRoute = SITE_CONFIG.tasks.find((task) => task.key === 'listing' && task.enabled)?.route || '/listing'
  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Businesses', href: listingRoute },
      { label: 'Search', href: '/search' },
      { label: 'Add Listing', href: '/create' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    [listingRoute]
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/92 text-[var(--editable-nav-text)] backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-[82px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-12 w-12 rounded-lg object-contain transition-transform group-hover:-rotate-2" />
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[210px] truncate text-base font-black tracking-normal">{SITE_CONFIG.name}</span>
            <span className="block max-w-[210px] truncate text-[11px] font-bold uppercase tracking-[0.16em] opacity-55">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex w-full max-w-md items-center rounded-full border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-2.5 shadow-sm">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-black/5'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <span className="hidden max-w-[180px] items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-3 py-2 text-sm font-black sm:inline-flex"><UserCircle className="h-4 w-4" /> <span className="truncate">{session.name}</span></span>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Add</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-black text-white sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-black text-white hover:opacity-90 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-lg border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[...navItems, ...(session ? [{ label: session.name, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-lg border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-lg border border-[var(--editable-border)] bg-black px-4 py-3 text-left text-sm font-black text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
