"use client";
import Hero from '@/components/Hero';
import FeaturedMotors from '@/components/FeaturedMotors';
import MotorCard from '@/components/MotorCard';
import About from '@/components/About';
import Contact from '@/components/Contact';
import MotorList from '@/components/MotorList';
import MotorSpecs from '@/components/MotorSpecs';
import MotorGallery from '@/components/MotorGallery';

export default function Home() {
  return (
    <main>
        <Hero />
        <FeaturedMotors />
        <MotorCard />
        <About />
        <Contact />
        <MotorList />
        <MotorSpecs />
        <MotorGallery />
    </main>
  );
}
