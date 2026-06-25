import React from 'react';
import { Sparkles, Github, Play, Box, Terminal, Globe, ArrowRight } from 'lucide-react';

interface MockupProps {
  type: 'ai-studio' | 'github' | 'vercel' | 'onshape';
}

export default function PlatformMockup({ type }: MockupProps) {
  if (type === 'ai-studio') {
    return (
      <div className="w-full bg-slate-950 rounded-2xl p-4 border-2 border-slate-800 text-slate-200 shadow-inner font-mono text-xs md:text-sm overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Google AI Studio</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 flex flex-col gap-2">
          <div className="text-slate-400 text-xs">✨ Chào mừng em đến với AI Studio! Nhấn nút bên dưới để tạo dự án mới:</div>
          <div className="flex items-center justify-between bg-slate-800/80 p-2.5 rounded-lg border border-amber-500/40">
            <span className="font-sans font-bold text-white text-base">Tên dự án: <span className="text-amber-400 underline">walle-robot</span></span>
            <span className="bg-amber-500 text-slate-950 font-sans font-extrabold px-3 py-1 rounded shadow text-xs animate-pulse">Get Started</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'github') {
    return (
      <div className="w-full bg-slate-900 rounded-2xl p-4 border-2 border-slate-800 text-slate-200 shadow-inner text-xs md:text-sm overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="flex items-center gap-2 font-bold text-white">
            <Github className="w-4 h-4" />
            <span>Create a new repository</span>
          </div>
          <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Free Plan</span>
        </div>
        <div className="space-y-2.5 font-sans">
          <div>
            <label className="text-slate-400 text-xs block mb-1">Repository name *</label>
            <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-lg border border-slate-700 font-mono text-emerald-400 font-bold text-base">
              <span>walle-web</span>
              <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 ml-auto font-sans">Available ✔️</span>
            </div>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>Gợi ý: Dùng <strong className="text-amber-300">Antigravity IDE</strong> để đẩy code lên đây cực nhanh!</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'vercel') {
    return (
      <div className="w-full bg-slate-950 rounded-2xl p-4 border-2 border-sky-900/60 text-slate-200 shadow-inner text-xs md:text-sm overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="flex items-center gap-2 font-bold text-white">
            <Globe className="w-4 h-4 text-sky-400" />
            <span>Vercel Deploy Ship</span>
          </div>
          <span className="text-xs bg-sky-950 text-sky-300 border border-sky-800 px-2 py-0.5 rounded">Connected</span>
        </div>
        <div className="bg-gradient-to-r from-slate-900 to-slate-850 p-3 rounded-xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-semibold">Git Repository:</span>
            <span className="font-mono font-bold text-sky-400">github.com/em/walle-web</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-full w-full animate-pulse"></div>
            </div>
            <span className="text-sky-400 font-black text-xs shrink-0">100%</span>
          </div>
          <div className="text-center pt-1">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60 text-xs">
              🎉 Live URL: https://walle-web.vercel.app
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'onshape') {
    return (
      <div className="w-full bg-slate-900 rounded-2xl p-4 border-2 border-emerald-900/60 text-slate-200 shadow-inner text-xs md:text-sm overflow-hidden select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="flex items-center gap-2 font-bold text-emerald-400">
            <Box className="w-4 h-4" />
            <span>Onshape 3D CAD Studio</span>
          </div>
          <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-semibold">Education Plan</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="font-bold text-slate-300 border-b border-slate-800 pb-1">Chi tiết 3D:</div>
            <div>⚙️ Bánh xích trái</div>
            <div>⚙️ Bánh xích phải</div>
            <div>🦾 Cánh tay kẹp</div>
            <div className="text-amber-400 font-semibold">🤖 Mắt ống nhòm</div>
          </div>
          <div className="col-span-2 bg-slate-950 rounded-lg border border-slate-800 p-3 flex flex-col items-center justify-center relative min-h-[100px]">
            <div className="w-12 h-12 border-4 border-emerald-500 rounded-xl transform rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-spin" style={{ animationDuration: '10s' }}>
              <div className="w-6 h-6 bg-amber-500 rounded"></div>
            </div>
            <span className="text-xs text-slate-400 mt-3 font-mono">Xưởng in 3D sẵn sàng</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
