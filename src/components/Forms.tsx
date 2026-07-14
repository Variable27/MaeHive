import { ArrowRight } from 'lucide-react';

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

const baseInput =
  'mt-2 w-full rounded-2xl border border-navy/12 bg-white px-4 py-3 text-base text-navy shadow-sm transition placeholder:text-ink/36 focus:border-navy focus:outline-none focus:ring-4 focus:ring-honey/35';

function Field({ label, name, type = 'text', required = false, placeholder }: FieldProps) {
  return (
    <label className="block text-sm font-black text-navy">
      {label}
      <input className={baseInput} type={type} name={name} required={required} placeholder={placeholder} />
    </label>
  );
}

function TextArea({ label, name, required = false, placeholder, rows = 5 }: FieldProps & { rows?: number }) {
  return (
    <label className="block text-sm font-black text-navy">
      {label}
      <textarea className={baseInput} name={name} required={required} placeholder={placeholder} rows={rows} />
    </label>
  );
}

function Select({
  label,
  name,
  required = false,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="block text-sm font-black text-navy">
      {label}
      <select className={baseInput} name={name} required={required} defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function EndpointNotice({ endpointName, configured }: { endpointName: string; configured: boolean }) {
  if (configured) return null;
  return (
    <p className="rounded-2xl border border-honey/40 bg-pollen p-4 text-sm font-semibold leading-6 text-navy">
      Form endpoint placeholder: set <code className="font-black">{endpointName}</code> to a Formspree or Web3Forms endpoint before accepting submissions.
    </p>
  );
}

export function HireVAForm() {
  const endpoint = import.meta.env.VITE_HIRE_FORM_ENDPOINT as string | undefined;
  const configured = Boolean(endpoint);

  return (
    <form className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-glow sm:p-8" action={endpoint || '#'} method="POST">
      <EndpointNotice endpointName="VITE_HIRE_FORM_ENDPOINT" configured={configured} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="full_name" required />
        <Field label="Business email" name="business_email" type="email" required />
        <Field label="Company" name="company" />
        <Field label="Country" name="country" required />
        <Field label="VA role needed" name="va_role_needed" required placeholder="Executive Assistant, Customer Support VA..." />
        <Select label="Engagement type" name="engagement_type" required options={['Part-time', 'Full-time', 'Project-based']} />
        <Field label="Preferred working schedule" name="preferred_working_schedule" placeholder="US mornings, UK afternoons, flexible..." />
        <Field label="Budget range" name="budget_range" placeholder="Monthly or hourly range" />
        <Field label="Desired start date" name="desired_start_date" type="date" />
      </div>
      <TextArea label="Required skills" name="required_skills" required placeholder="Tools, languages, industry experience, certifications..." />
      <TextArea label="Main responsibilities" name="main_responsibilities" required placeholder="Describe the weekly work this VA would own." />
      <TextArea label="Additional message" name="additional_message" placeholder="Anything else MaeHive should know?" />
      <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey sm:w-auto" type="submit">
        Submit VA Request <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}

export function BecomeVAForm() {
  const endpoint = import.meta.env.VITE_VA_APPLICATION_FORM_ENDPOINT as string | undefined;
  const configured = Boolean(endpoint);

  return (
    <form className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-glow sm:p-8" action={endpoint || '#'} method="POST">
      <EndpointNotice endpointName="VITE_VA_APPLICATION_FORM_ENDPOINT" configured={configured} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="full_name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Philippine location" name="philippine_location" required placeholder="City or province" />
        <Field label="Role" name="role" required placeholder="Admin VA, Bookkeeping VA, Social Media VA..." />
        <Field label="Years of experience" name="years_of_experience" required />
        <Select label="Availability" name="availability" required options={['Part-time', 'Full-time', 'Project-based', 'Open to discussion']} />
        <Field label="Internet speed" name="internet_speed" placeholder="Download/upload speed if known" />
        <Field label="Portfolio URL" name="portfolio_url" type="url" />
        <Field label="Resume URL or upload instructions" name="resume_url_or_upload_instructions" placeholder="Link to Drive, Dropbox, portfolio, or note upload preference" />
      </div>
      <TextArea label="Skills" name="skills" required placeholder="List your strongest services and specialties." />
      <TextArea label="Software experience" name="software_experience" required placeholder="Google Workspace, Shopify, Canva, QuickBooks, CRMs..." />
      <TextArea label="Computer specifications" name="computer_specifications" placeholder="Laptop/desktop model, RAM, processor, backup setup..." />
      <TextArea label="Short introduction" name="short_introduction" required placeholder="Introduce yourself and the type of clients you support best." />
      <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey sm:w-auto" type="submit">
        Submit VA Application <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}

export function ContactForm() {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
  const configured = Boolean(endpoint);

  return (
    <form className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-glow sm:p-8" action={endpoint || '#'} method="POST">
      <EndpointNotice endpointName="VITE_CONTACT_FORM_ENDPOINT" configured={configured} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="full_name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subject" name="subject" required />
      <TextArea label="Message" name="message" required />
      <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey sm:w-auto" type="submit">
        Send Message <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
