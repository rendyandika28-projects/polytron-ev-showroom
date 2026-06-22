'use client';

import { useState, useMemo } from 'react';
import MotorCard from '@/components/MotorCard';
import { getAllMotors, getMotorCategories, getFilteredMotors } from '@/lib/motor';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function MotorList() {
  const motors = useMemo(() => getAllMotors(), []);
  const categories = useMemo(() => getMotorCategories(), []);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMotors = useMemo(() => {
    const byCategory = getFilteredMotors(selectedCategory);
    if (!searchQuery.trim()) return byCategory;
    return byCategory.filter(
      (m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-foreground/70" />
            <span className="text-sm font-medium text-foreground/70 mr-2">Filter:</span>
            {['all', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border border-border ${
                  selectedCategory === cat
                    ? 'bg-accent text-white border-accent shadow-md'
                    : 'bg-muted text-foreground/80 hover:bg-accent/10 hover:border-accent'
                }`}
              >
                {cat === 'all' ? 'Semua' : cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari motor..."
              className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredMotors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMotors.map((motor) => (
              <MotorCard key={motor.slug} motor={motor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-foreground/50">Tidak ada motor yang cocok dengan filter ini.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
