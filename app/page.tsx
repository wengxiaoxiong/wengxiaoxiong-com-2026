"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "en" | "zh";

const biliVideos = [
  {
    image: "/bilibili-covers/nanobot-context-memory.jpg",
    href: "https://www.bilibili.com/video/BV1W2RNBZEht/",
    title: {
      en: "NanoBot EP3: Context Engineering and Memory",
      zh: "NanoBot EP3：上下文工程和记忆机制",
    },
  },
  {
    image: "/bilibili-covers/nanobot-agent-loop.jpg",
    href: "https://www.bilibili.com/video/BV1rS9hBZEVo/",
    title: {
      en: "NanoBot EP2: Agent Loop and Task Closure",
      zh: "NanoBot EP2：AgentLoop 任务闭环",
    },
  },
  {
    image: "/bilibili-covers/nanobot-clawdbot.jpg",
    href: "https://www.bilibili.com/video/BV1SLZiBcEM2/",
    title: {
      en: "NanoBot EP1: An Agent That Wakes Up to Work",
      zh: "NanoBot EP1：会自己醒来干活的 Agent",
    },
  },
  {
    image: "/bilibili-covers/codex-v0-product.jpg",
    href: "https://www.bilibili.com/video/BV1NXn4zsEo6/",
    title: {
      en: "V0 + Codex: Ship a Product Without Manual Coding",
      zh: "V0 + Codex：快速落地产品和网页",
    },
  },
  {
    image: "/bilibili-covers/vercel-nextjs-deploy.jpg",
    href: "https://www.bilibili.com/video/BV1xW8mzTETn/",
    title: {
      en: "Deploy a Next.js Full-stack Project on Vercel",
      zh: "用 Vercel 部署 Next.js 全栈项目",
    },
  },
  {
    image: "/bilibili-covers/vercel-blob.jpg",
    href: "https://www.bilibili.com/video/BV1Vm8mzDE9q/",
    title: {
      en: "Vercel Blob for Global Product File Storage",
      zh: "Vercel Blob：出海项目文件存储",
    },
  },
  {
    image: "/bilibili-covers/redis-rate-limit.jpg",
    href: "https://www.bilibili.com/video/BV1BH4y1g7ad/",
    title: {
      en: "Redis Rate Limiting: Token Bucket and Sliding Window",
      zh: "Redis 分布式限流算法动画解析",
    },
  },
  {
    image: "/bilibili-covers/redis-cache-consistency.jpg",
    href: "https://www.bilibili.com/video/BV1Qr421E7wp/",
    title: {
      en: "Redis Cache Consistency in Real Systems",
      zh: "Redis 缓存一致性问题",
    },
  },
  {
    image: "/bilibili-covers/redis-cache-problems.jpg",
    href: "https://www.bilibili.com/video/BV16Z4217772/",
    title: {
      en: "Redis Cache Breakdown, Penetration and Avalanche",
      zh: "Redis 缓存击穿、穿透、雪崩",
    },
  },
  {
    image: "/bilibili-covers/redis-redlock.jpg",
    href: "https://www.bilibili.com/video/BV1em41127KW/",
    title: {
      en: "Redis Redlock and Distributed Failure Cases",
      zh: "Redis 红锁与分布式故障场景",
    },
  },
  {
    image: "/bilibili-covers/redis-global-id.jpg",
    href: "https://www.bilibili.com/video/BV1xm42177Fq/",
    title: {
      en: "Redis for Global IDs, Views and Sessions",
      zh: "Redis 全局 ID、浏览数和值缓存",
    },
  },
  {
    image: "/bilibili-covers/redis-distributed-lock.jpg",
    href: "https://www.bilibili.com/video/BV1Yz421r74Z/",
    title: {
      en: "Redis Distributed Locks with Lua and Renewal",
      zh: "Redis 分布式锁、Lua 与锁续期",
    },
  },
];

const friendLinks = [
  { href: "https://joyehuang.me/", label: "joyehuang.me" },
  { href: "https://justarchi-design.com/", label: "justarchi-design.com" },
  { href: "https://soukyo-rent-a-car.com/", label: "soukyo-rent-a-car.com" },
];

