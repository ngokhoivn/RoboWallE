import { motion } from 'motion/react';
import { Bot, CheckCircle2, RotateCcw, Rocket, Award } from 'lucide-react';

interface NavbarProps {
  completedCount: number;
  totalCount: number;
  onReset: () => void;
  onShowCertificate: () => void;
}

export default function Navbar({
  completedCount,
  totalCount,
  onReset,
  onShowCertificate,
}: NavbarProps) {
  const percentage = Math.round((completedCount / totalCount) * 100);
  const isAllDone = completedCount === totalCount;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl px-4 py-3">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 font-black shadow-md border-2 border-amber-300">
              <Bot className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg md:text-xl tracking-tight text-amber-400 flex items-center gap-1.5">
                WALL-E <span className="text-white font-semibold text-sm bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">10+ tuổi</span>
              </h1>
              <p className="text-xs text-slate-300 font-medium">Hành trình tạo 4 tài khoản</p>
            </div>
          </div>

          {/* Reset button for mobile quick view */}
          <button
            onClick={onReset}
            title="Làm lại từ đầu"
            className="md:hidden text-slate-400 hover:text-amber-400 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Progress Bar Container */}
        <div className="flex items-center gap-4 w-full md:w-auto bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-2 min-w-[110px]">
            <Rocket className={`w-5 h-5 ${isAllDone ? 'text-emerald-400 animate-pulse' : 'text-amber-400'}`} />
            <span className="text-sm font-bold tracking-wide">
              Hoàn thành: <span className={isAllDone ? 'text-emerald-400' : 'text-amber-400'}>{completedCount}/{totalCount}</span>
            </span>
          </div>

          {/* Track */}
          <div className="w-full md:w-48 h-3.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-700/60 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`h-full rounded-full transition-all duration-500 ${
                isAllDone
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]'
                  : 'bg-gradient-to-r from-amber-500 to-orange-400'
              }`}
            />
          </div>

          <span className="text-xs font-black w-9 text-right text-slate-300">
            {percentage}%
          </span>

          {/* Actions */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
            {isAllDone && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onShowCertificate}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-3 py-1 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md animate-bounce"
              >
                <Award className="w-4 h-4" />
                Nhận Bằng!
              </motion.button>
            )}

            <button
              onClick={onReset}
              title="Khôi phục lại danh sách"
              className="hidden md:flex text-slate-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
