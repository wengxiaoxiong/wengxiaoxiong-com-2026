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

const copy = {
  en: {
    nav: ["Work", "Systems", "Thinking", "Contact"],
    switchLabel: "中文",
    heroKicker: "AI Native Founder / Agent Systems Builder",
    name: "Weng Xiaoxiong",
    hero:
      "I turn ambiguous business opportunities into agentic systems: research, content, recruiting, product innovation, development, operations, and growth workflows that can run, learn, and compound.",
    ctas: ["Email", "GitHub", "Bilibili"],
    ticker: ["Business", "Product", "Architecture", "Agent Runtime", "Retrieval", "Evaluation"],
    sections: {
      work: "01 / Founder Work",
      systems: "02 / Business Systems",
      thinking: "03 / Founder Thinking",
      content: "04 / Audience & Proof",
      stack: "05 / Agent Stack",
      contact: "Contact",
    },
    work: [
      {
        meta: "2024 - Now · Shanghai",
        title: "Tezign · AI Agent / Product Engineering",
        points: [
          "Turn enterprise research, product innovation, and content workflows into Agent systems that can plan, execute, evaluate, and deliver business outputs.",
          "Built Atypica.AI Research Agent around a repeatable commercial workflow: clarify market questions, simulate consumers, gather signals, and produce decision-ready reports.",
          "Designed Agent runtime patterns such as Plan Mode, tool gating, messages-as-source-of-truth, skills, memory, retrieval, and evaluation loops.",
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
          "Agent technique: planning, interview/discussion simulation, social observation, persona retrieval, long-running tasks, memory, skills, and report generation.",
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
        name: "捏Ta",
        title: "Anime-style Image Generation Workflow",
        meta: "Stable Diffusion / LoRA / Personalization",
        link: "https://app.nieta.art/",
        logo: "/logos/nieta.ico",
        points: [
          "Commercial value: turn personalized anime-style generation into an end-user product instead of a raw model demo.",
          "Generation technique: customized Stable Diffusion and LoRA workflow, controllable personalization, style presets, and repeatable character image output.",
        ],
      },
      {
        name: "Confidential Luxury Commerce",
        title: "Campaign Commerce Agent",
        meta: "PostgreSQL / pgvector / JSONB / Prisma",
        points: [
          "Commercial value: make a luxury campaign shoppable through conversational search, styling guidance, and full-look recommendations without exposing brand data here.",
          "Agent technique: structured intent parsing, catalog grounding, hybrid retrieval, ranking, recommendation assembly, and quality evaluation.",
        ],
      },
      {
        name: "Agent Tools / Skill CLI",
        title: "Developer Infrastructure for Agents",
        meta: "CLI / Skills / Workflow",
        points: [
          "Commercial value: help developers package useful capabilities so Agent systems can adopt tools faster with less integration overhead.",
          "Agent technique: skill metadata, progressive disclosure, CLI-first tooling, workflow composition, and lower-context tool usage.",
        ],
      },
      {
        name: "Commercial Experiments",
        title: "SaaS, Recruiting, Content and Automation",
        meta: "Product / Sales / Delivery",
        points: [
          "Validated founder instincts through paid AI SaaS, car-rental SaaS + AI analytics, recruiting automation, AI content workflows, and persona/social experiments.",
          "Focus: find real demand, reach decision makers, ship a working system, learn from usage, and turn the process into a repeatable business loop.",
        ],
      },
    ],
    thinking: [
      {
        label: "Commercial thinking",
        body:
          "I care whether a system can close deals, reduce labor cost, create a repeatable workflow, and turn delivery into a compounding asset.",
      },
      {
        label: "Product thinking",
        body:
          "I translate messy user needs into product surfaces, feedback loops, evaluation criteria, and workflows that users can actually repeat.",
      },
      {
        label: "Architecture thinking",
        body:
          "I separate runtime, tools, context, memory, retrieval, evaluation, and human approval so Agent products stay debuggable and extensible.",
      },
      {
        label: "Organization thinking",
        body:
          "I see AI as part of the team operating system: humans set goals and judgment, agents execute, report, and improve the workflow.",
      },
    ],
    content: {
      title: "熊老板i · Bilibili",
      stats: "10k+ followers · Redis systems + Agent engineering",
      body:
        "A technical media asset built around serious engineering storytelling: Redis internals, distributed systems, AI Agent principles, and product-building workflows. It proves more than audience reach: I can package complex systems into narratives that build trust, educate developers, and create distribution for technical products.",
      cta: "Open Bilibili",
    },
    stack: [
      ["Agent", "AI SDK, tool calling, structured output, Zod, Plan/Execute, Skills, MCP, context engineering"],
      ["Backend", "Node.js, Next.js App Router, Route Handler, Prisma, PostgreSQL, Redis, Stripe, raw SQL"],
      ["Retrieval", "pgvector, HNSW, tsvector, JSONB containment, embedding, semantic hybrid rerank, facet parser"],
      ["Quality", "Vitest, Playwright, evaluation harness, API batch tests, LLM judge, health checks"],
    ],
    contact: {
      title: "Build with me.",
      body: "Shanghai / Taipei · WeChat: wengxiaoxiong-com",
    },
  },
  zh: {
    nav: ["经历", "系统", "思维", "联系"],
    switchLabel: "EN",
    heroKicker: "AI Native Founder / Agent Systems Builder",
    name: "翁小雄",
    hero:
      "我擅长把模糊的商业机会抽象成可自动运行的 AI 系统：调研、内容、招聘、产品创新、开发、运营和增长，都可以变成 Agent 可调度、可评测、可复利的工作流。",
    ctas: ["邮件", "GitHub", "Bilibili"],
    ticker: ["商业", "产品", "架构", "Agent Runtime", "检索", "评测"],
    sections: {
      work: "01 / Founder 经历",
      systems: "02 / 商业系统",
      thinking: "03 / Founder 思维",
      content: "04 / 受众与影响力",
      stack: "05 / Agent 技术栈",
      contact: "联系",
    },
    work: [
      {
        meta: "2024 - 至今 · 上海",
        title: "特赞 Tezign · AI Agent / Product Engineering",
        points: [
          "把企业调研、产品创新和内容工作流改造成可规划、可执行、可评测、可交付的 Agent 系统。",
          "围绕 Atypica.AI Research Agent 建立可复用商业流程：澄清市场问题、模拟消费者、收集信号、输出可决策报告。",
          "设计 Plan Mode、工具门控、messages-as-source-of-truth、Skills、Memory、Retrieval、Evaluation 等 Agent runtime 模式。",
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
          "Agent 技术：规划、访谈/群体讨论模拟、社媒观察、Persona 检索、长任务、Memory、Skills 和报告生成。",
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
        name: "捏Ta",
        title: "动漫风格图像生成工作流",
        meta: "Stable Diffusion / LoRA / Personalization",
        link: "https://app.nieta.art/",
        logo: "/logos/nieta.ico",
        points: [
          "商业价值：把个性化动漫风格生成做成终端用户可使用的产品，而不只是模型 demo。",
          "生成技术：定制化 Stable Diffusion 与 LoRA 工作流、可控个性化、风格预设和可复现的角色图片输出。",
        ],
      },
      {
        name: "某奢侈品电商活动",
        title: "品牌活动 Commerce Agent",
        meta: "PostgreSQL / pgvector / JSONB / Prisma",
        points: [
          "商业价值：通过对话式搜索、造型建议和 full-look 推荐，让活动商品更容易被发现、理解和购买。",
          "Agent 技术：结构化意图解析、catalog grounding、混合检索、排序、搭配组装和质量评测。",
        ],
      },
      {
        name: "Agent Tools / Skill CLI",
        title: "面向 Agent 的开发者基础设施",
        meta: "CLI / Skills / Workflow",
        points: [
          "商业价值：帮助开发者把能力包装成 Agent 可用工具，降低复杂系统集成成本。",
          "Agent 技术：Skill metadata、渐进式披露、CLI-first tooling、workflow composition 和低上下文工具调用。",
        ],
      },
      {
        name: "商业化实验",
        title: "SaaS、招聘、内容和自动化",
        meta: "Product / Sales / Delivery",
        points: [
          "通过付费 AI SaaS、日本租车 SaaS + AI 分析、招聘自动化、AI 内容工作流、AI Persona 社交实验验证 founder 判断。",
          "重点不是堆项目，而是找到真实需求、接近决策人、交付可用系统、从使用中学习，并把过程沉淀成可复制业务闭环。",
        ],
      },
    ],
    thinking: [
      {
        label: "商业思维",
        body: "关注系统能不能成交、降低人力成本、形成可复制交付，并把一次项目沉淀成长期资产。",
      },
      {
        label: "产品思维",
        body: "把混乱需求翻译成产品界面、反馈循环、评测标准和用户可重复使用的工作流。",
      },
      {
        label: "技术架构思维",
        body: "拆分 runtime、tools、context、memory、retrieval、evaluation 和 human approval，让 Agent 产品可调试、可扩展。",
      },
      {
        label: "组织系统思维",
        body: "把 AI 当作团队操作系统的一部分：人类设定目标和判断，Agent 执行、汇报、复盘并优化流程。",
      },
    ],
    content: {
      title: "熊老板i · Bilibili",
      stats: "1万+粉丝 · Redis 系统设计 + Agent 工程",
      body:
        "一个围绕硬核工程叙事建立起来的技术媒体资产：Redis 源码与分布式系统、AI Agent 原理、产品落地工作流。它不只是粉丝数证明，也证明我能把复杂系统包装成可信、可传播、能服务技术产品增长的内容。",
      cta: "打开 Bilibili",
    },
    stack: [
      ["Agent", "AI SDK, tool calling, structured output, Zod, Plan/Execute, Skills, MCP, context engineering"],
      ["后端", "Node.js, Next.js App Router, Route Handler, Prisma, PostgreSQL, Redis, Stripe, raw SQL"],
      ["检索", "pgvector, HNSW, tsvector, JSONB containment, embedding, semantic hybrid rerank, facet parser"],
      ["质量", "Vitest, Playwright, evaluation harness, API batch tests, LLM judge, health checks"],
    ],
    contact: {
      title: "一起构建。",
      body: "上海 / 台北 · 微信：wengxiaoxiong-com",
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
      ["#work", t.nav[0]],
      ["#systems", t.nav[1]],
      ["#thinking", t.nav[2]],
      ["#contact", t.nav[3]],
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

      <section className="section intro reveal" id="work">
        <div className="sectionLabel">{t.sections.work}</div>
        <div className="timeline">
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

      <section className="section projects reveal" id="systems">
        <div className="sectionLabel">{t.sections.systems}</div>
        <div className="projectGrid">
          {t.systems.map((project, index) => {
            const hasBrandLink = "link" in project && project.link && "logo" in project && project.logo;

            return (
              <article className="project" key={project.name} style={{ transitionDelay: `${index * 55}ms` }}>
                <div className="projectTop">
                  {hasBrandLink ? (
                    <a className="projectBrand" href={project.link} target="_blank" rel="noopener noreferrer">
                      <img src={project.logo} alt={`${project.name} logo`} />
                      <span>{project.name}</span>
                    </a>
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
                {"link" in project && project.link ? (
                  <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer">
                    {locale === "en" ? "Open link" : "打开链接"}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section thinking" id="thinking">
        <div className="sectionLabel">{t.sections.thinking}</div>
        <div className="thinkingGrid">
          {t.thinking.map((item, index) => (
            <article className="thinkingCard reveal" key={item.label} style={{ transitionDelay: `${index * 70}ms` }}>
              <h2>{item.label}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contentProof reveal">
        <div className="sectionLabel">{t.sections.content}</div>
        <div className="biliShowcase">
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

      <section className="section skills reveal" aria-label="Stack">
        <div className="sectionLabel">{t.sections.stack}</div>
        <div className="skillList">
          {t.stack.map(([label, value]) => (
            <div className="skillRow" key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contactSection reveal" id="contact">
        <div>
          <p className="eyebrow">{t.sections.contact}</p>
          <h2>{t.contact.title}</h2>
          <p>owner@wengxiaoxiong.com</p>
          <p>{t.contact.body}</p>
        </div>
        <a className="siteLink" href="https://wengxiaoxiong.com" target="_blank" rel="noopener noreferrer">
          wengxiaoxiong.com
        </a>
      </section>
    </main>
  );
}
