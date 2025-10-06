import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music, Flower2, Leaf } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-[#fff8f0] dark:bg-[#2a1f1a] rounded-sm p-8 md:p-12 max-w-lg w-full mx-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-4 border-double border-[#e67e22] dark:border-[#f39c12] relative overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(230, 126, 34, 0.03) 1px, transparent 1px),
                linear-gradient(rgba(230, 126, 34, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          >
            {/* Decorative corner flourishes */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-[#e67e22] dark:border-[#f39c12] opacity-40"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-[#e67e22] dark:border-[#f39c12] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l-4 border-b-4 border-[#e67e22] dark:border-[#f39c12] opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-[#e67e22] dark:border-[#f39c12] opacity-40"></div>
            
            {/* Decorative leaf elements */}
            <motion.div
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.15 }}
              transition={{ delay: 0.3 }}
              className="absolute top-8 left-8"
            >
              <Leaf className="w-12 h-12 text-[#e67e22] dark:text-[#f39c12]" />
            </motion.div>
            <motion.div
              initial={{ rotate: 20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.15 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 right-8"
            >
              <Flower2 className="w-12 h-12 text-[#e67e22] dark:text-[#f39c12]" />
            </motion.div>
            
            <div className="relative text-center space-y-6">
              {/* Divider line above icon */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#e67e22] dark:to-[#f39c12]"></div>
                <Flower2 className="w-4 h-4 text-[#e67e22] dark:text-[#f39c12]" />
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#e67e22] dark:to-[#f39c12]"></div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="bg-gradient-to-br from-[#e67e22] to-[#f39c12] dark:from-[#f39c12] dark:to-[#f5a962] p-5 rounded-full shadow-lg border-2 border-[#d35400] dark:border-[#fbbf24]">
                  <Music className="h-10 w-10 text-white" />
                </div>
              </motion.div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#d35400] dark:text-[#fbbf24] font-serif tracking-wide">
                  A Musical Journey
                </h2>
                
                {/* Divider */}
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[1px] w-12 bg-[#e67e22] dark:bg-[#f39c12]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e67e22] dark:bg-[#f39c12]"></div>
                  <div className="h-[1px] w-12 bg-[#e67e22] dark:bg-[#f39c12]"></div>
                </div>

                <p className="text-[#6b4423] dark:text-[#f5dcc0] leading-relaxed text-base md:text-lg font-serif italic px-4">
                  Would you like to play music to explore more of our wedding invitation?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  onClick={() => handleConsent(true)}
                  className="flex-1 bg-gradient-to-r from-[#e67e22] to-[#f39c12] hover:from-[#d35400] hover:to-[#e67e22] text-white font-bold py-5 px-6 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-xl text-base border-2 border-[#d35400] dark:border-[#f5a962]"
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="outline"
                  className="flex-1 border-2 border-[#e67e22] dark:border-[#f39c12] hover:border-[#d35400] dark:hover:border-[#f5a962] text-[#6b4423] dark:text-[#f5dcc0] hover:text-[#d35400] dark:hover:text-[#fbbf24] bg-transparent hover:bg-[#fff3e6] dark:hover:bg-[#3d2f1f] font-medium py-5 px-6 rounded-sm transition-all duration-300 text-base"
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>

              {/* Bottom decorative element */}
              <div className="flex items-center justify-center gap-2 pt-4">
                <Leaf className="w-3 h-3 text-[#e67e22] dark:text-[#f39c12] opacity-50" />
                <div className="w-1 h-1 rounded-full bg-[#e67e22] dark:bg-[#f39c12] opacity-50"></div>
                <Leaf className="w-3 h-3 text-[#e67e22] dark:text-[#f39c12] opacity-50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;