import { StepItem, FaqItem, TeacherInfo } from '../types';

export const INTRO_DATA = {
  title: 'Khám phá Vũ trụ Robotics cùng Wall-E! 🤖✨',
  subtitle: 'Chào mừng nhà sáng chế tương lai từ 10 tuổi trở lên!',
  description: 'Để robot Wall-E thông minh có thể di chuyển, suy nghĩ và hiển thị lên internet, chúng mình cần chuẩn bị bộ "công cụ siêu năng lực" gồm 4 tài khoản miễn phí. Hãy cùng chuẩn bị hành trang trước khi bước vào xưởng chế tạo nhé!',
  reasons: [
    { icon: '🧠', title: 'Google AI Studio', desc: 'Nơi tạo ra "bộ não AI" và lập trình trang web điều khiển.' },
    { icon: '📦', title: 'GitHub', desc: 'Chiếc "két sắt vũ trụ" lưu trữ an toàn toàn bộ mã nguồn code.' },
    { icon: '🚀', title: 'Vercel', desc: 'Trạm phóng đưa trang web của em bay lên internet cho cả thế giới xem.' },
    { icon: '📐', title: 'Onshape', desc: 'Xưởng cơ khí 3D để thiết kế vỏ giáp và xuất file in 3D cho Wall-E.' },
  ],
};

