import { motion } from 'motion/react';
import { INTRO_DATA } from '../data/tutorialData';
import WalleMascot from './WalleMascot';
import { Sparkles, ArrowDown, CheckCircle2 } from 'lucide-react';

export default function HeroIntro() {
  const scrollToFirstStep = () => {
    const el = document.getElementById('step-ai-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 px-4 bg-gradient-to-b from-amber-100/60 via-amber-50/30 to-transparent border-b border-amber-200/50">
      {/* Background Decorative Planets */}
      <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-amber-300/30 blur-xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-sky-300/20 blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Mascot & Greeting Badge */}
        <div className="mb-6 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <WalleMascot
              mood="waving"
              size="lg"
              speechBubble="Chào bạn! Mình là Wall-E đây! 🤖"
            />
          </motion.div>
        </div>

        {/* Hero Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 border border-amber-400/40 font-bold text-sm mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            {INTRO_DATA.subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {INTRO_DATA.title}
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            {INTRO_DATA.description}
          </p>
        </motion.div>

        {/* 4 Superpowers Bento Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mb-10 text-left">
          {INTRO_DATA.reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              className="bg-white/90 p-4 rounded-2xl border-2 border-slate-200/80 shadow-sm flex items-start gap-3.5 hover:border-amber-400 hover:shadow-md transition-all"
            >
              <div className="text-3xl p-2 bg-amber-50 rounded-xl border border-amber-200 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-1 flex items-center gap-1.5">
                  {item.title}
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                </h3>
                <p className="text-slate-600 text-sm leading-snug font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button to Scroll Down */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToFirstStep}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-orange-500/30 flex items-center gap-3 cursor-pointer border-2 border-amber-300 transition-all"
        >
          Bắt đầu Bước 1 ngay!
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
