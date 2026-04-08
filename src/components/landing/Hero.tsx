import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Skill from '../common/Skill';

export default function Hero() {
  const { name, title, subtitle, email, avatar, skills, description, nowPlaying } =
    heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <section className="mt-8">
      <div className="flex items-start gap-4 sm:gap-5">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={96}
          height={96}
          className="size-20 rounded-full border bg-blue-300 dark:bg-yellow-300"
          priority
        />
        <div className="min-w-0 flex-1 pt-1">
          <h1 className="text-3xl font-semibold tracking-tight">{name}</h1>
          <div className="text-secondary mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base">
            <span>{title}</span>
            <span>·</span>
            <span>{subtitle}</span>
            <span>·</span>
            <a href={`mailto:${email}`} className="hover:text-foreground transition-colors">
              {email}
            </a>
          </div>
        </div>
      </div>

      <p className="text-secondary mt-6 max-w-2xl text-base leading-relaxed">
        {renderDescription()}
      </p>

      <div className="text-secondary mt-5 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-base">◉</span>
        <span className="font-medium">Last played</span>
        <span>—</span>
        <span>{nowPlaying}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="text-secondary hover:text-foreground transition-colors"
            aria-label={link.name}
          >
            <span className="block size-5 [&_svg]:size-5">{link.icon}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
