import { motors } from '@/data/motors';
import type { Motor } from '@/types/motor';

export function getAllMotors(): Motor[] {
  return motors;
}

export function getMotorBySlug(slug: string): Motor | undefined {
  return motors.find((motor) => motor.slug === slug);
}

export function getFilteredMotors(category?: string): Motor[] {
  if (!category || category === 'all') return motors;
  return motors.filter((motor) => motor.category === category);
}

export function getMotorCategories(): string[] {
  const categories = new Set(motors.map((motor) => motor.category).filter(Boolean));
  return Array.from(categories);
}
