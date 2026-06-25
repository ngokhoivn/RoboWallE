import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/tutorialData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-1.5 rounded-full font-extrabold text-sm mb-3">
          <HelpCircle className="w-4 h-4" /> Góc giải đáp thắc mắc
        </div>
        <h2 className="text-3xl font-black text-slate-900">
          Câu hỏi thường gặp (FAQ) 🙋‍♂️
        </h2>
        <p className="text-slate-600 font-bold text-base mt-2">
          Nếu em gặp chút khó khăn ở các bước trên, hãy xem câu trả lời ở đây nhé!
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-200/80 overflow-hidden shadow-sm hover:border-sky-300 transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 text-left font-extrabold text-slate-900 text-lg flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-500 shrink-0"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-3 text-slate-700 font-medium text-base sm:text-lg leading-relaxed border-t border-slate-100 bg-white">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
