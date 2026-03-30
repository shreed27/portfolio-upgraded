import Container from '@/components/common/Container';
import { Quote } from '@/components/common/Quote';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import React from 'react';

export default function page() {
  return (
    <>
      <Container className="min-h-screen py-12">
      <Hero />
      <Experience />
      </Container>
      <Quote />
    </>
  );
}
