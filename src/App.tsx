/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ValuationSection } from './components/ValuationSection';
import { BlogSection } from './components/BlogSection';
import { PropertiesCatalogView } from './components/PropertiesCatalogView';
import { ContactSection } from './components/ContactSection';
import { PropertyModal } from './components/PropertyModal';
import { SpotifyPlayerDrawer } from './components/SpotifyPlayerDrawer';
import { Footer } from './components/Footer';

import { mockProperties } from './data/properties';
import { mockServices } from './data/services';
import { mockBlogPosts } from './data/blog';
import { Property, PropertyFilter } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [catalogFilter, setCatalogFilter] = useState<Partial<PropertyFilter>>({});
  const [spotifyOpen, setSpotifyOpen] = useState<boolean>(false);

  const handleHeroSearch = (filter: Partial<PropertyFilter>) => {
    setCatalogFilter(filter);
    setActiveTab('propiedades');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A3837] flex flex-col font-nikkei selection:bg-[#B84A39] selection:text-white">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        onOpenSpotify={() => setSpotifyOpen(true)}
      />

      {/* Main Page Body Routing */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* 1. Hero with Complete Search Form */}
            <Hero
              onSearch={handleHeroSearch}
              onExploreProperties={() => handleNavClick('propiedades')}
            />

            {/* 2. NEW SECTION: Propiedades Destacadas (Home Inventory Showcase) */}
            <FeaturedProperties
              properties={mockProperties}
              onSelectProperty={handleSelectProperty}
              onViewAll={() => handleNavClick('propiedades')}
            />

            {/* 3. Servicios Section with 1-Line Short Descriptions */}
            <ServicesSection
              services={mockServices}
              onSelectServiceForValuation={() => handleNavClick('tasaciones')}
            />

            {/* 4. About Jimena Amaya & Brand Philosophy */}
            <AboutSection onContactClick={() => handleNavClick('contacto')} />

            {/* 5. Tasaciones Form Preview */}
            <ValuationSection />

            {/* 6. Blog & Editorial Highlights */}
            <BlogSection posts={mockBlogPosts} />
          </>
        )}

        {activeTab === 'propiedades' && (
          <PropertiesCatalogView
            properties={mockProperties}
            initialFilter={catalogFilter}
            onSelectProperty={handleSelectProperty}
          />
        )}

        {activeTab === 'servicios' && (
          <ServicesSection
            services={mockServices}
            onSelectServiceForValuation={() => handleNavClick('tasaciones')}
          />
        )}

        {activeTab === 'tasaciones' && <ValuationSection />}

        {activeTab === 'blog' && <BlogSection posts={mockBlogPosts} />}

        {activeTab === 'contacto' && <ContactSection />}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenSpotify={() => setSpotifyOpen(true)}
      />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Spotify Music & Espacios Player Drawer */}
      <SpotifyPlayerDrawer
        isOpen={spotifyOpen}
        onClose={() => setSpotifyOpen(false)}
      />
    </div>
  );
}
