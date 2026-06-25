import { motion } from 'motion/react';
import { StepItem } from '../types';
import PlatformMockup from './PlatformMockup';
import {
  Sparkles,
  Github,
  Triangle,
  Box,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface StepCardProps {
  step: StepItem;
  isCompleted: boolean;
  onToggleComplete: (stepId: string) => void;
}

export default function StepCard({
  step,
  isCompleted,
  onToggleComplete,
}: StepCardProps) {
  const getPlatformIcon = (name: string) => {
    switch (name) {
      case 'sparkles':
        return <Sparkles className="w-7 h-7 text-amber-500" />;
      case 'github':
        return <Github className="w-7 h-7 text-slate-900" />;
      case 'triangle':
        return <Triangle className="w-7 h-7 text-sky-500 fill-sky-500" />;
      case 'box':
        return <Box className="w-7 h-7 text-emerald-600" />;
      default:
        return <Sparkles className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <motion.div
      id={step.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl border-4 transition-all duration-300 shadow-xl overflow-hidden mb-12 ${
        isCompleted
          ? 'bg-emerald-50/40 border-emerald-500 shadow-emerald-500/10'
          : `${step.platformColor.bg} ${step.platformColor.border}`
      }`}
    >
      {/* Top Banner Header */}
      <div className="bg-white px-6 py-5 border-b-2 border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-50 rounded-2xl border-2 border-slate-200 shadow-sm shrink-0">
            {getPlatformIcon(step.iconName)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white ${step.platformColor.badgeBg}`}>
                Bước {step.stepNumber}
              </span>
              {isCompleted && (
                <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành!
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {step.platformName}
            </h2>
            <p className="text-slate-600 font-bold text-sm sm:text-base">
              {step.subtitle}
            </p>
          </div>
        </div>

        {/* Direct Register Link Button */}
        <a
          href={step.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-black text-white shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0 text-base ${step.platformColor.badgeBg} ${step.platformColor.btnHover}`}
        >
          {step.registerButtonText}
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Main Body Content */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Intro Description */}
        <p className="text-slate-800 font-semibold text-lg leading-relaxed">
          {step.description}
        </p>

        {/* Visual Mockup / Diagram */}
        <div className="my-4">
          <PlatformMockup type={step.mockupType} />
        </div>

        {/* Step-by-Step Actions Checklist */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-slate-200/80 shadow-sm space-y-3">
          <h3 className="font-black text-slate-900 text-lg flex items-center gap-2 border-b border-slate-100 pb-3">
            📋 Các thao tác em cần làm:
          </h3>
          <ul className="space-y-3">
            {step.actions.map((act, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium text-base sm:text-lg leading-snug">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-300">
                  {idx + 1}
                </span>
                <div>
                  {act.text}
                  {act.highlight && (
                    <strong className="bg-amber-200/80 text-slate-950 px-2 py-0.5 rounded-lg border border-amber-300 mx-1 font-mono font-black select-all">
                      {act.highlight}
                    </strong>
                  )}
                  {act.textAfter}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Note Alert */}
        <div className="bg-amber-100/90 border-2 border-amber-400 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-amber-950">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5 animate-pulse" />
          <div className="text-base font-bold leading-snug">
            {step.importantNote}
          </div>
        </div>

        {/* Special Tip (e.g. Antigravity IDE recommendation) */}
        {step.tip && (
          <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border-2 border-indigo-300 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-indigo-500 text-white rounded-xl shadow shrink-0">
                <Lightbulb className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h4 className="font-extrabold text-indigo-950 text-base sm:text-lg">
                  {step.tip.title}
                </h4>
                <p className="text-indigo-900 text-sm sm:text-base font-medium mt-1">
                  {step.tip.content}
                </p>
              </div>
            </div>
            {step.tip.url && (
              <a
                href={step.tip.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-4 py-2.5 rounded-xl text-sm whitespace-nowrap flex items-center gap-1.5 shadow shrink-0"
              >
                {step.tip.urlText}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {/* Big Action Completion Button */}
        <div className="pt-4 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onToggleComplete(step.id)}
            className={`w-full sm:w-auto min-w-[280px] py-4 px-8 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl transition-all cursor-pointer border-2 ${
              isCompleted
                ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 border-emerald-300 shadow-emerald-500/20'
                : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700 shadow-slate-900/20'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 ${isCompleted ? 'bg-slate-950 text-emerald-400 border-slate-950' : 'border-white/60 bg-transparent'}`}>
              {isCompleted && <CheckCircle2 className="w-5 h-5" />}
            </div>
            <span>{isCompleted ? 'Tôi đã làm xong rồi!' : 'Nhấn vào đây khi em đã làm xong'}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
