import type { Metadata } from "next";
import InteractiveAvatar from "@/components/InteractiveAvatar";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about who I am.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero — photo + intro */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <h1
              className="text-4xl sm:text-5xl font-800 tracking-tight mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              About me
            </h1>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              <p>
                I&apos;m Gyamfi — a data analyst and builder who loves sitting at the intersection of
                technology, entrepreneurship, and healthcare. I care about turning messy data into
                clear decisions and turning ideas into working products.
              </p>
              <p>
                I wouldn&apos;t call myself a traditional software engineer — I&apos;m someone who
                builds because it&apos;s the fastest way to bring an idea to life. The code is a
                means to an end, and that end is usually something meaningful.
              </p>
              <p>
                My real passion is healthcare: I believe data and technology are underutilised tools
                in how we deliver, access, and personalise care — and I want to be part of changing
                that.
              </p>
            </div>
          </div>

          {/* Photo side */}
          <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
            <InteractiveAvatar />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-4">
          <EducationEntry
            school="Rochester Institute of Technology"
            degree="BS Management Information Systems · Concentration: Psychology"
            period="2022 – May 2026"
            notes="GPA: 3.4 · Awards: RIT Presidential Scholarship, Bridge Foundation Scholarship, Davis Scholarship · Relevant: Data Structures & Algorithms, Database Systems, Web Engineering, Applied Entrepreneurship, Statistics"
          />
        </div>
      </section>

      {/* Internships */}
      <section className="mb-12">
        <SectionLabel>Internships</SectionLabel>
        <div className="space-y-4">
          <ExperienceEntry
            role="Software Engineer Intern"
            org="Jackal Tech Ltd"
            period="May 2025 – Aug 2025"
            type="Internship · Remote"
            description="Contributed to a full-stack development project using agile methodologies. Participated in code reviews, collaborated with senior engineers on scalable product development and API design. Supported CI/CD setup, version control workflows, and assisted in building core backend infrastructure including authentication and middleware."
          />
          <ExperienceEntry
            role="Front-End Engineer"
            org="OnCall (Startup)"
            period="May 2024 – Aug 2024"
            type="Full-time · Rochester, NY"
            description="Conducted market research to validate solutions for nursing shortages and proposed enhancements based on user feedback. Led development of the landing page using React and Tailwind CSS."
          />
          <ExperienceEntry
            role="Data Collection Specialist"
            org="RevResearch"
            period="Jan 2025"
            type="Contract · Fort Lauderdale, FL"
            description="Deployed and managed physiological data collection devices (CGX Patch, HeartMath Emwave2) to capture HRV and EEG data across multiple subjects at a live event. Cataloged and organized datasets in Excel, partnering with UCSD researchers to deliver cleaned datasets."
          />
        </div>
      </section>

      {/* Campus Roles */}
      <section className="mb-12">
        <SectionLabel>Campus Roles</SectionLabel>
        <div className="space-y-4">
          <ExperienceEntry
            role="Residential Advisor"
            org="Rochester Institute of Technology"
            period="Jan 2026 – Present"
            type="Part-time · On-site"
            description="Managing 30 residents, conducting monthly check-ins, and collaborating with other RAs to create community events throughout the year."
          />
          <ExperienceEntry
            role="DDI Summer Experience Peer Advisor"
            org="Rochester Institute of Technology"
            period="Jun 2025 – Aug 2025"
            type="Full-time · On-site"
            description="Selected to support RIT's AES Summer Experience — a transitional academic and professional readiness program for incoming first-year students."
          />
          <ExperienceEntry
            role="Global Office Assistant"
            org="Rochester Institute of Technology"
            period="Aug 2024 – Present"
            type="Part-time · On-site"
            description="Serving as the first point of contact for international students and visitors — providing customer service, managing phone and email correspondence professionally."
          />
          <ExperienceEntry
            role="FoodShare Assistant"
            org="Rochester Institute of Technology"
            period="May 2024 – Present"
            type="Part-time · On-site"
            description="Warmly welcoming and assisting students at FoodShare. Acting as a key liaison between students and staff, managing communication across multiple channels."
          />
          <ExperienceEntry
            role="RIT 365 Facilitator"
            org="Rochester Institute of Technology"
            period="Aug 2023 – Dec 2025"
            type="Part-time · On-site"
            description="Supported RIT's first-year experience course focused on student transition, personal development, and academic success over 2.5 years."
          />
          <ExperienceEntry
            role="Student Notetaker"
            org="Rochester Institute of Technology"
            period="Dec 2022 – Dec 2024"
            type="Part-time · On-site"
            description="Provided comprehensive and accurate notes to support classmates' academic success across multiple semesters and courses."
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="mb-12">
        <SectionLabel>Leadership & E-board</SectionLabel>
        <div className="space-y-4">
          <ExperienceEntry
            role="Director of Marketing"
            org="RIT AI Club"
            period="Apr 2025 – Jun 2025"
            type="Part-time"
            description="Developed and implemented marketing strategies to promote club events, workshops, and initiatives. Designed promotional materials and acted as a liaison between clubs to establish partnerships for collaborative events."
          />
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <SectionLabel>Achievements & Recognition</SectionLabel>
        <ul className="space-y-3">
          <AchievementEntry
            title="RIT – Ramsey Family Innovation Award"
            context="First-ever winners · RIT Business Accelerator Program"
            year="2024"
            url="https://sarahramseystrong.org/rit-ramsey-family-innovation-award/"
          />
          <AchievementEntry
            title="Dean's List"
            context="Rochester Institute of Technology"
            year="Fall 2025"
          />
          <AchievementEntry
            title="RIT Presidential Scholarship"
            context="Rochester Institute of Technology"
            year="2022"
          />
          <AchievementEntry
            title="Bridge Foundation Scholarship"
            context="Rochester Institute of Technology"
            year="2022"
          />
          <AchievementEntry
            title="Davis Scholarship"
            context="Rochester Institute of Technology"
            year="2022"
          />
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <SectionLabel>Skills & Tools</SectionLabel>
        <div className="space-y-3">
          <SkillGroup label="Languages" items={["Python", "Java", "SQL", "JavaScript"]} />
          <SkillGroup label="Data Analytics" items={["Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn"]} />
          <SkillGroup label="Tools" items={["Git / GitHub", "VS Code", "Postman", "Microsoft Office Suite"]} />
        </div>
      </section>

      {/* Affiliations */}
      <section className="mb-12">
        <SectionLabel>Affiliations</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["National Society of Black Engineers", "SOIS Student Advisory Board", "CodePath", "ColorStack"].map((org) => (
            <span
              key={org}
              className="px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                background: "var(--glass)",
                color: "var(--muted-foreground)",
                border: "1px solid var(--glass-border)",
              }}
            >
              {org}
            </span>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mb-12">
        <SectionLabel>Areas of interest</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["Data Analytics", "Healthcare Technology", "Entrepreneurship", "Product Development", "AI & ML"].map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                background: "var(--accent-dim)",
                color: "var(--accent)",
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-sm font-600 tracking-widest uppercase mb-4"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        color: "var(--muted-foreground)",
        letterSpacing: "0.12em",
      }}
    >
      {children}
    </h2>
  );
}

