import { motion } from 'motion/react';

interface WalleMascotProps {
  mood?: 'happy' | 'waving' | 'excited' | 'cheering';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  speechBubble?: string;
}

export default function WalleMascot({
  mood = 'happy',
  size = 'md',
  className = '',
  speechBubble
}: WalleMascotProps) {
  const sizeMap = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-44 h-44',
    xl: 'w-60 h-60',
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble */}
      {speechBubble && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3 bg-white border-4 border-amber-400 text-slate-800 px-4 py-2.5 rounded-2xl shadow-lg relative max-w-xs text-center font-bold text-base md:text-lg z-10"
        >
          {speechBubble}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-[12px] border-t-amber-400"></div>
          <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-[10px] border-t-white"></div>
        </motion.div>
      )}

      {/* Robot SVG Illustration */}
      <motion.div
        animate={
          mood === 'waving'
            ? { y: [0, -6, 0], rotate: [0, 2, -2, 0] }
            : mood === 'excited'
            ? { y: [0, -12, 0], scale: [1, 1.05, 1] }
            : { y: [0, -4, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: mood === 'excited' ? 1.5 : 2.5,
          ease: 'easeInOut',
        }}
        className={`${sizeMap[size]} relative flex items-center justify-center`}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
          {/* Tank Tracks Left */}
          <rect x="25" y="140" width="35" height="45" rx="12" fill="#334155" />
          <rect x="30" y="145" width="25" height="35" rx="8" fill="#1e293b" />
          <circle cx="42" cy="155" r="5" fill="#64748b" />
          <circle cx="42" cy="170" r="5" fill="#64748b" />

          {/* Tank Tracks Right */}
          <rect x="140" y="140" width="35" height="45" rx="12" fill="#334155" />
          <rect x="145" y="145" width="25" height="35" rx="8" fill="#1e293b" />
          <circle cx="158" cy="155" r="5" fill="#64748b" />
          <circle cx="158" cy="170" r="5" fill="#64748b" />

          {/* Main Body Chassis */}
          <rect x="45" y="90" width="110" height="70" rx="16" fill="#f59e0b" stroke="#d97706" strokeWidth="4" />
          {/* Chest Plate Detail */}
          <rect x="60" y="102" width="80" height="45" rx="8" fill="#fbbf24" />
          {/* Solar Panel Lines on Chest */}
          <line x1="80" y1="102" x2="80" y2="147" stroke="#d97706" strokeWidth="2" strokeDasharray="3,3" />
          <line x1="100" y1="102" x2="100" y2="147" stroke="#d97706" strokeWidth="2" strokeDasharray="3,3" />
          <line x1="120" y1="102" x2="120" y2="147" stroke="#d97706" strokeWidth="2" strokeDasharray="3,3" />
          
          {/* Red Power Button */}
          <circle cx="125" cy="115" r="5" fill="#ef4444" className="animate-pulse" />
          {/* Green Status LED */}
          <circle cx="75" cy="115" r="4" fill="#10b981" />

          {/* Neck */}
          <rect x="92" y="65" width="16" height="28" fill="#64748b" rx="4" />
          <rect x="85" y="75" width="30" height="6" fill="#475569" rx="2" />

          {/* Binocular Eye Left */}
          <g transform="rotate(-6 75 50)">
            <rect x="52" y="35" width="46" height="35" rx="12" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
            <circle cx="75" cy="52" r="12" fill="#0f172a" />
            <circle cx="78" cy="48" r="4" fill="#38bdf8" />
            <circle cx="72" cy="55" r="2" fill="#ffffff" />
          </g>

          {/* Binocular Eye Right */}
          <g transform="rotate(6 125 50)">
            <rect x="102" y="35" width="46" height="35" rx="12" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
            <circle cx="125" cy="52" r="12" fill="#0f172a" />
            <circle cx="128" cy="48" r="4" fill="#38bdf8" />
            <circle cx="122" cy="55" r="2" fill="#ffffff" />
          </g>

          {/* Waving Arm Right */}
          <motion.g
            style={{ originX: '155px', originY: '110px' }}
            animate={
              mood === 'waving' || mood === 'excited'
                ? { rotate: [0, -35, 10, -35, 0] }
                : { rotate: [0, -10, 0] }
            }
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <rect x="155" y="105" width="30" height="12" rx="6" fill="#f59e0b" stroke="#d97706" strokeWidth="3" />
            {/* Claw */}
            <path d="M 185 102 C 195 102, 195 120, 185 120" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
          </motion.g>

          {/* Static Arm Left */}
          <g transform="rotate(25 45 110)">
            <rect x="15" y="105" width="30" height="12" rx="6" fill="#f59e0b" stroke="#d97706" strokeWidth="3" />
            <path d="M 15 102 C 5 102, 5 120, 15 120" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>

        {/* Floating Sparkles around Wall-E */}
        <motion.div
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute -top-1 right-2 text-xl"
        >
          ✨
        </motion.div>
      </motion.div>
    </div>
  );
}
