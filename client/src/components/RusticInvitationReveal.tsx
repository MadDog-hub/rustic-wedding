import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import prenup1 from '@assets/groom_1759741344818.png';
import prenup2 from '@assets/hero-section_1759741344822.png';
import prenup3 from '@assets/bride_1759741344818.png';

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [showPolaroids, setShowPolaroids] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const handleEnvelopeClick = () => {
    setEnvelopeOpening(true);
    
    setTimeout(() => {
      setShowEnvelope(false);
      setShowPolaroids(true);
    }, animationsEnabled ? 1000 : 0);

    setTimeout(() => {
      setShowInvitation(true);
    }, animationsEnabled ? 2500 : 0);
  };

  const polaroids = [
    { src: prenup1, alt: 'Groom', rotation: -8, delay: 0 },
    { src: prenup2, alt: 'Couple', rotation: 2, delay: 0.3 },
    { src: prenup3, alt: 'Bride', rotation: -5, delay: 0.6 }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4">
      {/* Rustic Envelope */}
      {showEnvelope && (
        <motion.div
          initial={animationsEnabled ? { opacity: 0, scale: 0.8, y: 50 } : { opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -100 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-col items-center"
          data-testid="rustic-envelope"
        >
          {/* Envelope Container */}
          <motion.div
            animate={envelopeOpening ? {
              rotateX: -15,
              y: -20,
              scale: 1.1
            } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            {/* Main Envelope Body */}
            <div className="relative">
              <svg width="400" height="280" viewBox="0 0 400 280" className="drop-shadow-2xl">
                {/* Envelope Background with Wood Texture */}
                <defs>
                  <pattern id="envelopeWood" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="#D2B48C"/>
                    <line x1="0" y1="0" x2="0" y2="20" stroke="#C19A6B" strokeWidth="0.5" opacity="0.3"/>
                    <line x1="10" y1="0" x2="10" y2="20" stroke="#C19A6B" strokeWidth="0.3" opacity="0.2"/>
                  </pattern>
                  <linearGradient id="envelopePaper" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5E6D3"/>
                    <stop offset="50%" stopColor="#E8D4B8"/>
                    <stop offset="100%" stopColor="#F5E6D3"/>
                  </linearGradient>
                </defs>

                {/* Envelope Body */}
                <rect
                  x="20"
                  y="60"
                  width="360"
                  height="200"
                  fill="url(#envelopePaper)"
                  stroke="#A0522D"
                  strokeWidth="3"
                  rx="5"
                />

                {/* Wood grain detail */}
                <rect
                  x="20"
                  y="60"
                  width="360"
                  height="200"
                  fill="url(#envelopeWood)"
                  opacity="0.15"
                  rx="5"
                />

                {/* Decorative Twine Border */}
                <rect
                  x="30"
                  y="70"
                  width="340"
                  height="180"
                  fill="none"
                  stroke="#8B4513"
                  strokeWidth="2"
                  strokeDasharray="5,3"
                  rx="3"
                  opacity="0.4"
                />

                {/* Rustic Leaves Decoration - Left */}
                <g transform="translate(40, 90)">
                  <path d="M0,0 Q10,5 15,15 Q10,10 5,12 Q8,8 0,0 Z" fill="#6B8E23" opacity="0.6"/>
                  <path d="M5,5 Q12,8 18,18 Q12,12 8,15 Q10,10 5,5 Z" fill="#556B2F" opacity="0.5"/>
                </g>

                {/* Rustic Leaves Decoration - Right */}
                <g transform="translate(340, 90) scale(-1, 1)">
                  <path d="M0,0 Q10,5 15,15 Q10,10 5,12 Q8,8 0,0 Z" fill="#6B8E23" opacity="0.6"/>
                  <path d="M5,5 Q12,8 18,18 Q12,12 8,15 Q10,10 5,5 Z" fill="#556B2F" opacity="0.5"/>
                </g>

                {/* Hearts Decoration */}
                <g opacity="0.3">
                  <path d="M80,120 C80,115 75,110 70,115 C65,110 60,115 60,120 C60,125 70,135 80,145 C90,135 100,125 100,120 C100,115 95,110 90,115 C85,110 80,115 80,120 Z" 
                        fill="#A0522D"/>
                  <path d="M320,120 C320,115 315,110 310,115 C305,110 300,115 300,120 C300,125 310,135 320,145 C330,135 340,125 340,120 C340,115 335,110 330,115 C325,110 320,115 320,120 Z" 
                        fill="#A0522D"/>
                </g>

                {/* Envelope Back Flap */}
                <polygon
                  points="20,60 200,140 380,60"
                  fill="#E8D4B8"
                  stroke="#A0522D"
                  strokeWidth="3"
                />

                {/* Envelope Front Flap */}
                <motion.polygon
                  points="20,60 200,140 380,60 380,40 200,120 20,40"
                  fill="url(#envelopePaper)"
                  stroke="#A0522D"
                  strokeWidth="3"
                  style={{ transformOrigin: '200px 60px', transformBox: 'fill-box' }}
                  animate={envelopeOpening ? {
                    rotateX: 180,
                    opacity: 0.3
                  } : {}}
                  transition={{ duration: 0.8 }}
                />

                {/* Wax Seal on Flap */}
                <g transform="translate(200, 80)">
                  <circle cx="0" cy="0" r="25" fill="#8B4513" opacity="0.9"/>
                  <circle cx="0" cy="0" r="20" fill="#A0522D"/>
                  <text x="0" y="8" textAnchor="middle" fill="#D4A574" fontSize="16" fontFamily="serif" fontWeight="bold">E&C</text>
                </g>

                {/* Paper Edge Detail */}
                <line x1="20" y1="60" x2="380" y2="60" stroke="#C19A6B" strokeWidth="1" opacity="0.5"/>
              </svg>

              {/* Rustic Corner Embellishments */}
              <div className="absolute top-12 left-8">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="15" fill="none" stroke="#8B4513" strokeWidth="2" strokeDasharray="2,2" opacity="0.4"/>
                </svg>
              </div>
              <div className="absolute top-12 right-8">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="15" fill="none" stroke="#8B4513" strokeWidth="2" strokeDasharray="2,2" opacity="0.4"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Click Circle Button */}
          <motion.div
            className="mt-8 cursor-pointer"
            onClick={handleEnvelopeClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            data-testid="button-click-envelope"
          >
            <div className="relative">
              {/* Outer Circle with Pulse Animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Circle */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-orange-600 shadow-2xl flex flex-col items-center justify-center border-4 border-white">
                {/* Rustic texture overlay */}
                <div className="absolute inset-0 rounded-full opacity-20">
                  <svg width="100%" height="100%" className="rounded-full">
                    <defs>
                      <pattern id="clickTexture" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="5" cy="5" r="1" fill="white" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#clickTexture)"/>
                  </svg>
                </div>

                {/* Click Text */}
                <span className="text-white text-xl font-bold z-10" style={{ fontFamily: 'Boska, serif' }}>
                  Click
                </span>
                <span className="text-white text-sm z-10">to open</span>
                
                {/* Hand pointer icon */}
                <svg className="w-6 h-6 text-white mt-1 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11A1,1 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A1,1 0 0,1 5,11A1,1 0 0,1 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A1,1 0 0,1 19,11Z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Rustic Wood Background Element */}
      {!showEnvelope && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="woodgrain" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
                <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="0.4" opacity="0.25"/>
                <line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
                <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#woodgrain)"/>
          </svg>
        </div>
      )}

      {/* Twine/String across top */}
      {showPolaroids && (
        <motion.div
          className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={animationsEnabled ? { scaleX: 0 } : { scaleX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ transformOrigin: 'center' }}
        >
          <div className="absolute inset-0 shadow-lg" style={{ 
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
          }}/>
        </motion.div>
      )}

      {/* Polaroid Photos */}
      {showPolaroids && (
        <div className="relative z-10 mb-16 flex flex-wrap items-center justify-center gap-6 max-w-5xl">
          {polaroids.map((polaroid, index) => (
          <motion.div
            key={index}
            initial={animationsEnabled ? { 
              y: -200, 
              rotate: polaroid.rotation + 180,
              opacity: 0,
              scale: 0.5
            } : {
              y: 0,
              rotate: polaroid.rotation,
              opacity: 1,
              scale: 1
            }}
            animate={{ 
              y: 0, 
              rotate: polaroid.rotation,
              opacity: 1,
              scale: 1
            }}
            transition={{ 
              duration: animationsEnabled ? 0.8 : 0,
              delay: animationsEnabled ? polaroid.delay : 0,
              type: 'spring',
              stiffness: 100,
              damping: 12
            }}
            className="relative group"
            data-testid={`polaroid-${index}`}
          >
            {/* Clip/Pin on top of polaroid */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
              <svg width="30" height="35" viewBox="0 0 30 35" className="drop-shadow-md">
                <path 
                  d="M15,5 L10,0 L5,5 L5,15 Q5,20 7,22 L15,30 L23,22 Q25,20 25,15 L25,5 L20,0 Z" 
                  fill="#8B7355"
                  stroke="#5D4E37"
                  strokeWidth="1"
                />
                <circle cx="15" cy="12" r="3" fill="#5D4E37"/>
              </svg>
            </div>

            {/* Polaroid Frame */}
            <div 
              className="bg-white p-3 pb-12 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
              }}
            >
              <div className="relative overflow-hidden bg-gray-100" style={{ width: '220px', height: '220px' }}>
                <img
                  src={polaroid.src}
                  alt={polaroid.alt}
                  className="w-full h-full object-cover"
                />
                {/* Vintage photo effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-900/10 pointer-events-none mix-blend-overlay"/>
              </div>
              
              {/* Handwritten-style caption */}
              <div className="mt-4 text-center">
                <p 
                  className="text-gray-600 italic text-sm"
                  style={{ fontFamily: 'Brush Script MT, cursive' }}
                >
                  {polaroid.alt}
                </p>
              </div>
            </div>

            {/* Tape pieces on corners */}
            <div className="absolute -top-1 -left-1 w-8 h-6 bg-yellow-100/60 transform -rotate-45 opacity-70"
                 style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}/>
            <div className="absolute -top-1 -right-1 w-8 h-6 bg-yellow-100/60 transform rotate-45 opacity-70"
                 style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}/>
          </motion.div>
          ))}
        </div>
      )}

      {/* Rustic Paper Invitation */}
      {showInvitation && (
        <motion.div
          initial={animationsEnabled ? { 
            y: 100, 
            opacity: 0,
            scale: 0.8,
            rotateX: -20
          } : {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0
          }}
          animate={{ 
            y: 0, 
            opacity: 1,
            scale: 1,
            rotateX: 0
          }}
          transition={{ 
            duration: animationsEnabled ? 1 : 0,
            delay: animationsEnabled ? 0.5 : 0,
            type: 'spring',
            stiffness: 80
          }}
          className="relative z-10 max-w-2xl w-full"
          data-testid="invitation-paper"
        >
          {/* Paper with rustic texture */}
          <div 
            className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 p-8 md:p-12 shadow-2xl"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(139,115,85,0.03) 1px, transparent 1px),
                linear-gradient(rgba(139,115,85,0.03) 1px, transparent 1px),
                radial-gradient(circle at 20% 30%, rgba(160,82,45,0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(139,115,85,0.05) 0%, transparent 50%)
              `,
              backgroundSize: '30px 30px, 30px 30px, 200px 200px, 200px 200px',
              border: '3px solid',
              borderImage: 'linear-gradient(135deg, #8B7355, #A0522D, #8B7355) 1',
              boxShadow: `
                0 20px 60px rgba(139,115,85,0.4),
                inset 0 0 60px rgba(255,248,220,0.5),
                0 0 0 1px rgba(139,115,85,0.2)
              `
            }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary opacity-40"/>
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary opacity-40"/>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary opacity-40"/>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary opacity-40"/>

            {/* Rustic leaf decoration */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <path d="M30,5 Q20,10 15,20 Q20,15 30,15 Q40,15 45,20 Q40,10 30,5 Z" 
                      fill="#8B7355" opacity="0.6"/>
                <path d="M30,15 L30,35" stroke="#5D4E37" strokeWidth="2" opacity="0.5"/>
              </svg>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              {/* Ornamental divider top */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"/>
                <svg className="w-6 h-6 mx-3 text-primary" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"/>
              </div>

              <motion.h2 
                className="text-4xl md:text-5xl font-script italic text-primary mb-6"
                style={{ fontFamily: 'Boska, serif' }}
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                You're Invited
              </motion.h2>

              <motion.p 
                className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Come witness the moment we tie the knot and start our greatest adventure together
              </motion.p>

              <motion.div
                className="text-base md:text-lg text-foreground/80"
                initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <p className="mb-2">with love, laughter,</p>
                <p>and a lifetime of memories</p>
              </motion.div>

              {/* Ornamental divider bottom */}
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"/>
                <svg className="w-5 h-5 mx-3 text-primary animate-pulse" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"/>
              </div>

              {/* Rustic stamp effect */}
              <div className="absolute bottom-6 right-6 transform rotate-12">
                <div className="relative">
                  <div 
                    className="border-4 border-primary rounded-full w-20 h-20 flex items-center justify-center opacity-40"
                    style={{
                      borderStyle: 'dashed'
                    }}
                  >
                    <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Paper aging effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-900 to-transparent"/>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-900 to-transparent"/>
            </div>
          </div>

          {/* Wax seal effect */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="28" fill="#A0522D" opacity="0.9"/>
                <circle cx="30" cy="30" r="24" fill="#8B4513"/>
                <text x="30" y="38" textAnchor="middle" fill="#D4A574" fontSize="20" fontFamily="serif" fontWeight="bold">E&C</text>
              </svg>
              {/* Wax drips */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gradient-to-b from-amber-800 to-transparent rounded-b-full opacity-70"/>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating rustic elements */}
      {showPolaroids && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RusticInvitationReveal;
