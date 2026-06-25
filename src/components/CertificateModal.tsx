import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import WalleMascot from './WalleMascot';
import { Award, Download, Sparkles, X, Heart, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  isOpen,
  onClose,
}: CertificateModalProps) {
  const [studentName, setStudentName] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger festive confetti cannons
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899']
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isOpen]);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      setIsSaved(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', damping: 20 }}
          className="relative w-full max-w-2xl bg-[#FFFBEB] border-8 border-amber-400 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-w-full"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-amber-200 hover:bg-amber-300 text-amber-900 p-2 rounded-full font-bold transition-colors print:hidden"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Festive Background Watermarks */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none" />

          {/* Certificate Header Content */}
          <div className="text-center space-y-3 relative z-10">
            <div className="flex justify-center mb-2">
              <WalleMascot mood="cheering" size="md" />
            </div>

            <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-4 py-1.5 rounded-full font-black text-sm uppercase tracking-wider shadow">
              <Sparkles className="w-4 h-4" /> Chứng nhận siêu năng lực <Sparkles className="w-4 h-4" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              CHÚC MỪNG NHÀ SÁNG CHẾ!
            </h2>

            <p className="text-slate-700 font-bold text-base md:text-lg max-w-lg mx-auto">
              Robot Wall-E xin trân trọng xác nhận bạn đã tự tay đăng ký thành công 4 tài khoản công nghệ cốt lõi của dự án!
            </p>

            {/* Student Name Generator Box */}
            <div className="my-8 py-6 px-4 bg-white border-4 border-dashed border-amber-400 rounded-2xl shadow-inner">
              {!isSaved ? (
                <form onSubmit={handleSaveName} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto print:hidden">
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ tên của em vào đây..."
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-300 font-extrabold text-lg text-slate-900 focus:border-amber-500 focus:outline-none text-center sm:text-left"
                  />
                  <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-6 py-3 rounded-xl text-base shadow transition-transform active:scale-95 whitespace-nowrap cursor-pointer"
                  >
                    Ghi tên lên bằng
                  </button>
                </form>
              ) : (
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Trao tặng kỹ sư:</span>
                  <div className="text-3xl md:text-4xl font-black text-amber-600 tracking-wide font-sans py-1">
                    {studentName}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành 4/4 bước chuẩn bị
                  </div>
                </div>
              )}
            </div>

            {/* Footer Signatures */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-amber-200 text-slate-800 text-sm font-bold">
              <div>
                <p className="text-xs text-slate-500">Đại diện dự án</p>
                <p className="font-black text-base text-slate-900 mt-1">Robot Wall-E 🤖</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Tháng Chế Tạo</p>
                <p className="font-black text-base text-slate-900 mt-1">Năm 2026</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 flex flex-wrap justify-center gap-3 print:hidden">
              {isSaved && (
                <button
                  onClick={handlePrint}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-black px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
                >
                  <Download className="w-5 h-5 text-amber-400" />
                  In / Lưu bằng khen PDF
                </button>
              )}
              <button
                onClick={onClose}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-extrabold px-6 py-3 rounded-xl"
              >
                Quay lại xưởng code
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
