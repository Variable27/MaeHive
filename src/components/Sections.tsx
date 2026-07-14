import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs, industries, processSteps, services, statsPlaceholders, trustPillars, vaProfiles, whyFilipinoVAs, whyMaeHive } from '../data/site';

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slateblue">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-ink/72">{text}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,197,66,0.22),transparent_32%),linear-gradient(135deg,rgba(7,24,47,0.98),rgba(16,36,62,0.84))]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-74px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex rounded-full border border-honey/30 bg-honey/12 px-4 py-2 text-sm font-bold text-pollen">
            Philippine-based Virtual Assistant Agency
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Smart Filipino Support for Growing Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-white/76">
            MaeHive helps international teams find skilled Filipino virtual assistants for executive support, operations, customer care, marketing, and digital workflows.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-7 py-4 text-base font-black text-navy shadow-honey transition hover:-translate-y-1 hover:bg-pollen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey" to="/hire-a-va">
              Hire a VA <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey" to="/services">
              Explore Services
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {statsPlaceholders.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/7 p-4">
                <p className="text-lg font-black text-honey">{stat.value}</p>
                <p className="mt-1 text-sm text-white/64">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-honey/18 blur-3xl" />
          <img
            src={`${import.meta.env.BASE_URL}maehive-hero.png`}
            alt="A Filipino virtual assistant wearing a headset while joining a remote business video call from a modern home office."
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-glow"
            width="1792"
            height="1024"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.2) }}
            className="group rounded-3xl border border-navy/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft text-navy transition group-hover:bg-honey">
              <Icon size={23} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-black text-navy">{service.title}</h3>
            {!compact && <p className="mt-3 leading-7 text-ink/68">{service.summary}</p>}
          </motion.article>
        );
      })}
    </div>
  );
}

export function WhyFilipinoVAs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <SectionIntro
          eyebrow="Why Filipino VAs"
          title="Professional support shaped by communication, care, and adaptability."
          text="Filipino virtual assistants are valued by global teams for strong English communication, service-minded collaboration, and the ability to work across a wide range of business functions."
        />
        <div className="grid gap-4">
          {whyFilipinoVAs.map((item) => (
            <div key={item} className="flex gap-4 rounded-3xl bg-cloud p-5">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-honey text-navy">
                <Check size={17} aria-hidden="true" />
              </span>
              <p className="leading-7 text-ink/74">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyMaeHiveCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {whyMaeHive.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="rounded-3xl border border-navy/8 bg-white p-7 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-honey">
              <Icon aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-black text-navy">{item.title}</h3>
            <p className="mt-4 leading-7 text-ink/68">{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function Process() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {processSteps.map((step, index) => (
        <article key={step.title} className="relative rounded-3xl border border-navy/8 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-black text-honey">{index + 1}</span>
            {index < processSteps.length - 1 && <ChevronRight className="hidden text-navy/24 lg:block" aria-hidden="true" />}
          </div>
          <h3 className="mt-6 text-xl font-black text-navy">{step.title}</h3>
          <p className="mt-3 leading-7 text-ink/68">{step.summary}</p>
        </article>
      ))}
    </div>
  );
}

export function Industries() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry) => (
        <div key={industry} className="rounded-2xl border border-navy/8 bg-white px-5 py-4 font-bold text-navy shadow-sm">
          {industry}
        </div>
      ))}
    </div>
  );
}

export function Profiles() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {vaProfiles.map((profile) => (
        <article key={profile.name} className="rounded-3xl border border-navy/8 bg-white p-7 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slateblue">{profile.location}</p>
          <h3 className="mt-3 text-2xl font-black text-navy">{profile.name}</h3>
          <dl className="mt-6 grid gap-4">
            <div>
              <dt className="text-sm font-black text-navy">Focus</dt>
              <dd className="mt-1 text-ink/68">{profile.focus}</dd>
            </div>
            <div>
              <dt className="text-sm font-black text-navy">Tools</dt>
              <dd className="mt-1 text-ink/68">{profile.tools}</dd>
            </div>
          </dl>
          <p className="mt-6 rounded-2xl bg-pollen p-4 text-sm leading-6 text-navy/74">{profile.note}</p>
        </article>
      ))}
    </div>
  );
}

export function TestimonialsPlaceholder() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <figure key={item} className="rounded-3xl border border-dashed border-navy/20 bg-white p-7">
          <blockquote className="text-lg font-semibold leading-8 text-navy">
            Placeholder testimonial: replace with a verified client quote once MaeHive has permission to publish it.
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold text-ink/58">Client name and company placeholder</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-3xl border border-navy/8 bg-white p-6 shadow-sm">
          <summary className="cursor-pointer list-none text-lg font-black text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey">
            {faq.question}
          </summary>
          <p className="mt-4 leading-7 text-ink/68">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/7 p-8 text-center sm:p-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-honey">Ready when you are</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Build a calmer, more capable workday with MaeHive.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
          Share the support you need and MaeHive will prepare a role profile for Filipino VA matching.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/hire-a-va" className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-7 py-4 font-black text-navy shadow-honey transition hover:-translate-y-1 hover:bg-pollen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey">
            Hire a VA <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/become-a-va" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey">
            Become a VA
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {trustPillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <div key={pillar.label} className="flex items-center gap-3 rounded-2xl border border-navy/8 bg-white p-4 shadow-sm">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-skysoft text-navy">
              <Icon size={19} aria-hidden="true" />
            </span>
            <span className="text-sm font-black text-navy">{pillar.label}</span>
          </div>
        );
      })}
    </div>
  );
}