const copy = {
  en: {
    nav: ["Bilibili", "Apps", "Articles", "Work", "Stack", "Contact"],
    switchLabel: "中文",
    heroKicker: "AI Native Agent Systems Builder / Backend Engineer",
    name: "Weng Xiaoxiong",
    hero:
      "I turn ambiguous business opportunities into agentic systems: research, content, recruiting, product innovation, development, operations, and growth workflows that can run, learn, and compound.",
    ctas: ["Email", "GitHub", "Bilibili"],
    ticker: ["Business", "Product", "Architecture", "Agent Runtime", "Loop Engineering", "Evaluation"],
    sections: {
      content: "01 / Audience & Proof",
      systems: "02 / Apps",
      articles: "03 / Technical Writing",
      work: "04 / Work Experience",
      stack: "05 / Agent Stack",
      contact: "Contact",
    },
    work: [
      {
        meta: "2024 - Now · Shanghai",
        title: "Tezign · AI Agent / Product Engineering",
        link: "https://www.tezign.com/",
        logo: "/logos/tezign.png",
        points: [
          "Turn enterprise research, product innovation, and content workflows into Agent systems that can plan, execute, evaluate, and deliver business outputs.",
          "Built Atypica.AI Research Agent around a repeatable commercial workflow: clarify market questions, simulate consumers, gather signals, and produce decision-ready reports.",
          "Designed Agent runtime patterns such as tool gating, messages-as-source-of-truth, skills, memory, evaluation, and Loop Engineering.",
          "Worked across product surface, backend architecture, AI workflow design, and delivery quality so Agent prototypes could become usable systems.",
        ],
      },
      {
        meta: "2023 - 2024 · Shanghai",
        title: "捏Ta · Anime Image Generation Product",
        link: "https://app.nieta.art/",
        logo: "/logos/nieta.ico",
        points: [
          "Built a customized anime-style image generation workflow integrating Stable Diffusion and LoRA models, achieving controllable personalization for end users.",
          "Translated image-generation capability into a consumer product flow: style presets, controllable identity preference, prompt workflows, and repeatable asset output.",
        ],
      },
      {
        meta: "2023 - 2024 · Shanghai",
        title: "SenseTime · LLM Application / Agent Intern",
        link: "https://www.sensetime.com/en",
        logo: "/logos/sensetime.png",
        points: [
          "Explored how LLM applications enter enterprise workflows through knowledge, tool calling, task automation, and internal productivity systems.",
        ],
      },
    ],
    systems: [
      {
        name: "Atypica.ai",
        title: "Consumer Research Agent Platform",
        meta: "Next.js / AI SDK / Prisma / PostgreSQL",
        link: "https://atypica.ai/",
        logo: "/logos/atypica.jpg",
        points: [
          "Commercial value: compress consumer research from a service-heavy process into an AI-assisted product workflow for brands and innovation teams.",
          "Agent technique: planning, interview/discussion simulation, social observation, persona memory matching, long-running tasks, skills, and report generation.",
        ],
      },
      {
        name: "Faishion.ai",
        title: "Fashion Agent & Generation Task System",
        meta: "AI SDK / R2 / Inngest / Evaluation",
        link: "https://faishion.ai/",
        logo: "/logos/faishion.ico",
        points: [
          "Commercial value: connect chat, products, styling, and image-generation tasks into a consumer-facing fashion workflow.",
          "Agent technique: streaming chat, product-search tools, natural-language actions, task queues, image assets, human scoring, reruns, and alerts.",
        ],
      },
      {
        name: "PitchLab.pro",
        title: "Voice-based AI Sales Training",
        meta: "Multi-Agent / Speech / Feedback",
        link: "https://pitchlab.pro/",
        logo: "/logos/pitchlab.png",
        points: [
          "Commercial value: lower the cost of sales training and make excellent sales behavior repeatable across teams.",
          "Agent technique: customer role-play, speech interaction, expression evaluation, realism checks, and personalized coaching feedback.",
        ],
      },
      {
        name: "Confidential Luxury Commerce",
        title: "Campaign Commerce Agent",
        meta: "PostgreSQL / pgvector / JSONB / Prisma",
        points: [
          "Commercial value: make a luxury campaign shoppable through conversational search, styling guidance, and full-look recommendations without exposing brand data here.",
          "Agent technique: structured intent parsing, catalog grounding, ranking, recommendation assembly, and quality evaluation.",
        ],
      },
      {
        name: "Agent Tools & Automation",
        title: "Agent Infrastructure and Commercial Automation",
        meta: "CLI / Skills / Workflow / Product Ops",
        logo: "/logos/agent-tools.svg",
        points: [
          "Commercial value: package reusable Agent capabilities, SaaS workflows, recruiting automation, AI content operations, and delivery playbooks into repeatable business loops.",
          "Agent technique: skill metadata, progressive disclosure, CLI-first tooling, workflow composition, low-context tool usage, and human-in-the-loop operations.",
        ],
      },
    ],
    content: {
      title: "熊老板i · Bilibili",
      stats: "10k+ followers · Redis systems + Agent engineering",
      body:
        "A technical media asset built around serious engineering storytelling: Redis internals, distributed systems, AI Agent principles, and product-building workflows. It proves more than audience reach: I can package complex systems into narratives that build trust, educate developers, and create distribution for technical products.",
      cta: "Open Bilibili",
    },
    articles: [
      {
        title: "How to Design Prompt Cache for Long-Context Agents: A Real Atypica.AI Experiment",
        meta: "Atypica.ai Engineering",
        href: "https://atypica.ai/blog/how-to-design-prompt-cache-for-long-context-agents",
        body:
          "A real production experiment on prompt caching for long-context research agents: token-threshold checkpoints, offline simulation, provider cache metadata, and cost observability.",
      },
    ],
    stack: [
      ["Daily Tools", "ClaudeCode, Cursor, Codex, Openclaw, Hermes"],
      ["Agent", "AI SDK, tool calling, Skills, MCP, context engineering, memory, evaluation loops, Loop Engineering"],
      ["Backend", "Node.js, Java, Python, Next.js App Router, Route Handler, Prisma, PostgreSQL, Redis, Stripe, raw SQL"],
      ["Frontend", "React, Next.js, TypeScript, responsive UI, pixel systems, interaction design"],
      ["Animation", "Remotion, Hyperframe, CSS motion, scroll interactions, 3D tilt"],
      ["Quality", "Vitest, Playwright, evaluation harness, API batch tests, LLM judge, health checks"],
    ],
    contact: {
      title: "Build with me.",
      body: "Shanghai / Taipei · WeChat: wengxiaoxiong-com",
      friends: "Friends",
    },
  },
  zh: {
    nav: ["Bilibili", "Apps", "文章", "工作", "技术栈", "联系"],
    switchLabel: "EN",
    heroKicker: "AI Native Agent Systems Builder / Backend Engineer",
    name: "翁小雄",
    hero:
      "我擅长把模糊的商业机会抽象成可自动运行的 AI 系统：调研、内容、招聘、产品创新、开发、运营和增长，都可以变成 Agent 可调度、可评测、可复利的工作流。",
    ctas: ["邮件", "GitHub", "Bilibili"],
    ticker: ["商业", "产品", "架构", "Agent Runtime", "Loop Engineering", "评测"],
    sections: {
      content: "01 / 受众与影响力",
      systems: "02 / Apps",
      articles: "03 / 技术文章",
      work: "04 / 工作经历",
      stack: "05 / 技术栈",
      contact: "联系",
    },
    work: [
      {
        meta: "2024 - 至今 · 上海",
        title: "特赞 Tezign · AI Agent / Product Engineering",
        link: "https://www.tezign.com/",
        logo: "/logos/tezign.png",
        points: [
          "把企业调研、产品创新和内容工作流改造成可规划、可执行、可评测、可交付的 Agent 系统。",
          "围绕 Atypica.AI Research Agent 建立可复用商业流程：澄清市场问题、模拟消费者、收集信号、输出可决策报告。",
          "设计工具门控、messages-as-source-of-truth、Skills、Memory、Evaluation 和 Loop Engineering 等 Agent runtime 模式。",
          "横跨产品界面、后端架构、AI 工作流设计和交付质量，把 Agent 原型推进成真实可用的业务系统。",
        ],
      },
      {
        meta: "2023 - 2024 · 上海",
        title: "捏Ta · 动漫风格图像生成产品",
        link: "https://app.nieta.art/",
        logo: "/logos/nieta.ico",
        points: [
          "Built a customized anime-style image generation workflow integrating Stable Diffusion and LoRA models, achieving controllable personalization for end users.",
          "把图像生成能力产品化为消费者可使用的流程：风格预设、身份偏好控制、prompt 工作流和稳定的图片资产输出。",
        ],
      },
      {
        meta: "2023 - 2024 · 上海",
        title: "SenseTime 商汤科技 · LLM Application / Agent Intern",
        link: "https://www.sensetime.com/en",
        logo: "/logos/sensetime.png",
        points: ["探索 LLM 如何进入企业知识、工具调用、任务自动化和内部效率系统。"],
      },
    ],
    systems: [
      {
        name: "Atypica.ai",
        title: "消费者研究 Agent 平台",
        meta: "Next.js / AI SDK / Prisma / PostgreSQL",
        link: "https://atypica.ai/",
        logo: "/logos/atypica.jpg",
        points: [
          "商业价值：把高度依赖咨询服务的消费者研究，压缩成品牌和创新团队可反复使用的 AI 产品工作流。",
          "Agent 技术：规划、访谈/群体讨论模拟、社媒观察、Persona memory matching、长任务、Skills 和报告生成。",
        ],
      },
      {
        name: "Faishion.ai",
        title: "时尚 Agent 与生成任务系统",
        meta: "AI SDK / R2 / Inngest / Evaluation",
        link: "https://faishion.ai/",
        logo: "/logos/faishion.ico",
        points: [
          "商业价值：把聊天、商品、搭配、图像生成任务连成面向消费者的时尚体验链路。",
          "Agent 技术：streaming chat、商品搜索工具、自然语言动作、任务队列、图片资产、人类评分、复跑和告警。",
        ],
      },
      {
        name: "PitchLab.pro",
        title: "基于语音的 AI 销售训练",
        meta: "Multi-Agent / Speech / Feedback",
        link: "https://pitchlab.pro/",
        logo: "/logos/pitchlab.png",
        points: [
          "商业价值：降低销售训练成本，把优秀销售经验复制给更多一线人员。",
          "Agent 技术：客户角色扮演、语音交互、表达评估、真实度判断和个性化反馈。",
        ],
      },
      {
        name: "某奢侈品电商活动",
        title: "品牌活动 Commerce Agent",
        meta: "PostgreSQL / pgvector / JSONB / Prisma",
        points: [
          "商业价值：通过对话式搜索、造型建议和 full-look 推荐，让活动商品更容易被发现、理解和购买。",
          "Agent 技术：结构化意图解析、catalog grounding、排序、搭配组装和质量评测。",
        ],
      },
      {
        name: "Agent Tools & Automation",
        title: "Agent 基础设施与商业自动化",
        meta: "CLI / Skills / Workflow / Product Ops",
        logo: "/logos/agent-tools.svg",
        points: [
          "商业价值：把 Agent 能力封装、SaaS 工作流、招聘自动化、AI 内容运营和交付方法沉淀为可复制业务闭环。",
          "Agent 技术：Skill metadata、渐进式披露、CLI-first tooling、workflow composition、低上下文工具调用和 human-in-the-loop 运营。",
        ],
      },
    ],
    content: {
      title: "熊老板i · Bilibili",
      stats: "1万+粉丝 · Redis 系统设计 + Agent 工程",
      body:
        "一个围绕硬核工程叙事建立起来的技术媒体资产：Redis 源码与分布式系统、AI Agent 原理、产品落地工作流。它不只是粉丝数证明，也证明我能把复杂系统包装成可信、可传播、能服务技术产品增长的内容。",
      cta: "打开 Bilibili",
    },
    articles: [
      {
        title: "How to Design Prompt Cache for Long-Context Agents: A Real Atypica.AI Experiment",
        meta: "Atypica.ai Engineering",
        href: "https://atypica.ai/blog/how-to-design-prompt-cache-for-long-context-agents",
        body:
          "一篇真实生产实验：长上下文 Research Agent 如何设计 Prompt Cache，包括 token 阈值 checkpoint、离线仿真、provider cache metadata 和成本可观测性。",
      },
    ],
    stack: [
      ["常用", "ClaudeCode, Cursor, Codex, Openclaw, Hermes"],
      ["Agent", "AI SDK, tool calling, Skills, MCP, context engineering, memory, evaluation loops, Loop Engineering"],
      ["后端", "Node.js, Java, Python, Next.js App Router, Route Handler, Prisma, PostgreSQL, Redis, Stripe, raw SQL"],
      ["前端", "React, Next.js, TypeScript, responsive UI, pixel systems, interaction design"],
      ["动画", "Remotion, Hyperframe, CSS motion, scroll interactions, 3D tilt"],
      ["质量", "Vitest, Playwright, evaluation harness, API batch tests, LLM judge, health checks"],
    ],
    contact: {
      title: "一起构建。",
      body: "上海 / 台北 · 微信：wengxiaoxiong-com",
      friends: "友情链接",
    },
  },
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    function updateScroll() {
      frame = 0;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      root.style.setProperty("--scroll-progress", `${progress * 100}%`);
      root.style.setProperty("--scroll-shift", `${Math.min(window.scrollY * 0.1, 110)}px`);
      root.style.setProperty("--scroll-float", `${Math.min(window.scrollY * 0.045, 54)}px`);
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScroll);
    }

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    root.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>(".tilt3d"));

    function onMove(event: PointerEvent) {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      target.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
      target.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
      target.style.setProperty("--tilt-z", "18px");
    }

    function onLeave(event: PointerEvent) {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
      target.style.setProperty("--tilt-z", "0px");
    }

    panels.forEach((panel) => {
      panel.addEventListener("pointermove", onMove);
      panel.addEventListener("pointerleave", onLeave);
    });

    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("pointermove", onMove);
        panel.removeEventListener("pointerleave", onLeave);
      });
    };
  }, [locale]);

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "zh") {
      setLocale(saved);
      return;
    }

    if (navigator.language.toLowerCase().startsWith("zh")) {
      setLocale("zh");
    }
  }, []);

  const t = copy[locale];
  const nextLocale = locale === "en" ? "zh" : "en";

  const navTargets = useMemo(
    () => [
      ["#bilibili", t.nav[0]],
      ["#apps", t.nav[1]],
      ["#articles", t.nav[2]],
      ["#work", t.nav[3]],
      ["#stack", t.nav[4]],
      ["#contact", t.nav[5]],
    ],
    [t.nav],
  );

  function switchLocale() {
    window.localStorage.setItem("locale", nextLocale);
    setLocale(nextLocale);
  }

  return (
    <main>
      <div className="scrollProgress" aria-hidden="true" />
      <div className="scrollRail" aria-hidden="true">
        <span>BUILD</span>
        <span>SHIP</span>
        <span>PROVE</span>
      </div>

      <section className="hero" aria-label={t.name}>
        <div className="scanline" />
        <nav className="nav" aria-label="Primary">
          {navTargets.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
          <button type="button" onClick={switchLocale}>
            {t.switchLabel}
          </button>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{t.name}</h1>
          <p className="subtitle">{t.hero}</p>
          <div className="heroActions">
            <a href="mailto:owner@wengxiaoxiong.com">{t.ctas[0]}</a>
            <a href="https://github.com/wengxiaoxiong/" target="_blank" rel="noopener noreferrer">
              {t.ctas[1]}
            </a>
            <a href="https://space.bilibili.com/25484432" target="_blank" rel="noopener noreferrer">
              {t.ctas[2]}
            </a>
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          {t.ticker.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section contentProof reveal" id="bilibili">
        <div className="sectionLabel">{t.sections.content}</div>
        <div className="biliShowcase tilt3d slide3d">
          <div className="biliIntro">
            <p className="entryMeta">{t.content.stats}</p>
            <h2>{t.content.title}</h2>
            <p>{t.content.body}</p>
            <a className="biliButton" href="https://space.bilibili.com/25484432" target="_blank" rel="noopener noreferrer">
              {t.content.cta}
            </a>
          </div>

          <div className="coverStage" aria-label="Selected Bilibili video covers">
            <a className="featureCover" href={biliVideos[0].href} target="_blank" rel="noopener noreferrer">
              <img src={biliVideos[0].image} alt={biliVideos[0].title[locale]} />
              <span>{biliVideos[0].title[locale]}</span>
            </a>
            <div className="coverStack">
              {biliVideos.slice(1, 5).map((video) => (
                <a className="miniCover" href={video.href} key={video.image} target="_blank" rel="noopener noreferrer">
                  <img src={video.image} alt={video.title[locale]} />
                  <span>{video.title[locale]}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="coverMarquee" aria-hidden="true">
            <div className="coverTrack">
              {[...biliVideos, ...biliVideos].map((video, index) => (
                <img src={video.image} alt="" key={`${video.image}-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section projects reveal" id="apps">
        <div className="sectionLabel">{t.sections.systems}</div>
        <div className="projectGrid">
          {t.systems.map((project, index) => {
            const hasLogo = "logo" in project && project.logo;
            const hasLink = "link" in project && project.link;

            return (
              <article className="project tilt3d slide3d" key={project.name} style={{ transitionDelay: `${index * 55}ms` }}>
                <div className="projectTop">
                  {hasLogo ? (
                    hasLink ? (
                      <a className="projectBrand" href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.logo} alt={`${project.name} logo`} />
                        <span>{project.name}</span>
                      </a>
                    ) : (
                      <div className="projectBrand projectBrandStatic">
                        <img src={project.logo} alt={`${project.name} icon`} />
                        <span>{project.name}</span>
                      </div>
                    )
                  ) : (
                    <span className="projectName">{project.name}</span>
                  )}
                  <span className="projectMetaText">{project.meta}</span>
                </div>
                <h2>{project.title}</h2>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {hasLink ? (
                  <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer">
                    {locale === "en" ? "Open link" : "打开链接"}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section articles reveal" id="articles">
        <div className="sectionLabel">{t.sections.articles}</div>
        <div className="articleList">
          {t.articles.map((article) => (
            <a className="articleCard tilt3d slide3d" href={article.href} target="_blank" rel="noopener noreferrer" key={article.href}>
              <div className="articleMeta">{article.meta}</div>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <span>{locale === "en" ? "Read article" : "阅读文章"}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section intro reveal" id="work">
        <div className="sectionLabel">{t.sections.work}</div>
        <div className="timeline tilt3d slide3d">
          {t.work.map((item) => {
            const hasBrandLink = "link" in item && item.link && "logo" in item && item.logo;

            return (
              <article className="entry" key={item.title}>
                <div className="entryMeta">{item.meta}</div>
                <div className="entryHead">
                  <h2>{item.title}</h2>
                  {hasBrandLink ? (
                    <a className="entryBrand" href={item.link} target="_blank" rel="noopener noreferrer">
                      <img src={item.logo} alt={`${item.title} logo`} />
                      <span>{locale === "en" ? "Open" : "打开"}</span>
                    </a>
                  ) : null}
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section skills reveal" id="stack" aria-label="Stack">
        <div className="sectionLabel">{t.sections.stack}</div>
        <div className="skillList tilt3d slide3d">
          {t.stack.map(([label, value]) => (
            <div className="skillRow" key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contactSection reveal tilt3d slide3d" id="contact">
        <div>
          <p className="eyebrow">{t.sections.contact}</p>
          <h2>{t.contact.title}</h2>
          <p>owner@wengxiaoxiong.com</p>
          <p>{t.contact.body}</p>
          <div className="friendLinks" aria-label={t.contact.friends}>
            <span>{t.contact.friends}</span>
            {friendLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <a className="siteLink" href="https://wengxiaoxiong.com" target="_blank" rel="noopener noreferrer">
          wengxiaoxiong.com
        </a>
      </section>
    </main>
  );
}
