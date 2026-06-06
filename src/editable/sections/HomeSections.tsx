import Link from 'next/link'
import { ArrowRight, Building2, Camera, Heart, MapPin, Search, Sparkles, Star, Store, Utensils, Users } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const categoryCards = [
  { title: 'Service Pros', copy: 'Find specialists by skill, area, and budget.', href: '/listing', tone: 'bg-[#b7dcff]', icon: Store },
  { title: 'Venues & Spaces', copy: 'Browse places for events, teams, and projects.', href: '/listing?category=venues', tone: 'bg-black text-white', icon: Building2 },
  { title: 'Food & Catering', copy: 'Meet local food partners and setup teams.', href: '/listing?category=food', tone: 'bg-[#ffbd36]', icon: Utensils },
  { title: 'Creative Teams', copy: 'Discover photo, media, design, and event talent.', href: '/listing?category=creative', tone: 'bg-[#ff6b2a]', icon: Camera },
]

const teamLinks = ['Beauty', 'Caterers', 'Consultants', 'Designers', 'Florists', 'Officiants', 'Rentals', 'Venues', 'Videographers', 'View all']

function cleanExcerpt(post?: SitePost, limit = 118) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    'Business profile with service details, location notes, and contact information.'
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || 'Businesses'
}

function ListingMiniCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group block min-w-[270px] max-w-[270px]">
      <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#eaded5]">
          <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <button type="button" aria-label="Save listing" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="line-clamp-2 text-base font-black leading-tight underline-offset-4 group-hover:underline">{post.title}</h3>
          <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-black/65"><Star className="h-4 w-4 fill-[#ffbd36] text-[#ffbd36]" /> 4.9 rating</p>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/62">{cleanExcerpt(post, 92)}</p>
          <span className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#f62eb8] px-4 py-2 text-sm font-black text-[#f62eb8]">Request quote</span>
        </div>
      </article>
    </Link>
  )
}

function CategoryCard({ title, copy, href, tone, icon: Icon, image }: { title: string; copy: string; href: string; tone: string; icon: typeof Store; image?: string }) {
  return (
    <Link href={href} className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-lg p-7 ${tone} shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}>
      {image ? <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105" /> : null}
      {image ? <div className="absolute inset-0 bg-black/42" /> : null}
      <div className="relative z-10">
        <Icon className="h-8 w-8" />
        <h3 className="mt-5 text-3xl font-black leading-none">{title}</h3>
        <p className="mt-2 max-w-[14rem] text-base font-semibold leading-6 opacity-82">{copy}</p>
      </div>
      <span className="relative z-10 mt-6 inline-flex w-fit items-center justify-center rounded-full border border-current px-5 py-2 text-sm font-black">
        Explore <ArrowRight className="ml-2 h-4 w-4" />
      </span>
    </Link>
  )
}

function Rail({ children }: { children: React.ReactNode }) {
  return <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{children}</div>
}

export function EditableHomeHero({ primaryTask, primaryRoute }: HomeSectionProps) {
  const listingRoute = SITE_CONFIG.tasks.find((task) => task.key === 'listing' && task.enabled)?.route || primaryRoute

  return (
    <section className="relative overflow-hidden bg-[#fff7f0]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f62eb8]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">{pagesContent.home.hero.title.join(' ')}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/68">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mx-auto mt-8 flex max-w-2xl rounded-full border border-black/15 bg-white p-2 shadow-sm">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-5 text-sm font-semibold outline-none" />
            <button className="inline-flex items-center gap-2 rounded-full bg-[#f62eb8] px-6 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={listingRoute} className={dc.button.primary}>Browse listings</Link>
            <Link href="/create" className={dc.button.accent}>Add your business</Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-normal">A new way to compare local businesses.</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-black/68">Shortlist providers, scan categories, and contact the right company from one listing-first experience.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/10">
            <div className="grid grid-cols-3 gap-3">
              {['Catering', 'Design', 'Repair', 'Events', 'Media', 'Venues'].map((item, index) => (
                <div key={item} className={`rounded-lg p-4 text-center text-sm font-black ${index % 3 === 0 ? 'bg-[#b7dcff]' : index % 3 === 1 ? 'bg-[#ffbd36]' : 'bg-[#fff1e8]'}`}>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-black p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">Featured business card</p>
              <p className="mt-3 text-2xl font-black">Clear services, contact buttons, and useful location context.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className={dc.type.sectionTitle}>Top {taskLabel(primaryTask).toLowerCase()} near you</h2>
            <p className="mt-2 text-base text-black/62">A quick rail of businesses people can compare at a glance.</p>
          </div>
          <Link href={primaryRoute} className="rounded-full border border-[#f62eb8] px-6 py-3 text-sm font-black text-[#f62eb8]">See all</Link>
        </div>
        <Rail>
          {railPosts.map((post) => <ListingMiniCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </Rail>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const images = posts.slice(0, 4).map((post) => getEditablePostImage(post))
  return (
    <section className="bg-[#fff7f0]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={dc.type.sectionTitle}>Find businesses for every need</h2>
          <p className="mt-3 text-lg text-black/68">Discover trusted providers for any budget, background, location, and style.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((card, index) => <CategoryCard key={card.title} {...card} image={index % 2 ? images[index] : undefined} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(4)
  const featured = categoryPosts.slice(0, 6)

  return (
    <section className="bg-[#fff7f0]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black tracking-normal">Build your business shortlist</h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {teamLinks.map((item) => (
            <Link key={item} href={item === 'View all' ? primaryRoute : `/search?q=${encodeURIComponent(item)}`} className="rounded-lg bg-white px-4 py-8 text-center text-lg font-black shadow-sm ring-1 ring-black/8 transition hover:-translate-y-1 hover:shadow-lg">
              {item}
            </Link>
          ))}
        </div>

        {featured.length ? (
          <div className="mt-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f62eb8]">Fresh profiles</p>
                <h2 className="mt-2 text-3xl font-black tracking-normal">Recently added business listings</h2>
              </div>
              <Link href={primaryRoute} className="inline-flex items-center gap-2 text-sm font-black">Browse all <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((post) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={getEditablePostImage(post)} alt={post.title} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-5">
                    <p className="flex items-center gap-1 text-xs font-black uppercase tracking-[0.16em] text-black/48"><MapPin className="h-3.5 w-3.5" /> Business profile</p>
                    <h3 className="mt-3 line-clamp-2 text-xl font-black leading-tight">{post.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/62">{cleanExcerpt(post)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="overflow-hidden bg-[#ffbd36]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 text-center sm:px-6 lg:px-8">
        <Sparkles className="mx-auto h-10 w-10" />
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight tracking-normal">The most useful listings come from businesses that keep details clear.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/70">Create a profile with services, photos, location notes, and direct contact options so customers know exactly why to reach out.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/signup" className={dc.button.primary}><Users className="mr-2 h-4 w-4" /> Sign up for free</Link>
          <Link href="/contact" className={dc.button.secondary}>Ask a question</Link>
        </div>
      </div>
    </section>
  )
}
