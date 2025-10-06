"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { LinkPreview } from '@/components/ui/link-preview';

import ceremonyImage from "@assets/ceremony_1759741363150.png";
import receptionImage from "@assets/reception_1759741344831.png";
import flower4 from '@assets/flower4_1759741371013.png';
import flower6 from '@assets/flower6_1759741371012.png';
import boquet from '@assets/boquet_1759741371019.png';

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'St. Benedict Cathedral',
      address: '789 Cathedral Street, Intramuros, Manila',
      image: ceremonyImage,
      mapUrl: 'https://www.google.com/maps/place/Manila+Cathedral/@14.5919,120.9735,17z',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2!2d120.9735!3d14.5919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM1JzMwLjgiTiAxMjDCsDU4JzI0LjYiRQ!5e0!3m2!1sen!2sph!4v1234567890',
      description: 'Join us at the historic St. Benedict Cathedral for our sacred wedding ceremony. This stunning cathedral, with its magnificent architecture and serene atmosphere, will witness our vows of eternal love.',
      details: 'The ceremony begins promptly at 1:00 PM. Please arrive 20 minutes early to be seated. Dress code: Formal attire.',
      startTime: '1:00 PM',
      locationGuide: 'View on Maps →'
    },
    {
      title: 'Reception',
      name: 'The Grand Ballroom at Luxe Hotel',
      address: '456 Metropolitan Avenue, Makati City, Metro Manila',
      image: receptionImage,
      mapUrl: 'https://www.google.com/maps/place/Makati+City/@14.5547,121.0244,15z',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5!2d121.0244!3d14.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzE2LjkiTiAxMjHCsDAxJzI3LjgiRQ!5e0!3m2!1sen!2sph!4v1234567890',
      description: 'Celebrate with us at The Grand Ballroom, an elegant space adorned with crystal chandeliers and golden accents. Let\'s dance the night away and create unforgettable memories together.',
      details: 'Cocktail hour starts at 3:30 PM, followed by dinner at 4:30 PM. Join us for an evening of fine dining, dancing, and celebration.',
      startTime: '3:30 PM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue py-16 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-4xl font-display mb-2 text-primary" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Venue Title */}
              <motion.div 
                className="text-center mb-12"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
              >
                <h2 className="font-display text-foreground mb-3 text-2xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
                <h3 className="font-body text-muted-foreground mb-3 text-base" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>
              </motion.div>

              {/* Venue Content */}
              <div className="max-w-3xl mx-auto text-center space-y-6 relative">
                {/* Flower Decorations for each venue */}
                <img src={index === 0 ? flower4 : boquet} alt="" className="absolute -top-4 -left-4 w-16 md:w-20 opacity-80" />
                <img src={flower6} alt="" className="absolute -top-4 -right-4 w-20 md:w-24 opacity-80 transform rotate-12" />
                
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Address */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="text-sm font-body text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                    {venue.address}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  <p className="text-base font-body leading-relaxed text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                    {venue.description}
                  </p>
                </div>

                {/* Details */}
                <p className="text-base font-body text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                {/* Google Maps Embed */}
                <div className="mt-8 mb-8">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border border-primary/20">
                    <iframe
                      src={venue.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      data-testid={`map-${venue.title.toLowerCase()}-embed`}
                    />
                  </div>
                </div>

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-primary/20">
                  <div className="text-left">
                    <p className="text-sm font-body italic text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-guide-btn font-body text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      {venue.locationGuide}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <motion.div 
          className="mt-16 text-center border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-xl font-display text-foreground mb-4">Unplugged Ceremony</h3>
          <p className="text-sm font-body text-foreground/80 leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like—we'd love for you to help us capture more memories!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;