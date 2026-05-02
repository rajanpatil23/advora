import { LucideIcon } from "lucide-react";

export interface ServiceWhyUsItem {
  stat: string;
  label: string;
  description: string;
}

export interface ServiceReview {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceToolItem {
  name: string;
  category: string;
}

export interface ServiceDetailData {
  whyUs: {
    headline: string;
    subtitle: string;
    items: ServiceWhyUsItem[];
  };
  reviews: ServiceReview[];
  process: {
    headline: string;
    subtitle: string;
    steps: ServiceProcessStep[];
  };
  toolStack: {
    headline: string;
    subtitle: string;
    tools: ServiceToolItem[];
  };
}

export const serviceDetails: Record<string, ServiceDetailData> = {
  "web-development": {
    whyUs: {
      headline: "Why Choose Us for Web Development",
      subtitle: "Our web team has shipped 120+ production websites with a 99.9% uptime track record.",
      items: [
        { stat: "120+", label: "Websites Launched", description: "From landing pages to enterprise-grade web applications across 15+ industries." },
        { stat: "99.9%", label: "Uptime Guarantee", description: "Rock-solid infrastructure with monitoring, failover, and rapid incident response." },
        { stat: "<1.5s", label: "Avg. Load Time", description: "Performance-first builds that score 90+ on Google PageSpeed Insights." },
        { stat: "4.9★", label: "Client Rating", description: "Consistently rated among the top web development partners by our clients." },
      ],
    },
    reviews: [
      { name: "Rajesh Kapoor", role: "CTO", company: "FinanceFlow", review: "Advora rebuilt our platform from scratch. The new site loads 3x faster and our conversion rate jumped 40% within two months.", rating: 5 },
      { name: "Priya Sharma", role: "Founder", company: "EduLearn", review: "Their React expertise is unmatched. They delivered a complex LMS platform on time and under budget with incredible attention to detail.", rating: 5 },
      { name: "Michael Chen", role: "VP Engineering", company: "RetailHub", review: "The team understood our scale requirements perfectly. Our e-commerce platform now handles 10x more traffic without breaking a sweat.", rating: 5 },
    ],
    process: {
      headline: "Our Web Development Process",
      subtitle: "A battle-tested workflow that ensures quality at every stage.",
      steps: [
        { step: 1, title: "Discovery & Architecture", description: "We map your requirements, define the tech stack, and architect a scalable solution blueprint." },
        { step: 2, title: "UI/UX & Prototyping", description: "Interactive wireframes and design mockups validated with your team before a single line of code." },
        { step: 3, title: "Agile Development", description: "Two-week sprints with demo sessions, ensuring transparent progress and continuous feedback." },
        { step: 4, title: "Testing & QA", description: "Automated testing, cross-browser validation, performance audits, and security scanning." },
        { step: 5, title: "Launch & Optimization", description: "Seamless deployment, SEO setup, analytics integration, and post-launch performance tuning." },
      ],
    },
    toolStack: {
      headline: "Our Web Development Stack",
      subtitle: "Modern, battle-tested technologies for every layer of your application.",
      tools: [
        { name: "React", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "TypeScript", category: "Language" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Node.js", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Redis", category: "Caching" },
        { name: "AWS", category: "Cloud" },
        { name: "Docker", category: "DevOps" },
        { name: "Vercel", category: "Hosting" },
        { name: "GraphQL", category: "API" },
        { name: "Git", category: "Version Control" },
      ],
    },
  },

  "mobile-apps": {
    whyUs: {
      headline: "Why Choose Us for Mobile Development",
      subtitle: "We've built 50+ mobile apps with combined 2M+ downloads across iOS and Android.",
      items: [
        { stat: "50+", label: "Apps Shipped", description: "Cross-platform and native apps across healthcare, fintech, e-commerce, and logistics." },
        { stat: "2M+", label: "Total Downloads", description: "Our apps are actively used by millions of users worldwide." },
        { stat: "4.7★", label: "Avg. Store Rating", description: "High user satisfaction reflected in App Store and Play Store ratings." },
        { stat: "60%", label: "Faster Delivery", description: "Cross-platform approach cuts development time without sacrificing quality." },
      ],
    },
    reviews: [
      { name: "Ankit Patel", role: "CEO", company: "HealthTrack", review: "Our health monitoring app went from concept to App Store in just 3 months. The team's React Native expertise saved us significant time and budget.", rating: 5 },
      { name: "Sarah Williams", role: "Product Lead", company: "LogiTrack", review: "The logistics app they built handles real-time GPS tracking for 500+ drivers flawlessly. Push notifications and offline mode work perfectly.", rating: 5 },
      { name: "David Kim", role: "Founder", company: "StartupX", review: "They built our MVP in 6 weeks. The app's performance feels truly native, and their Flutter skills are top-notch.", rating: 5 },
    ],
    process: {
      headline: "Our Mobile App Development Process",
      subtitle: "From concept to store launch with rigorous quality at every milestone.",
      steps: [
        { step: 1, title: "Concept & Platform Strategy", description: "Define your app vision, target platforms, and choose between native, cross-platform, or hybrid." },
        { step: 2, title: "UX Design & Prototyping", description: "Mobile-first UX flows, clickable prototypes, and usability testing with real users." },
        { step: 3, title: "Iterative Development", description: "Feature-by-feature builds with weekly TestFlight/beta releases for continuous validation." },
        { step: 4, title: "Device Testing & QA", description: "Testing across 20+ device configurations, performance profiling, and crash analytics." },
        { step: 5, title: "Store Submission & Growth", description: "App Store and Play Store submission, ASO optimization, and post-launch analytics setup." },
      ],
    },
    toolStack: {
      headline: "Our Mobile Tech Stack",
      subtitle: "Industry-leading frameworks for performant cross-platform and native apps.",
      tools: [
        { name: "React Native", category: "Cross-Platform" },
        { name: "Flutter", category: "Cross-Platform" },
        { name: "Swift", category: "iOS Native" },
        { name: "Kotlin", category: "Android Native" },
        { name: "Expo", category: "Development" },
        { name: "Firebase", category: "Backend" },
        { name: "Redux", category: "State" },
        { name: "Fastlane", category: "CI/CD" },
        { name: "TestFlight", category: "Testing" },
        { name: "Sentry", category: "Monitoring" },
        { name: "RevenueCat", category: "Payments" },
        { name: "OneSignal", category: "Notifications" },
      ],
    },
  },

  "custom-software": {
    whyUs: {
      headline: "Why Choose Us for Custom Software",
      subtitle: "We engineer enterprise-grade solutions that automate operations and unlock efficiency.",
      items: [
        { stat: "35+", label: "Enterprise Projects", description: "Complex systems for healthcare, logistics, finance, and manufacturing sectors." },
        { stat: "85%", label: "Process Automation", description: "Average reduction in manual workflows after our automation implementations." },
        { stat: "10x", label: "ROI Delivered", description: "Our custom solutions consistently deliver measurable return on investment." },
        { stat: "24/7", label: "Support & Monitoring", description: "Dedicated support teams with SLA-backed response times." },
      ],
    },
    reviews: [
      { name: "Vikram Singh", role: "COO", company: "MediConnect", review: "Their ERP system automated 80% of our manual processes. What took our team days now takes minutes.", rating: 5 },
      { name: "Lisa Thompson", role: "Director of Ops", company: "PropertyPro", review: "The property management system they built handles 5,000+ properties seamlessly. Integration with our legacy systems was flawless.", rating: 5 },
      { name: "James Carter", role: "VP Technology", company: "TechCorp", review: "Advora modernized our decade-old system without a single day of downtime. Their migration strategy was impeccable.", rating: 5 },
    ],
    process: {
      headline: "Our Software Engineering Process",
      subtitle: "Rigorous methodology for building mission-critical enterprise solutions.",
      steps: [
        { step: 1, title: "Requirements & Audit", description: "Deep-dive into existing systems, document pain points, and define technical requirements." },
        { step: 2, title: "Architecture Design", description: "System architecture, database schema, API design, and integration mapping." },
        { step: 3, title: "Modular Development", description: "Component-based builds with comprehensive unit testing and code reviews." },
        { step: 4, title: "Integration & Migration", description: "Seamless integration with existing tools, data migration, and legacy system bridging." },
        { step: 5, title: "Deployment & Training", description: "Staged rollout, team training sessions, documentation, and ongoing maintenance." },
      ],
    },
    toolStack: {
      headline: "Our Enterprise Tech Stack",
      subtitle: "Robust technologies for scalable, secure enterprise applications.",
      tools: [
        { name: "Python", category: "Backend" },
        { name: "Java", category: "Backend" },
        { name: "C# / .NET", category: "Backend" },
        { name: "Node.js", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MongoDB", category: "Database" },
        { name: "RabbitMQ", category: "Messaging" },
        { name: "Kubernetes", category: "Orchestration" },
        { name: "Terraform", category: "Infrastructure" },
        { name: "Jenkins", category: "CI/CD" },
        { name: "Elasticsearch", category: "Search" },
        { name: "Grafana", category: "Monitoring" },
      ],
    },
  },

  "ui-ux-design": {
    whyUs: {
      headline: "Why Choose Us for UI/UX Design",
      subtitle: "Research-driven design that increases engagement and conversions measurably.",
      items: [
        { stat: "80+", label: "Products Designed", description: "End-to-end design for web apps, mobile apps, SaaS platforms, and enterprise tools." },
        { stat: "3x", label: "Conversion Lift", description: "Average improvement in conversion rates after our UX redesign projects." },
        { stat: "95%", label: "Usability Score", description: "Our designs consistently achieve 95%+ scores in moderated usability testing." },
        { stat: "WCAG", label: "Accessibility First", description: "Every design meets WCAG 2.1 AA standards for inclusive user experiences." },
      ],
    },
    reviews: [
      { name: "Neha Gupta", role: "Product Manager", company: "FinanceFlow", review: "The redesigned dashboard increased user engagement by 65%. Their research-first approach uncovered insights we had missed for years.", rating: 5 },
      { name: "Tom Anderson", role: "CEO", company: "TaskMaster", review: "They transformed our clunky interface into an intuitive experience. User support tickets dropped 40% after the redesign.", rating: 5 },
      { name: "Emily Zhang", role: "Head of Design", company: "EduLearn", review: "Their design system saved our team 30+ hours per week. Consistency across our platform has never been better.", rating: 5 },
    ],
    process: {
      headline: "Our Design Process",
      subtitle: "A human-centered design process that puts users at the heart of every decision.",
      steps: [
        { step: 1, title: "User Research & Discovery", description: "Interviews, surveys, analytics review, and competitive analysis to understand user needs." },
        { step: 2, title: "Information Architecture", description: "User flows, sitemaps, and content hierarchy to create intuitive navigation structures." },
        { step: 3, title: "Wireframing & Testing", description: "Low-fidelity wireframes validated through moderated usability testing sessions." },
        { step: 4, title: "Visual Design & Prototyping", description: "High-fidelity designs with interactive prototypes for stakeholder review and user validation." },
        { step: 5, title: "Design System & Handoff", description: "Component library, style guide, and developer handoff with pixel-perfect specifications." },
      ],
    },
    toolStack: {
      headline: "Our Design Toolkit",
      subtitle: "Industry-standard tools for every phase of the design process.",
      tools: [
        { name: "Figma", category: "Design" },
        { name: "Adobe XD", category: "Design" },
        { name: "Sketch", category: "Design" },
        { name: "Framer", category: "Prototyping" },
        { name: "Principle", category: "Animation" },
        { name: "InVision", category: "Collaboration" },
        { name: "Maze", category: "Testing" },
        { name: "Hotjar", category: "Analytics" },
        { name: "Miro", category: "Workshops" },
        { name: "Zeplin", category: "Handoff" },
        { name: "Storybook", category: "Components" },
        { name: "Lottie", category: "Animation" },
      ],
    },
  },

  "branding": {
    whyUs: {
      headline: "Why Choose Us for Branding",
      subtitle: "We build brands that stand out, resonate, and drive market differentiation.",
      items: [
        { stat: "60+", label: "Brands Created", description: "From startup MVPs to enterprise rebrands across global markets." },
        { stat: "92%", label: "Brand Recall", description: "Average brand recall rate achieved in post-launch audience surveys." },
        { stat: "5+", label: "Industry Awards", description: "Recognized for excellence in brand identity and creative direction." },
        { stat: "100%", label: "Ownership Transfer", description: "Full brand assets and IP transferred to you upon project completion." },
      ],
    },
    reviews: [
      { name: "Ravi Menon", role: "Founder", company: "StartupX", review: "Advora gave our startup a brand that punches way above our weight. Investors consistently comment on how professional and polished our identity is.", rating: 5 },
      { name: "Alexandra Petrov", role: "CMO", company: "RetailHub", review: "The rebrand increased our brand recognition by 40%. Their strategic approach to positioning was exactly what we needed.", rating: 5 },
      { name: "Hassan Ali", role: "CEO", company: "TechCorp", review: "They distilled our complex B2B offering into a clear, compelling brand story. Our sales team says it's their best tool for closing deals.", rating: 5 },
    ],
    process: {
      headline: "Our Branding Process",
      subtitle: "A strategic approach to building brands that last and differentiate.",
      steps: [
        { step: 1, title: "Brand Discovery", description: "Deep immersion into your market, competitors, audience, and business vision." },
        { step: 2, title: "Strategy & Positioning", description: "Define your brand DNA: value proposition, voice, personality, and market positioning." },
        { step: 3, title: "Visual Identity Design", description: "Logo system, color palette, typography, and visual language that tells your story." },
        { step: 4, title: "Brand Collateral", description: "Business cards, pitch decks, social templates, and all essential brand touchpoints." },
        { step: 5, title: "Brand Guidelines", description: "Comprehensive brand book with usage rules, ensuring consistency across every channel." },
      ],
    },
    toolStack: {
      headline: "Our Branding Toolkit",
      subtitle: "Professional tools for crafting world-class brand identities.",
      tools: [
        { name: "Adobe Illustrator", category: "Vector Design" },
        { name: "Adobe Photoshop", category: "Image Editing" },
        { name: "Figma", category: "Digital Design" },
        { name: "After Effects", category: "Motion" },
        { name: "Notion", category: "Strategy" },
        { name: "Miro", category: "Workshops" },
        { name: "Brandpad", category: "Guidelines" },
        { name: "Canva Pro", category: "Templates" },
        { name: "Coolors", category: "Color Systems" },
        { name: "FontPair", category: "Typography" },
        { name: "Dribbble", category: "Inspiration" },
        { name: "Google Trends", category: "Research" },
      ],
    },
  },

  "digital-presence": {
    whyUs: {
      headline: "Why Choose Us for Digital Presence",
      subtitle: "We build omnipresent digital footprints that attract, engage, and convert your ideal audience.",
      items: [
        { stat: "200%", label: "Avg. Traffic Growth", description: "Consistent organic traffic growth within the first 6 months of engagement." },
        { stat: "Top 3", label: "Keyword Rankings", description: "We've ranked clients on page 1 for 500+ high-intent keywords." },
        { stat: "45+", label: "Strategies Deployed", description: "End-to-end digital presence strategies across diverse industries." },
        { stat: "DA 50+", label: "Authority Building", description: "Our link-building and content strategies drive measurable domain authority." },
      ],
    },
    reviews: [
      { name: "Sunita Rao", role: "Marketing Director", company: "EduLearn", review: "Our organic traffic grew 250% in 6 months. Advora's SEO strategy and content framework completely transformed our digital visibility.", rating: 5 },
      { name: "Mark Stevens", role: "CEO", company: "PropertyPro", review: "They built our entire online ecosystem: website, SEO, social, and content. We now generate 70% of leads organically.", rating: 5 },
      { name: "Diana Cruz", role: "Founder", company: "HealthTrack", review: "From zero online presence to industry authority in under a year. Their structured approach to content and SEO is incredible.", rating: 5 },
    ],
    process: {
      headline: "Our Digital Presence Process",
      subtitle: "A systematic approach to building authority and visibility online.",
      steps: [
        { step: 1, title: "Digital Audit", description: "Comprehensive audit of your current online presence, competitors, and market opportunities." },
        { step: 2, title: "Strategy Blueprint", description: "Multi-channel strategy covering SEO, content, social, and authority building." },
        { step: 3, title: "Content & SEO Setup", description: "Keyword strategy, content calendar, on-page SEO, and technical optimizations." },
        { step: 4, title: "Channel Activation", description: "Launch across all planned channels with optimized profiles and initial content." },
        { step: 5, title: "Monitor & Scale", description: "Ongoing analytics, A/B testing, content iteration, and scaling what works." },
      ],
    },
    toolStack: {
      headline: "Our Digital Presence Stack",
      subtitle: "Best-in-class tools for SEO, content, and digital authority.",
      tools: [
        { name: "SEMrush", category: "SEO" },
        { name: "Ahrefs", category: "SEO" },
        { name: "Google Analytics 4", category: "Analytics" },
        { name: "Google Search Console", category: "Search" },
        { name: "Moz Pro", category: "SEO" },
        { name: "Screaming Frog", category: "Crawling" },
        { name: "HubSpot", category: "CRM" },
        { name: "Buffer", category: "Social" },
        { name: "Surfer SEO", category: "Content" },
        { name: "Yoast", category: "On-Page" },
        { name: "Schema Pro", category: "Structured Data" },
        { name: "Clarity", category: "Heatmaps" },
      ],
    },
  },

  "growth-marketing": {
    whyUs: {
      headline: "Why Choose Us for Growth Marketing",
      subtitle: "We build acquisition engines that deliver predictable, scalable revenue growth.",
      items: [
        { stat: "$5M+", label: "Ad Spend Managed", description: "Optimized paid campaigns across Google, Meta, LinkedIn, and TikTok." },
        { stat: "3.5x", label: "Avg. ROAS", description: "Our campaigns consistently outperform industry benchmarks on return on ad spend." },
        { stat: "40%", label: "Lower CAC", description: "Average reduction in customer acquisition cost through optimization." },
        { stat: "150+", label: "Campaigns Run", description: "Data-backed campaigns across B2B, B2C, D2C, and SaaS verticals." },
      ],
    },
    reviews: [
      { name: "Karan Mehta", role: "VP Growth", company: "FinanceFlow", review: "They cut our CAC by 45% while tripling lead volume. The funnel architecture they built is now our primary acquisition channel.", rating: 5 },
      { name: "Rebecca Liu", role: "CMO", company: "RetailHub", review: "Our ROAS went from 1.8x to 4.2x in three months. Their data-driven approach to paid ads is genuinely next-level.", rating: 5 },
      { name: "Arjun Nair", role: "Founder", company: "StartupX", review: "From zero to 10,000 users in 90 days. Advora's growth playbook was the catalyst for our Series A raise.", rating: 5 },
    ],
    process: {
      headline: "Our Growth Marketing Process",
      subtitle: "A systematic, data-driven approach to acquiring and retaining customers.",
      steps: [
        { step: 1, title: "Growth Audit & ICP", description: "Analyze current channels, define ideal customer profile, and identify growth levers." },
        { step: 2, title: "Funnel Architecture", description: "Design acquisition funnels from awareness to conversion with clear KPIs at each stage." },
        { step: 3, title: "Campaign Launch", description: "Launch multi-platform campaigns with A/B tested creative, copy, and targeting." },
        { step: 4, title: "Optimization Loop", description: "Weekly optimization cycles: analyze data, kill underperformers, scale winners." },
        { step: 5, title: "Scale & Expand", description: "Expand to new channels, audiences, and geographies while maintaining ROAS targets." },
      ],
    },
    toolStack: {
      headline: "Our Growth Marketing Stack",
      subtitle: "Performance marketing tools for acquisition, optimization, and scale.",
      tools: [
        { name: "Google Ads", category: "Paid Search" },
        { name: "Meta Ads", category: "Paid Social" },
        { name: "LinkedIn Ads", category: "B2B Ads" },
        { name: "Mailchimp", category: "Email" },
        { name: "ActiveCampaign", category: "Automation" },
        { name: "Hotjar", category: "Heatmaps" },
        { name: "Unbounce", category: "Landing Pages" },
        { name: "Mixpanel", category: "Analytics" },
        { name: "Google Optimize", category: "A/B Testing" },
        { name: "Zapier", category: "Automation" },
        { name: "Segment", category: "Data" },
        { name: "Intercom", category: "Engagement" },
      ],
    },
  },

  "sales-revenue": {
    whyUs: {
      headline: "Why Choose Us for Sales & Revenue",
      subtitle: "We build automated revenue systems that convert leads into paying customers at scale.",
      items: [
        { stat: "65%", label: "Pipeline Growth", description: "Average increase in qualified pipeline within the first quarter of engagement." },
        { stat: "30+", label: "CRM Implementations", description: "End-to-end CRM setups including HubSpot, Salesforce, and Pipedrive." },
        { stat: "2.5x", label: "Close Rate Lift", description: "Improved close rates through optimized sales processes and automation." },
        { stat: "$20M+", label: "Revenue Influenced", description: "Total revenue directly attributed to our sales systems and optimizations." },
      ],
    },
    reviews: [
      { name: "Deepak Joshi", role: "Head of Sales", company: "TechCorp", review: "Our sales cycle dropped from 45 days to 18 days. The CRM automation and lead scoring system they built is a game-changer.", rating: 5 },
      { name: "Amanda Foster", role: "Revenue Director", company: "MediConnect", review: "They automated our entire outbound sequence. Our SDR team now books 3x more meetings with half the manual effort.", rating: 5 },
      { name: "Nikhil Verma", role: "CEO", company: "LogiTrack", review: "The sales pipeline they designed gives us complete visibility. We forecast revenue with 90%+ accuracy now.", rating: 5 },
    ],
    process: {
      headline: "Our Revenue Systems Process",
      subtitle: "A structured approach to building predictable revenue engines.",
      steps: [
        { step: 1, title: "Revenue Audit", description: "Map your current sales funnel, identify bottlenecks, and benchmark against industry KPIs." },
        { step: 2, title: "CRM & Stack Setup", description: "Select, configure, and integrate the right CRM with your existing tools and workflows." },
        { step: 3, title: "Pipeline Design", description: "Build stage-gated pipelines with automated scoring, routing, and follow-up sequences." },
        { step: 4, title: "Outbound Automation", description: "Design and launch email, WhatsApp, and multi-channel outbound sequences." },
        { step: 5, title: "Reporting & Optimization", description: "Revenue dashboards, attribution tracking, and continuous pipeline optimization." },
      ],
    },
    toolStack: {
      headline: "Our Sales & Revenue Stack",
      subtitle: "Best-in-class tools for CRM, automation, and revenue intelligence.",
      tools: [
        { name: "HubSpot", category: "CRM" },
        { name: "Salesforce", category: "CRM" },
        { name: "Pipedrive", category: "CRM" },
        { name: "Apollo", category: "Prospecting" },
        { name: "Lemlist", category: "Outbound" },
        { name: "Zapier", category: "Automation" },
        { name: "Calendly", category: "Scheduling" },
        { name: "Gong", category: "Intelligence" },
        { name: "Stripe", category: "Payments" },
        { name: "Chargebee", category: "Billing" },
        { name: "Slack", category: "Communication" },
        { name: "Looker", category: "Reporting" },
      ],
    },
  },

  "strategy-scaling": {
    whyUs: {
      headline: "Why Choose Us for Strategy & Scaling",
      subtitle: "We help businesses move from chaos to clarity with data-driven strategy and operational excellence.",
      items: [
        { stat: "40+", label: "Strategies Delivered", description: "Go-to-market, scaling, and digital transformation strategies for growing businesses." },
        { stat: "3x", label: "Avg. Growth Rate", description: "Average revenue growth achieved by clients following our scaling frameworks." },
        { stat: "90%", label: "Goal Achievement", description: "Clients consistently hit 90%+ of their quarterly KPI targets with our frameworks." },
        { stat: "15+", label: "Industries Served", description: "Cross-industry expertise from SaaS to healthcare, fintech to logistics." },
      ],
    },
    reviews: [
      { name: "Meera Krishnan", role: "CEO", company: "HealthTrack", review: "Advora's scaling strategy helped us grow from 5 to 50 employees in one year. Their operational frameworks are world-class.", rating: 5 },
      { name: "Robert Taylor", role: "Founder", company: "StartupX", review: "Their go-to-market strategy was instrumental in our Series B. The KPI dashboards give us real-time clarity on every metric.", rating: 5 },
      { name: "Aisha Khan", role: "COO", company: "FinanceFlow", review: "They identified operational bottlenecks we'd been blind to for years. Process automation saved us 200+ hours per month.", rating: 5 },
    ],
    process: {
      headline: "Our Strategy & Scaling Process",
      subtitle: "A methodical approach to building scalable, data-driven organizations.",
      steps: [
        { step: 1, title: "Business Assessment", description: "Holistic review of operations, technology, team structure, and market position." },
        { step: 2, title: "Strategy Formulation", description: "Define goals, KPIs, competitive moats, and a clear roadmap for the next 12 months." },
        { step: 3, title: "Dashboard & Analytics", description: "Implement KPI dashboards with real-time data from all critical business functions." },
        { step: 4, title: "Process Optimization", description: "Streamline workflows, automate repetitive tasks, and eliminate operational bottlenecks." },
        { step: 5, title: "Review & Iterate", description: "Monthly strategy reviews, quarterly pivots, and continuous improvement cycles." },
      ],
    },
    toolStack: {
      headline: "Our Strategy & Analytics Stack",
      subtitle: "Data and analytics tools for strategic decision-making at scale.",
      tools: [
        { name: "Google Analytics 4", category: "Analytics" },
        { name: "Mixpanel", category: "Product Analytics" },
        { name: "Amplitude", category: "Product Analytics" },
        { name: "Tableau", category: "Visualization" },
        { name: "Looker", category: "BI" },
        { name: "Segment", category: "Data Pipeline" },
        { name: "Notion", category: "Documentation" },
        { name: "Monday.com", category: "Project Mgmt" },
        { name: "Miro", category: "Strategy" },
        { name: "Jira", category: "Execution" },
        { name: "Datadog", category: "Monitoring" },
        { name: "Metabase", category: "Dashboards" },
      ],
    },
  },
};
