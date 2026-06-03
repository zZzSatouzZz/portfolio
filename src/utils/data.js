// ============================================================
// data.js — Toàn bộ dữ liệu CV của Nguyễn Phương Văn
// Sửa file này để cập nhật thông tin portfolio
// ============================================================

export const PROFILE = {
  name: 'Nguyễn Phương Văn',
  nameEn: 'Nguyen Phuong Van',
  title: 'Full Stack Developer',
  tagline: 'Building impactful web experiences',
  bio: 'Aspiring Full Stack Developer với nền tảng vững chắc về ReactJS, Node.js và MySQL. Đam mê học hỏi, cải thiện và đóng góp vào các dự án công nghệ có tác động thực tế.',
  email: 'npvan21122003@gmail.com',
  github: 'https://github.com/zZzSatouzZz',
  phone: '0962391360',
  location: 'Văn Lâm, Hưng Yên',
  avatar: '',
  education: {
    school: 'ĐH Kinh tế Kỹ thuật Công nghiệp HN',
    major: 'Công nghệ Thông tin',
    period: '2021 – 2025',
    gpa: '2.7 / 4.0',
  },
  stats: [
    { value: '1+', label: 'Năm kinh nghiệm' },
    { value: '2+', label: 'Projects' },
    { value: '100%', label: 'Tận tâm' },
  ],
};

export const SKILLS = [
  // Frontend
  { name: 'ReactJS',      level: 85, cat: 'Frontend' },
  { name: 'JavaScript',   level: 80, cat: 'Frontend' },
  { name: 'HTML & CSS',   level: 88, cat: 'Frontend' },
  { name: 'Figma',        level: 70, cat: 'Frontend' },
  // Backend
  { name: 'Node.js',      level: 80, cat: 'Backend'  },
  { name: 'Express.js',   level: 80, cat: 'Backend'  },
  { name: 'REST API',     level: 82, cat: 'Backend'  },
  { name: 'JWT & Auth',   level: 75, cat: 'Backend'  },
  // Database
  { name: 'MySQL',        level: 78, cat: 'Database' },
  { name: 'MongoDB',      level: 65, cat: 'Database' },
  // Other
  { name: 'Git',          level: 82, cat: 'Tools'    },
  { name: 'C/C++',        level: 72, cat: 'Other'    },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Student Management System',
    subtitle: 'Full Stack · Solo Developer',
    desc: 'Hệ thống quản lý sinh viên full-stack phát triển độc lập — ReactJS responsive UI, REST API với ExpressJS + MySQL, JWT auth, CRUD đầy đủ, dashboard thống kê với biểu đồ.',
    tech: ['ReactJS', 'Node.js', 'ExpressJS', 'MySQL', 'JWT', 'Axios', 'Zod'],
    github: 'https://github.com/zZzSatouzZz/student-management.git',
    demo: null,
    period: '06/2024 – nay',
    featured: true,
    color: '#00FF88',
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    subtitle: 'Frontend · Solo Developer',
    desc: 'Website portfolio cá nhân giới thiệu bản thân, kỹ năng và dự án. UI hiện đại tối ưu UX, responsive đa thiết bị, tích hợp contact section.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    github: 'https://github.com/zZzSatouzZz',
    demo: null,
    period: '04/2025 – nay',
    featured: true,
    color: '#FF3366',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Embedded Programming Technician',
    company: 'Acecook Vietnam',
    location: 'Hưng Yên Factory',
    period: '06/2025 – Hiện tại',
    type: 'Full-time',
    points: [
      'Phát triển & bảo trì phần mềm nhúng cho hệ thống dây chuyền sản xuất',
      'Lập trình C/C++ trên vi điều khiển, xử lý tín hiệu cảm biến',
      'Debug, tối ưu hiệu năng và đảm bảo ổn định hệ thống',
      'Làm việc Agile với hardware engineers và QA',
    ],
  },
];

export const TECH_MARQUEE = [
  'ReactJS', 'Node.js', 'Express', 'MySQL', 'MongoDB',
  'JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'JWT', 'REST API', 'C/C++',
  'ReactJS', 'Node.js', 'Express', 'MySQL', 'MongoDB',
  'JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'JWT', 'REST API', 'C/C++',
];
