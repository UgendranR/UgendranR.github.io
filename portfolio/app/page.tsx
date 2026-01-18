"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-cyan-500/20 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Ugendran R
            </motion.h1>

            <p className="mt-6 text-xl text-neutral-300 max-w-2xl">
              Full-Stack Engineer with 2.5+ years of experience designing and
              building high-scale, event-driven platforms. Strong backend focus
              on performance optimization, distributed systems, and secure API
              design, with solid frontend experience in building accessible,
              responsive UIs.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="https://drive.google.com/file/d/19ankbCkX59VZCVvoqjRXxZ-DahAeyL2J/view?usp=sharing"
                className="px-6 py-3 rounded-xl bg-white text-black font-medium"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl border border-neutral-700"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/me.jpg"
              alt="Ugendran R"
              className="h-48 w-48 rounded-full object-cover border border-neutral-700 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-6">
        {[
          "25GB+ Data Exports",
          "Sub-millisecond APIs",
          "Kafka-Driven Pipelines",
          "Enterprise-grade Security",
        ].map((m) => (
          <div
            key={m}
            className="rounded-2xl bg-neutral-900 p-6 border border-neutral-800 text-center"
          >
            <p className="text-2xl font-semibold">{m}</p>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <SkillCard
            title="Backend"
            items="Java, REST APIs, SQL, Kafka, Distributed Systems, Event-Driven Architecture"
          />
          <SkillCard
            title="Frontend"
            items="React, TypeScript, Performance Optimization, Responsive Design"
          />
          <SkillCard
            title="Security & Access"
            items="RBAC, AES Encryption, Secure API Design"
          />
          <SkillCard
            title="Other"
            items="System Design, WCAG Accessibility, RTL Support"
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>

        <div className="space-y-10 border-l border-neutral-800 pl-6">
          <ExperienceBlock
            role="Full-Stack Engineer"
            company="Zoho"
            period="Jun 2023 – Present"
            points={[
              "Owned the Reports & Export Platform end-to-end, including architecture, scalability, reliability, and performance tuning.",
              "Designed and implemented Kafka-based asynchronous export pipelines to handle large datasets (25GB+), ensuring fault tolerance and resumability.",
              "Optimized report-generation APIs by indexing critical database columns and refactoring inefficient queries, reducing response times from over 2 seconds to sub-millisecond latency for frequently accessed endpoints.",
              "Implemented secure API payload encryption using AES combined with public-private key cryptography and introduced fine-grained role-based access control (RBAC).",
              "Built real-time export progress tracking using WebSockets, enabling responsive UX without long-running HTTP connections.",
            ]}
          />

          <ExperienceBlock
            role="Project Trainee"
            company="Zoho"
            period="Aug 2022 – Jun 2023"
            points={[
              "Developed a scalable File Manager UI using React, optimized for large datasets with advanced filtering, sorting, and search capabilities.",
              "Integrated a platform-provided AI endpoint to generate session summaries from remote support actions and chat logs, improving support efficiency.",
              "Improved UI responsiveness and usability through performance-focused rendering strategies and responsive layouts.",
            ]}
          />
        </div>
      </section>

      {/* PROJECTS / WORK */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-10">Projects & Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Reports & Export Platform"
            description="Led the end-to-end development of a large-scale reporting and export platform. The system supports multi-gigabyte data exports, real-time progress updates, and optimized ZIP delivery. Focused heavily on scalability, performance, and fault tolerance."
          />

          <ProjectCard
            title="Distributed Export Processing Pipeline"
            description="Designed an event-driven export processing pipeline using Kafka with dedicated topics and consumers. Enabled asynchronous orchestration, buffered streaming, resumable exports, and efficient handling of long-running tasks without blocking HTTP requests."
          />

          <ProjectCard
            title="API & Database Performance Optimization"
            description="Optimized report-generation APIs by introducing proper indexing strategies, query refactoring, and caching considerations. Achieved sub-millisecond latency for high-traffic endpoints and significantly reduced backend load."
          />

          <ProjectCard
            title="Security & Access Control Framework"
            description="Built a secure encryption layer for API payloads using AES and public-private key cryptography. Implemented role-based access control (RBAC) to enforce fine-grained permissions across department-level administrators."
          />

          <ProjectCard
            title="Client Support & Remote Session Portal"
            description="Designed and developed a client support portal enabling customers to initiate remote support sessions. Improved technician response time and overall issue resolution efficiency."
          />

          <ProjectCard
            title="File Manager & Session Intelligence"
            description="Developed a scalable File Manager UI with React, supporting large datasets and advanced interactions. Integrated AI-based session summarization and ensured accessibility compliance (WCAG), RTL support, and responsive design."
          />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-10">Achievements</h2>
        <ul className="space-y-4 text-neutral-300">
          <li>Smart India Hackathon Finalist (National Level) – 2023</li>
          <li>Best Innovative Solution Award – 2nd Prize – 2020</li>
          <li>2nd Place – Internal Bug Bounty Program, Zoho – 2024</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} Ugendran R
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/UgendranR"><Github /></a>
            <a href="https://www.linkedin.com/in/ugendran-r-1383b5193/"><Linkedin /></a>
            <a href="mailto:ugendranragu@gmail.com"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Components ---------- */

function SkillCard({ title, items }: { title: string; items: string }) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-6 border border-neutral-800">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm">{items}</p>
    </div>
  );
}

function ExperienceBlock({
  role,
  company,
  period,
  points,
}: {
  role: string;
  company: string;
  period: string;
  points: string[];
}) {
  return (
    <div>
      <h3 className="text-xl font-medium">{role} — {company}</h3>
      <p className="text-sm text-neutral-400">{period}</p>
      <ul className="mt-3 list-disc list-inside space-y-2 text-neutral-300">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-6 border border-neutral-800 hover:border-neutral-600 transition">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}