export const STEPS_DATA: StepItem[] = [
  {
    id: 'step-ai-studio',
    stepNumber: 1,
    title: 'Bước 1: Đăng ký Google AI Studio',
    subtitle: 'Tạo "Bộ não thông minh" cho robot',
    platformName: 'Google AI Studio',
    platformColor: {
      bg: 'bg-amber-50',
      border: 'border-amber-400',
      text: 'text-amber-900',
      badgeBg: 'bg-amber-500',
      btnHover: 'hover:bg-amber-600',
    },
    iconName: 'sparkles',
    registerUrl: 'https://aistudio.google.com/',
    registerButtonText: 'Đến Google AI Studio ngay',
    description: 'Đây là công cụ cực kỳ mạnh mẽ của Google. Các em sẽ dùng trang này để ra lệnh cho AI giúp mình viết code trang web điều khiển Wall-E sau này.',
    actions: [
      { text: 'Nhấn nút "Đến Google AI Studio ngay" ở bên dưới để mở trang web.' },
      { text: 'Đăng nhập bằng tài khoản Gmail của em (hoặc Gmail của bố mẹ nếu được phép).' },
      { text: 'Khi vào màn hình chính, nhấn vào nút ', highlight: '"Get started" hoặc "Create new project".' },
      { text: 'Đặt tên cho dự án mới của mình là: ', highlight: 'walle-robot' },
      { text: 'Nhấn "Save" (Lưu) lại để sẵn sàng cho buổi học code tiếp theo!' }
    ],
    importantNote: '📌 Lưu ý cực kỳ quan trọng: Nếu hệ thống hỏi tuổi hoặc yêu cầu xác nhận, hãy nhờ bố mẹ nhập Gmail của bố mẹ để bảo mật nhé!',
    mockupType: 'ai-studio',
  },
  {
    id: 'step-github',
    stepNumber: 2,
    title: 'Bước 2: Tạo kho lưu trữ trên GitHub',
    subtitle: 'Chiếc balo đựng toàn bộ code của Wall-E',
    platformName: 'GitHub',
    platformColor: {
      bg: 'bg-slate-100',
      border: 'border-slate-800',
      text: 'text-slate-900',
      badgeBg: 'bg-slate-900',
      btnHover: 'hover:bg-slate-800',
    },
    iconName: 'github',
    registerUrl: 'https://github.com/signup',
    registerButtonText: 'Mở trang đăng ký GitHub',
    description: 'GitHub giống như một chiếc két sắt thần kỳ trên mây. Mỗi khi em viết được một đoạn code hay, GitHub sẽ cất giữ giúp em để không bao giờ bị mất.',
    actions: [
      { text: 'Vào trang GitHub, điền Email của em và bấm ', highlight: 'Continue.' },
      { text: 'Tạo một mật khẩu thật mạnh (có cả chữ hoa, chữ thường và số).' },
      { text: 'Chọn một tên người dùng (Username) thật ngầu, ví dụ: ', highlight: 'siêu-nhân-walle-2014' },
      { text: 'Giải câu đố xoay hình động vật để chứng minh em là người thật (không phải robot xấu!).' },
      { text: 'Mở hòm thư Email, lấy ', highlight: 'mã số 6 chữ số' , textAfter: ' GitHub gửi tới để nhập vào màn hình xác minh.' },
      { text: 'Khi được hỏi chọn gói dịch vụ, hãy bấm bấm chọn ', highlight: 'Continue vì Free (Gói Miễn Phí).' },
      { text: 'Tạo một Repository (Kho mới) và đặt tên là: ', highlight: 'walle-web' }
    ],
    importantNote: '✍️ Bí kíp sổ tay: Hãy lấy bút ghi ngay Username và Mật khẩu GitHub vào trang đầu tiên trong vở học robotics của em!',
    tip: {
      title: '💡 Gợi ý siêu xịn cho các kỹ sư code:',
      content: 'Để tiện lợi nhất trong quá trình viết code, chỉnh sửa, lưu trữ (commit) và đẩy lên GitHub (push) nhanh chóng, thầy cô khuyên các em nên tải phần mềm Antigravity IDE về máy tính!',
      url: 'https://antigravity.google.com/',
      urlText: 'Tìm hiểu Antigravity IDE'
    },
    mockupType: 'github',
  },
  {
    id: 'step-vercel',
    stepNumber: 3,
    title: 'Bước 3: Kết nối trạm phát sóng Vercel',
    subtitle: 'Đưa trang web của em lên mạng Internet',
    platformName: 'Vercel',
    platformColor: {
      bg: 'bg-sky-50',
      border: 'border-sky-500',
      text: 'text-sky-950',
      badgeBg: 'bg-sky-600',
      btnHover: 'hover:bg-sky-700',
    },
    iconName: 'triangle',
    registerUrl: 'https://vercel.com/signup',
    registerButtonText: 'Đến bệ phóng Vercel',
    description: 'Vercel là bệ phóng siêu tốc! Khi em bấm nút, Vercel sẽ lấy code từ GitHub và biến nó thành một đường link thật (như walle.vercel.app) để em gửi cho ông bà, bạn bè cùng bấm vào xem.',
    actions: [
      { text: 'Nhấn nút mở trang Vercel bên dưới.' },
      { text: 'Ở màn hình đăng ký, bấm chọn nút ', highlight: 'Continue with GitHub' , textAfter: ' (rất tiện lợi vì không cần tạo mật khẩu mới!).' },
      { text: 'Nhấn nút "Authorize Vercel" màu xanh lá để đồng ý cho Vercel kết nối với GitHub của em.' },
      { text: 'Chọn kho tài liệu ', highlight: 'walle-web' , textAfter: ' mà em vừa tạo ở Bước 2.' },
      { text: 'Bấm nút ', highlight: 'Deploy' , textAfter: ' và ngồi đếm ngược 10 giây nhìn pháo hoa nổ!' },
      { text: 'Copy đường link trang web trực tuyến đầu tiên của đời em!' }
    ],
    importantNote: '🌟 Điều kỳ diệu: Ngay lúc này trang web của em đã có mặt trên Internet toàn cầu rồi đấy! Dù trang web tạm thời còn trống, buổi học tới chúng mình sẽ "bơm" đầy hình ảnh Wall-E vào nhé.',
    mockupType: 'vercel',
  },
  {
    id: 'step-onshape',
    stepNumber: 4,
    title: 'Bước 4: Mở xưởng cơ khí 3D Onshape',
    subtitle: 'Thiết kế bánh xích, cánh tay và mắt cho Wall-E',
    platformName: 'Onshape',
    platformColor: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-500',
      text: 'text-emerald-950',
      badgeBg: 'bg-emerald-600',
      btnHover: 'hover:bg-emerald-700',
    },
    iconName: 'box',
    registerUrl: 'https://www.onshape.com/en/education/plan',
    registerButtonText: 'Đăng ký Onshape Education',
    description: 'Onshape giống như trò chơi xếp hình Lego 3D nhưng chuyên nghiệp hơn! Em có thể xoay góc nhìn 360 độ, đo đạc kích thước từng con ốc và xuất ra file cho máy in 3D nhựa nhựa tạo thành hình thật.',
    actions: [
      { text: 'Vào trang Onshape Education (Dành cho học sinh).' },
      { text: 'Điền tên của em, họ của em và Email.' },
      { text: 'Ở ô "What is your status", hãy bấm chọn ', highlight: 'Student (Học sinh).' },
      { text: 'Chọn cấp học là ', highlight: 'K-12 (Học sinh phổ thông).' },
      { text: 'Mở Email, bấm vào nút ', highlight: 'Activate Your Account' , textAfter: ' trong thư của Onshape gửi tới.' },
      { text: 'Tạo mật khẩu mới và bấm tạo ', highlight: 'Workspace đầu tiên.' },
      { text: 'Thử dùng chuột trái để xoay khối lập phương 3D giữa màn hình xem thú vị không nào!' }
    ],
    importantNote: '🎯 Mẹo nhỏ cho kỹ sư cơ khí: Onshape chạy mượt nhất trên trình duyệt Google Chrome ở máy tính. Em nhớ dùng máy tính có chuột rời để vẽ 3D dễ dàng hơn nhé!',
    mockupType: 'onshape',
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: '1. Em chưa có tài khoản Gmail riêng thì phải làm sao?',
    answer: 'Không sao cả! Em hãy nói chuyện với bố mẹ: "Bố mẹ ơi, con đang tham gia dự án làm robot Wall-E, bố mẹ cho con mượn Gmail hoặc giúp con tạo một Gmail mới tên con nhé!". Các nền tảng công nghệ rất hoan nghênh các bạn nhỏ học tập dưới sự đồng ý của phụ huynh.',
    icon: '📧',
  },
  {
    question: '2. Em đợi mãi mà không thấy Email xác nhận gửi về?',
    answer: 'Em hãy kiểm tra trong mục "Hộp thư rác" (Spam) hoặc mục "Quảng cáo" (Promotions) trong Gmail nhé. Đôi khi các thư tự động đi lạc vào đó. Nếu vẫn không thấy sau 5 phút, em bấm lại nút "Resend email" trên trang đăng ký.',
    icon: '⏳',
  },
  {
    question: '3. Tại sao mật khẩu GitHub cứ báo lỗi màu đỏ?',
    answer: 'GitHub rất nghiêm ngặt để bảo vệ code của em! Mật khẩu đúng yêu cầu phải dài ít nhất 8 ký tự, có đủ: Chữ cái thường (a, b, c), Chữ cái viết hoa (A, B, C) và Số (1, 2, 3). Ví dụ mật khẩu chuẩn: Robotwalle2026',
    icon: '🔑',
  },
  {
    question: '4. Em lỡ bấm tắt trang web giữa chừng, có bị mất các bước đã tích xong không?',
    answer: 'Hoàn toàn không mất! Robot Wall-E đã tự động ghi nhớ tiến độ của em vào bộ nhớ máy tính (Local Storage). Khi em bật lại trang web này, thanh tiến trình vẫn sẽ giữ nguyên số bước em đã hoàn thành!',
    icon: '💾',
  },
  {
    question: '5. Thầy cô ơi, em bấm "Deploy" trên Vercel bị báo lỗi Failed?',
    answer: 'Đừng lo lắng! Hãy chụp ảnh màn hình lỗi đó gửi vào nhóm Zalo lớp học robotics hoặc gửi Email cho thầy cô ở phần liên hệ phía dưới, thầy cô sẽ hỗ trợ em "gỡ rối" chỉ trong 30 giây!',
    icon: '🛠️',
  }
];

export const TEACHER_INFO: TeacherInfo = {
  name: 'Thầy Khôi & Đội ngũ Kỹ sư Wall-E',
  email: 'ngokhoivn@gmail.com',
  zaloOrPhone: 'Nhóm Hỗ trợ Wall-E Robotics',
  schedule: 'Tư vấn trực tuyến: 19:00 - 21:00 hàng ngày',
};
