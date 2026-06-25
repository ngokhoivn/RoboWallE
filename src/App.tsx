import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroIntro from './components/HeroIntro';
import StepCard from './components/StepCard';
import FaqAccordion from './components/FaqAccordion';
import TeacherContact from './components/TeacherContact';
import CertificateModal from './components/CertificateModal';
import { STEPS_DATA } from './data/tutorialData';

const STORAGE_KEY = 'walle_tutorial_completed_steps_v1';

export default function App() {
  const [completedSteps, setCompletedSteps] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedSteps));
    } catch (err) {
      console.error('Failed to save progress', err);
    }
  }, [completedSteps]);

  // Trigger celebration popup when reaching 4/4
  useEffect(() => {
    if (completedSteps.length === STEPS_DATA.length) {
      // Small delay for smooth UX
      const timer = setTimeout(() => {
        setIsCertificateOpen(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [completedSteps]);

  const handleToggleStep = (stepId: string) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId) ? prev.filter((id) => id !== stepId) : [...prev, stepId]
    );
  };

  const handleResetProgress = () => {
    if (window.confirm('Em có chắc chắn muốn bỏ tích toàn bộ các bước để bắt đầu làm lại từ đầu không?')) {
      setCompletedSteps([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-300 selection:text-slate-950">
      {/* Top Progress Navbar */}
      <Navbar
        completedCount={completedSteps.length}
        totalCount={STEPS_DATA.length}
        onReset={handleResetProgress}
        onShowCertificate={() => setIsCertificateOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1">
        {/* Bước 0: Giới thiệu dự án Wall-E */}
        <HeroIntro />

        {/* Danh sách 4 Bước Hướng dẫn */}
        <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Hành trình 4 Bước Đăng ký Tài khoản 🛠️
            </h2>
            <p className="text-slate-600 font-bold mt-1 text-base sm:text-lg">
              Hãy làm tuần tự từ Bước 1 đến Bước 4. Làm xong bước nào, bấm tích xong bước đó nhé!
            </p>
          </div>

          <div className="space-y-4">
            {STEPS_DATA.map((step) => (
              <StepCard
                key={step.id}
                step={step}
                isCompleted={completedSteps.includes(step.id)}
                onToggleComplete={handleToggleStep}
              />
            ))}
          </div>
        </div>

        {/* Góc giải đáp thắc mắc FAQ */}
        <FaqAccordion />
      </main>

      {/* Footer Liên hệ Thầy cô */}
      <TeacherContact />

      {/* Popup chúc mừng & Bằng khen khi xong 4/4 */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </div>
  );
}
