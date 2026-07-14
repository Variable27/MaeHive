import { Route, Routes } from 'react-router-dom';
import { BecomeVAForm, ContactForm, HireVAForm } from './components/Forms';
import { Layout } from './components/Layout';
import { FAQ, FinalCTA, Hero, Industries, Process, Profiles, SectionIntro, ServicesGrid, TestimonialsPlaceholder, TrustStrip, WhyFilipinoVAs, WhyMaeHiveCards } from './components/Sections';
import { SEO } from './components/SEO';
import { faqs, services } from './data/site';

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-honey">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-white/72">{text}</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Services" title="Focused support across the work that slows growing teams down." text="Choose a single specialist role or build a blended support profile around the way your business already operates." />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>
      <WhyFilipinoVAs />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Why MaeHive" title="A more thoughtful way to hire Filipino remote support." text="MaeHive is designed to feel professional on both sides of the match: clear for clients, respectful for assistants, and practical from first conversation to onboarding." />
          <div className="mt-10">
            <WhyMaeHiveCards />
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="How it works" title="A simple four-step hiring process." align="center" />
          <div className="mt-10">
            <Process />
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Industries served" title="Remote support for modern service and digital businesses." />
          <div className="mt-10">
            <Industries />
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Sample VA profiles" title="Examples of the kinds of support MaeHive can help shape." text="These are sample profiles only, included to show role possibilities without inventing real candidate identities." />
          <div className="mt-10">
            <Profiles />
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Testimonials" title="Placeholder testimonials, ready for verified client stories." />
          <div className="mt-10">
            <TestimonialsPlaceholder />
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionIntro eyebrow="FAQ" title="Questions before you hire?" align="center" />
          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Specialized Filipino VA support for the work behind growth." text="MaeHive helps teams define practical support roles across operations, customer experience, sales support, marketing, websites, and finance administration." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}

function WhyPage() {
  return (
    <>
      <PageHero eyebrow="Why MaeHive" title="Premium matching without the marketplace noise." text="MaeHive is built for businesses that want dependable support and for Filipino professionals who want clear, respectful remote work opportunities." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SectionIntro title="Why hire through MaeHive?" text="Instead of asking clients to sort through endless profiles, MaeHive focuses the search around role clarity, candidate fit, communication habits, and onboarding expectations." />
            <div className="mt-8">
              <TrustStrip />
            </div>
          </div>
          <WhyMaeHiveCards />
        </div>
      </section>
      <WhyFilipinoVAs />
    </>
  );
}

function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From scattered tasks to a clear support role." text="MaeHive’s process helps you describe the work, review aligned Filipino VA candidates, and begin with expectations that are easier to manage." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Process />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="MaeHive exists to make global support feel more human, capable, and clear." text="MaeHive is a Philippine-based virtual assistant agency connecting international businesses with skilled Filipino professionals for practical remote work support." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-navy">Built around better working relationships.</h2>
            <p className="mt-5 leading-8 text-ink/72">
              The best VA relationships are not built by rushing a hire or overpromising what one person can do. MaeHive helps clients describe the real work, choose the right support profile, and start with the kind of clarity that makes remote collaboration easier.
            </p>
            <p className="mt-5 leading-8 text-ink/72">
              For Filipino virtual assistants, MaeHive aims to present professional opportunities with clear responsibilities, respectful communication, and room to do excellent work for growing international teams.
            </p>
          </div>
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-glow">
            <h2 className="text-3xl font-black">MaeHive commitments</h2>
            <ul className="mt-6 grid gap-4 text-white/76">
              <li>Clear role expectations before candidate matching.</li>
              <li>Professional presentation for both clients and VAs.</li>
              <li>No invented client names, awards, statistics, or guarantees.</li>
              <li>Practical support across everyday business operations.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function HirePage() {
  return (
    <>
      <PageHero eyebrow="Hire a VA" title="Tell MaeHive what kind of support would change your week." text="Share the role, schedule, responsibilities, skills, and budget range so MaeHive can prepare a focused VA matching brief." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionIntro title="Before you submit" text="The more specific you are about outcomes, tools, hours, and communication rhythm, the easier it is to identify the right Filipino VA profile." />
            <div className="mt-8 rounded-3xl bg-pollen p-6 text-sm font-semibold leading-7 text-navy">
              Placeholder notice: this static GitHub Pages form needs a Formspree or Web3Forms endpoint configured through environment variables before submissions are collected.
            </div>
          </div>
          <HireVAForm />
        </div>
      </section>
    </>
  );
}

function BecomePage() {
  return (
    <>
      <PageHero eyebrow="Become a VA" title="Apply to be considered for MaeHive client opportunities." text="Share your experience, tools, availability, internet setup, portfolio, and the kind of client work where you do your best." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionIntro title="For Filipino remote professionals" text="MaeHive is looking for assistants who communicate clearly, take ownership of assigned work, and want respectful long-term remote relationships." />
          </div>
          <BecomeVAForm />
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start the conversation with MaeHive." text="Use this page for hiring inquiries, VA applications, partnership questions, or general messages once verified contact details are available." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-navy">Contact details</h2>
            <p className="mt-5 leading-8 text-ink/72">
              Placeholder contact information: add MaeHive’s verified email, phone, social links, and business location details here before public launch.
            </p>
            <div className="mt-8 grid gap-3">
              <div className="rounded-2xl bg-cloud p-4 font-semibold text-navy">Email: placeholder to be verified</div>
              <div className="rounded-2xl bg-cloud p-4 font-semibold text-navy">Phone: placeholder to be verified</div>
              <div className="rounded-2xl bg-cloud p-4 font-semibold text-navy">Business address: placeholder to be verified</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageHero eyebrow="404" title="This MaeHive page is not available." text="The page may have moved, or the link may need updating." />
      <FinalCTA />
    </>
  );
}

function StructuredData() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MaeHive',
      url: 'https://variable27.github.io/MaeHive/',
      areaServed: ['United States', 'United Kingdom', 'Australia', 'Canada', 'International'],
      slogan: 'Smart Filipino Support for Growing Businesses',
      description: 'MaeHive connects international businesses with skilled Filipino virtual assistants.',
      serviceType: services.map((service) => service.title),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function App() {
  return (
    <Layout>
      <SEO />
      <StructuredData />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-maehive" element={<WhyPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hire-a-va" element={<HirePage />} />
        <Route path="/become-a-va" element={<BecomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
