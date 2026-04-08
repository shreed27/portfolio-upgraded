import { type Experience, experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

export default function Experience() {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold tracking-tight">Experience</h2>
      <div className="mt-5 divide-y">
        {experiences.slice(0, 3).map((experience: Experience) => (
          <Link
            key={experience.company}
            href="/work-experience"
            className="group block py-5 first:pt-0 last:pb-0"
          >
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xl font-semibold">{experience.company}</span>
                  {experience.isCurrent ? (
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                      ● Working
                    </span>
                  ) : null}
                  <span className="text-secondary text-2xl leading-none opacity-0 transition-opacity group-hover:opacity-100">
                    ›
                  </span>
                </div>
                <p className="text-secondary mt-1 text-sm">{experience.position}</p>
              </div>
              <div className="text-secondary text-sm sm:text-right">
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
                <p>{experience.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <Link
          href="/work-experience"
          className="hover:bg-muted rounded-xl border px-5 py-2.5 text-sm transition-colors"
        >
          Show all work experiences
        </Link>
      </div>
    </section>
  );
}
