import { TEACHER_INFO } from '../data/tutorialData';
import WalleMascot from './WalleMascot';
import { Mail, MessageCircle, Heart, LifeBuoy } from 'lucide-react';

export default function TeacherContact() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 px-4 border-t-8 border-amber-500 relative overflow-hidden">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Wall-E Mascot */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <WalleMascot mood="happy" size="md" className="mb-4" />
          <p className="text-amber-400 font-extrabold text-lg">Wall-E Robotics Project</p>
          <p className="text-slate-400 text-xs mt-1">Nơi ươm mầm tài năng STEM 10+</p>
        </div>

        {/* Need Help Box */}
        <div className="md:col-span-2 bg-slate-800/90 p-6 sm:p-8 rounded-3xl border-2 border-slate-700 shadow-xl relative">
          <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-black px-3.5 py-1 rounded-full text-xs uppercase mb-3">
            <LifeBuoy className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} /> Nhờ giúp đỡ
          </div>
          <h3 className="text-2xl font-black text-white mb-2">
            Em cần thầy cô hướng dẫn thêm?
          </h3>
          <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed mb-6">
            Nếu em đã thử đọc FAQ mà vẫn chưa đăng ký được, đừng ngần ngại nhắn tin hoặc gửi Email nhé. Các thầy cô luôn sẵn lòng giúp đỡ em!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${TEACHER_INFO.email}?subject=Nhờ hỗ trợ tài khoản Wall-E`}
              className="flex items-center gap-3 bg-slate-900 hover:bg-slate-950 text-amber-400 px-5 py-3.5 rounded-2xl font-black text-base border border-amber-500/40 transition-colors shadow"
            >
              <Mail className="w-5 h-5 text-amber-500" />
              <span>{TEACHER_INFO.email}</span>
            </a>

            <div className="flex items-center gap-3 bg-slate-900/60 px-5 py-3.5 rounded-2xl font-bold text-slate-200 text-base border border-slate-700">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>{TEACHER_INFO.zaloOrPhone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Encouraging Quote Footer */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-xs sm:text-sm font-semibold flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center justify-center gap-1.5">
          Thiết kế với <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> dành riêng cho các nhà sáng chế nhỏ tuổi.
        </p>
        <p className="text-slate-500">
          © 2026 Wall-E Robotics Course
        </p>
      </div>
    </footer>
  );
}