function EducationEntry({
  school, degree, period, notes,
}: {
  school: string; degree: string; period: string; notes?: string;
}) {
  return (
    <div className="glass rounded-xl p-4">
      <p className="font-medium text-sm mb-0.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{school}</p>
      <p className="text-xs mb-0.5" style={{ color: "var(--muted-foreground)" }}>{degree}</p>
      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{period}</p>
      {notes && <p className="text-xs mt-2" style={{ color: "var(--muted-foreground)" }}>{notes}</p>}
    </div>
  );
}

function ExperienceEntry({
  role, org, period, type, description,
}: {
  role: string; org: string; period: string; type: string; description: string;
}) {
  return (
    <div className="glass rounded-xl p-4">
      <div className="flex items-start justify-between gap-2 mb-0.5">
        <p className="font-medium text-sm" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{role}</p>
        <p className="text-xs shrink-0" style={{ color: "var(--accent)" }}>{period}</p>
      </div>
      <p className="text-xs mb-0.5" style={{ color: "var(--muted-foreground)" }}>{org}</p>
      <p className="text-xs mb-2" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>{type}</p>
      <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{description}</p>
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex items-start gap-3">
      <p className="text-xs shrink-0 w-28" style={{ color: "var(--muted-foreground)", opacity: 0.6, paddingTop: "2px" }}>{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 rounded-md text-xs"
            style={{
              background: "var(--glass)",
              color: "var(--muted-foreground)",
              border: "1px solid var(--glass-border)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function AchievementEntry({
  title, context, year, url,
}: {
  title: string; context: string; year: string; url?: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }}>✦</span>
      <div>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer"
            className="font-medium text-sm hover:text-accent transition-colors"
            style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </a>
        ) : (
          <p className="font-medium text-sm">{title}</p>
        )}
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{context} · {year}</p>
      </div>
    </li>
  );
}
