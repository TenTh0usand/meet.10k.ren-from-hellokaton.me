import { Icons } from "@/components/icons";
import { HomeIcon, FolderIcon } from "lucide-react";

export const DATA = {
  name: "katon",
  username: "hellokaton",
  initials: "PN",
  url: "https://hellokaton.me",
  location: "China",
  locationLink: "https://www.google.com/maps/place/china",
  description: "热爱编程的全栈开发者，喜欢分享技术，正在独立开发的路上前行。",
  summary:
    ">\n\n" +
    "**社交媒体**  \n" +
    "- 在 GitHub 编写的开源项目收获了 10k+ stars\n" +
    "- 在 YouTube 频道分享了一些技术教程，帮助了 20k+ 开发者\n" +
    "- 在 X 上和 10k+ 朋友分享技术见解和成长心得\n" +
    "- 在小红书用 Veo 创作 ASMR 解压视频，获得 14k 关注\n" +
    "\n" +
    "**工作经历**  \n" +
    ">\n\n" +
    "- 设计过金融交易系统架构，体验过百万级流量的挑战和刺激\n" +
    "- 主导财税 SaaS 平台研发，服务超 10 万商户处理他们的发票和税务难题\n" +
    "- 搭建过集成式开放平台，让企业的各种接口对接变得简单统一\n" +
    "\n" +
    "**项目尝试**  \n" +
    ">\n\n" +
    "- 🚀 bioify.co —— 用 AI 帮你写出更有个性的社交简介\n" +
    "- 🎉 荧数 —— 为社交达人制作粉丝里程碑庆祝动画\n" +
    "- 🧪 namesage —— 帮外国朋友取一个有意义的中文名字\n" +
    "\n" +
    "**AI 图像视频工具**  \n" +
    ">\n\n" +
    "我构建了 [Artifox](https://artifox.app)，一款专为社交媒体和个人 IP 打造的 AI 图像视频工具，帮助内容创作者轻松产出高质量视觉素材。\n" +
    "\n" +
    "---\n" +
    "我是个乐观主义者，相信终身学习的力量，也相信科技能让我们的工作更高效、生活更美好。\n\n" +
    "🤝 很高兴认识你！如果你对技术、产品或独立开发感兴趣，欢迎随时和我聊聊",
  avatarUrl: "/hi.webp",
  skills: [
    "React",
    "Next.js",
    "Vue.js",
    "Typescript",
    "Node.js",
    "Java",
    "SpringBoot",
    "Python",
    "FastAPI",
    "Golang",
    "Gin",
    "Postgres",
    "Git",
    "Linux",
    "RestAPI",
    "AI API",
    "SEO",
  ],
  videos: [],
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "/projects", icon: FolderIcon, label: "作品" },
  ],
  contact: {
    email: "hellokaton@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hellokaton",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hellokaton",
        icon: Icons.x,

        navbar: true,
      },
      Zhihu: {
        name: "知乎",
        url: "https://www.zhihu.com/people/hellokaton",
        icon: Icons.zhihu,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@hellokaton",
        icon: Icons.youtube,
        navbar: true,
      },
      buyMeACoffee: {
        name: "buyMeACoffee",
        url: "https://buymeacoffee.com/hellokaton",
        icon: Icons.buyMeACoffee,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hellokaton@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],

  projects: [
    {
      title: "Bioify",
      href: "https://bioify.co",
      dates: "",
      active: true,
      description:
        "Bioify是一款AI驱动的个人简介生成工具，支持多平台、多语言、多风格的简介定制。一键生成Twitter、Instagram、Tiktok等平台的个性化简介，让你的社交档案脱颖而出。智能AI写作助手，让简介创作更轻松、更专业。",
      technologies: [
        "Next.js",
        "ShadcnUI",
        "Frame motion",
        "React Query",
        "@ai-sdk",
        "hono",
      ],
      links: [
        {
          type: "网站",
          href: "https://bioify.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/bioify_hero.png",
      video: "",
    },
    {
      title: "Github中文区排行",
      href: "https://china-ranking.32k.site",
      dates: "2025/03",
      active: true,
      description:
        "区分中国区 Github 排行榜开发者和 Markdown 工程师，每日更新。",
      technologies: ["Astro", "Tailwindcss", "GithubAction"],
      links: [
        {
          type: "网址",
          href: "https://china-ranking.32k.site",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/china-ranking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/ranking_hero.png",
      video: "",
    },
    {
      title: "荧数",
      href: "https://yingshu.hellokaton.me",
      dates: "2025/02",
      active: true,
      description:
        "一个帮助社交媒体影响者创建关注者达成的里程碑动画，支持多种效果、自定义背景和用户信息。",
      technologies: ["Next.js", "OriginUI", "MagicUI", "canvas-confetti"],
      links: [
        {
          type: "网址",
          href: "https://yingshu.hellokaton.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/yingshu_hero.png",
      video: "",
    },
    {
      title: "NameSage",
      href: "https://namesage.hellokaton.me",
      dates: "2025/01",
      active: true,
      description:
        "一个现代的 Web 应用，帮助非中文母语者创建有意义且文化适宜的中文名字，使用Next.js构建，采用新野蛮主义设计风格。",
      technologies: [
        "Next.js",
        "neobrutalism",
        "framer-motion",
        "react-hook-form",
        "@ai-sdk",
      ],
      links: [
        {
          type: "网站",
          href: "https://namesage.hellokaton.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/namesage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/namesage_hero.png",
      video: "",
    },
    {
      title: "Pixiv 插画下载器",
      href: "https://github.com/hellokaton/pixiv-helper",
      dates: "2024/12",
      active: true,
      description:
        "一个基于 WXT 和 shadcn/ui 构建的 Chrome 扩展，帮助您通过 Alist 下载并同步 Pixiv 插画到云存储。支持不同画质选项的下载，让您轻松管理喜爱的作品。",
      technologies: [
        "React.js",
        "font-awesome",
        "react-icons",
        "react-dom",
        "CSS3",
        "Vite",
        "Git",
      ],
      links: [
        {
          type: "网站",
          href: "https://github.com/hellokaton/pixiv-helper",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/pixiv-helper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://static.hellokaton.me/video/pixiv_helper.mp4",
    },
    {
      title: "字符画生成器",
      href: "https://nes-ascii-app.vercel.app",
      dates: "2025/02",
      active: true,
      description:
        "ASCII 字符画生成器是一款现代化的网页应用，能够将文本转换为精美的 ASCII 艺术字符画。通过四种独特的风格和 AI 驱动的生成技术，为您创造出适合社交媒体、聊天消息或任何文本平台的视觉艺术作品。",
      technologies: ["Nuxt", "nes.css", "@ai-sdk"],
      links: [
        {
          type: "网站",
          href: "https://nes-ascii-app.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/nes-ascii-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://static.hellokaton.me/video/nes_app.mp4",
    },
    {
      title: "Text Polish - 浏览器文本润色扩展",
      href: "https://github.com/hellokaton/text-polish-chrome-extension",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "基于 WXT 和 shadcn/ui 构建的 Chrome 扩展，提供 AI 文本处理能力。选中网页文本即可通过浮动菜单进行翻译、解释或快速复制。",
      technologies: [
        "WXT",
        "shadcn/ui",
        "Lucide React",
        "React Hooks",
        "ofetch",
      ],
      links: [
        {
          type: "网站",
          href: "https://github.com/hellokaton/text-polish-chrome-extension",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/text-polish-chrome-extension",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/text_polish.jpg",
      video: "",
    },
    {
      title: "gorm 分页库",
      href: "https://github.com/hellokaton/text-polish-chrome-extension",
      dates: "2018",
      active: false,
      description: "为 Gin 和 gorm 框架做的分页集成。",
      technologies: ["golang", "gin", "gorm"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/gorm-paginator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/gorm_paginator.png",
      video: "",
    },
    {
      title: "30 seconds of java8",
      href: "https://github.com/hellokaton/30-seconds-of-java8",
      dates: "2017",
      active: false,
      description: "你可以在30秒或更短时间内收集有用的Java8代码片段。",
      technologies: ["Java8"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/30-seconds-of-java8",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/30_seconds_of_java8.png",
      video: "",
    },
    {
      title: "文本审核 API 服务",
      href: "try.hono.my/api/check?text=hi",
      dates: "2024",
      active: false,
      description:
        "基于 Hono 和 OpenAI 的文本审核 API 服务，使用了 千问大模型，能够高效、准确地对文本内容进行审核和分类。此服务支持识别色情、暴力、涉政等敏感内容，并可根据上下文进行语境判断，适合需要高精度文本审核的场景。",
      technologies: ["Hono", "OpenAI", "Cloudflare Workers"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/text-moderation-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/text_moderation.jpg",
      video: "",
    },
    {
      title: "SimplePaddleOCRApi",
      href: "https://github.com/hellokaton/ppocr-api",
      dates: "2023",
      active: false,
      description:
        "一个可 Docker(compose) 部署的, 基于 FastAPI 的简易版 Paddle OCR Web API.",
      technologies: ["Python", "FastAPI", "Paddle OCR", "Docker"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/ppocr-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/ppocr_api.png",
      video: "",
    },
    {
      title: "anima",
      href: "https://github.com/hellokaton/anima/wiki",
      dates: "2018",
      active: false,
      description:
        "Anima 允许您像使用 SQL 和 Stream 一样查询数据库。它采用简单的 DSL 语法，支持多种数据库，与 Java8 集成良好，支持多种关系映射，是一个数据库操作工具。",
      technologies: ["Java8", "PostgreSQL", "MySQL", "Docker"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/anima",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/anima.png",
      video: "",
    },
    {
      title: "oh-my-email",
      href: "https://github.com/hellokaton/oh-my-email",
      dates: "2017",
      active: false,
      description:
        "可能是最小的 Java 邮件发送库了，支持抄送、附件、模板等功能。",
      technologies: ["Java8", "Javax Mail"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/oh-my-email",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/oh_my_email.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
