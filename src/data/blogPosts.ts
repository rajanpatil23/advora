export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Web Development" | "Technology Trends" | "Case Study" | "Mobile Development" | "Best Practices";
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

// Blog post images
import blogFutureWeb from "@/assets/blog-future-web.jpg";
import blogReactScalable from "@/assets/blog-react-scalable.jpg";
import blogFinanceflowCase from "@/assets/blog-financeflow-case.jpg";
import blogMobileFrameworks from "@/assets/blog-mobile-frameworks.jpg";
import blogApiDesign from "@/assets/blog-api-design.jpg";
import blogHealthtrackCase from "@/assets/blog-healthtrack-case.jpg";
import blogMicroservices from "@/assets/blog-microservices.jpg";
import blogTypescript from "@/assets/blog-typescript.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-web-development-2026",
    title: "The Future of Web Development in 2026: Trends to Watch",
    excerpt: "Explore the emerging technologies and methodologies shaping the future of web development, from AI-powered tools to edge computing.",
    content: `
      <p>The web development landscape is evolving faster than ever. As we move through 2026, several key trends are reshaping how we build and deploy web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From code completion to automated testing, AI tools are helping developers work more efficiently than ever before.</p>
      
      <h2>Edge Computing Goes Mainstream</h2>
      <p>With the rise of edge computing, we're seeing a shift away from centralized servers. This means faster load times, better user experiences, and more resilient applications.</p>
      
      <h2>WebAssembly Adoption</h2>
      <p>WebAssembly continues to gain traction, enabling high-performance applications that were previously impossible in the browser. From video editing to 3D rendering, the possibilities are expanding rapidly.</p>
      
      <h2>Sustainability in Tech</h2>
      <p>Green coding practices and sustainable hosting solutions are becoming priorities for forward-thinking companies. Optimizing code for energy efficiency is no longer optional.</p>
    `,
    category: "Technology Trends",
    author: "Alex Chen",
    date: "January 10, 2026",
    readTime: "8 min read",
    featured: true,
    image: blogFutureWeb
  },
  {
    id: "building-scalable-react-applications",
    title: "Building Scalable React Applications: A Complete Guide",
    excerpt: "Learn the best practices and architectural patterns for building React applications that can grow with your business.",
    content: `
      <p>As React applications grow in complexity, maintaining clean, scalable code becomes increasingly challenging. This guide covers the essential patterns and practices for building React apps that stand the test of time.</p>
      
      <h2>Component Architecture</h2>
      <p>A well-structured component hierarchy is the foundation of any scalable React application. We'll explore atomic design principles and how to organize your components effectively.</p>
      
      <h2>State Management Strategies</h2>
      <p>From React Query for server state to Zustand for client state, choosing the right state management solution is crucial. We'll compare the options and help you make the right choice.</p>
      
      <h2>Performance Optimization</h2>
      <p>Learn techniques like code splitting, lazy loading, and memoization to keep your application fast as it grows.</p>
      
      <h2>Testing at Scale</h2>
      <p>A comprehensive testing strategy is essential for maintaining confidence in your codebase. We'll cover unit tests, integration tests, and end-to-end testing approaches.</p>
    `,
    category: "Web Development",
    author: "Sarah Johnson",
    date: "January 8, 2026",
    readTime: "12 min read",
    featured: true,
    image: blogReactScalable
  },
  {
    id: "financeflow-case-study",
    title: "Case Study: How We Built FinanceFlow's Platform in 12 Weeks",
    excerpt: "A deep dive into how Advora helped FinanceFlow transform their financial management platform, resulting in 300% user growth.",
    content: `
      <p>When FinanceFlow approached us, they had a vision but faced significant technical challenges. Their legacy system was struggling to keep up with demand, and user complaints were mounting.</p>
      
      <h2>The Challenge</h2>
      <p>FinanceFlow needed a complete platform overhaul that could handle 10x their current user base while improving the user experience and adding new features.</p>
      
      <h2>Our Approach</h2>
      <p>We started with a comprehensive discovery phase, interviewing stakeholders and mapping out user journeys. This helped us identify the most critical pain points and opportunities.</p>
      
      <h2>Technical Implementation</h2>
      <p>Using React for the frontend and Node.js for the backend, we built a modern, microservices-based architecture. PostgreSQL with proper indexing ensured lightning-fast queries.</p>
      
      <h2>Results</h2>
      <p>The new platform launched on time and under budget. Within six months, FinanceFlow saw a 300% increase in users and a 50% reduction in support tickets.</p>
    `,
    category: "Case Study",
    author: "Michael Roberts",
    date: "January 5, 2026",
    readTime: "10 min read",
    featured: true,
    image: blogFinanceflowCase
  },
  {
    id: "react-native-vs-flutter-2026",
    title: "React Native vs Flutter in 2026: Which Should You Choose?",
    excerpt: "An in-depth comparison of the two leading cross-platform mobile development frameworks to help you make the right choice.",
    content: `
      <p>The debate between React Native and Flutter continues, but both frameworks have matured significantly. Let's examine the current state of each and help you make an informed decision.</p>
      
      <h2>Performance Comparison</h2>
      <p>Flutter's direct compilation to native code gives it a slight edge in raw performance, but React Native's new architecture has closed the gap significantly.</p>
      
      <h2>Developer Experience</h2>
      <p>If your team already knows JavaScript, React Native offers a gentler learning curve. Flutter's Dart language, while excellent, requires additional learning.</p>
      
      <h2>Ecosystem and Community</h2>
      <p>Both frameworks have thriving communities and extensive package ecosystems. React Native benefits from the broader JavaScript ecosystem.</p>
      
      <h2>Our Recommendation</h2>
      <p>The best choice depends on your specific needs, team expertise, and project requirements. We'll help you evaluate both options for your unique situation.</p>
    `,
    category: "Mobile Development",
    author: "Emily Davis",
    date: "January 3, 2026",
    readTime: "9 min read",
    image: blogMobileFrameworks
  },
  {
    id: "api-design-best-practices",
    title: "REST API Design Best Practices for 2026",
    excerpt: "Master the art of designing clean, maintainable, and developer-friendly APIs that scale with your application.",
    content: `
      <p>A well-designed API is the backbone of any modern application. Whether you're building for internal use or public consumption, these best practices will help you create APIs that developers love.</p>
      
      <h2>Consistent Naming Conventions</h2>
      <p>Use clear, predictable naming patterns for your endpoints. Stick to plural nouns for collections and use proper HTTP methods.</p>
      
      <h2>Versioning Strategies</h2>
      <p>Plan for change from day one. URL versioning vs header versioning—we'll explore the pros and cons of each approach.</p>
      
      <h2>Error Handling</h2>
      <p>Provide meaningful error messages with appropriate HTTP status codes. Include enough detail for debugging without exposing sensitive information.</p>
      
      <h2>Documentation</h2>
      <p>Great documentation is non-negotiable. Tools like OpenAPI (Swagger) make it easy to maintain up-to-date, interactive documentation.</p>
    `,
    category: "Best Practices",
    author: "Alex Chen",
    date: "December 28, 2025",
    readTime: "7 min read",
    image: blogApiDesign
  },
  {
    id: "healthtrack-pro-case-study",
    title: "Case Study: Building HealthTrack Pro's Cross-Platform App",
    excerpt: "How we delivered a feature-rich health tracking app for iOS and Android in just 16 weeks using React Native.",
    content: `
      <p>HealthTrack Pro came to us with an ambitious goal: build a comprehensive health and fitness app that could compete with established players in the market.</p>
      
      <h2>Project Requirements</h2>
      <p>The app needed to track workouts, nutrition, sleep, and vital signs while integrating with popular wearable devices and providing personalized recommendations.</p>
      
      <h2>Technology Choices</h2>
      <p>We chose React Native for its cross-platform capabilities and Firebase for real-time data sync. TensorFlow Lite powers the personalized workout recommendations.</p>
      
      <h2>Key Features</h2>
      <p>From Apple Health and Google Fit integration to custom workout builders and nutrition tracking, we packed in features that users love.</p>
      
      <h2>Launch Success</h2>
      <p>HealthTrack Pro launched to rave reviews, achieving a 4.8-star rating on both app stores and acquiring 50,000 users in the first month.</p>
    `,
    category: "Case Study",
    author: "Sarah Johnson",
    date: "December 22, 2025",
    readTime: "11 min read",
    image: blogHealthtrackCase
  },
  {
    id: "microservices-architecture-guide",
    title: "When to Use Microservices: A Practical Guide",
    excerpt: "Not every application needs microservices. Learn when this architecture makes sense and when to stick with a monolith.",
    content: `
      <p>Microservices have become a buzzword in software development, but they're not always the right choice. This guide helps you make an informed decision.</p>
      
      <h2>Understanding the Trade-offs</h2>
      <p>Microservices add complexity in exchange for scalability and flexibility. For many applications, a well-structured monolith is actually the better choice.</p>
      
      <h2>Signs You Need Microservices</h2>
      <p>Large teams, diverse technology requirements, and independent scaling needs are indicators that microservices might be right for you.</p>
      
      <h2>Starting with a Modular Monolith</h2>
      <p>We often recommend starting with a modular monolith that can be split into microservices later. This approach reduces initial complexity while keeping options open.</p>
      
      <h2>Migration Strategies</h2>
      <p>If you're moving from a monolith to microservices, the strangler fig pattern offers a safe, incremental approach.</p>
    `,
    category: "Best Practices",
    author: "Michael Roberts",
    date: "December 18, 2025",
    readTime: "8 min read",
    image: blogMicroservices
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices Every Developer Should Know",
    excerpt: "Level up your TypeScript skills with these essential patterns and practices used by top development teams.",
    content: `
      <p>TypeScript has become the standard for modern web development. These best practices will help you get the most out of the language.</p>
      
      <h2>Strict Mode is Your Friend</h2>
      <p>Enable strict mode from the start. It catches more errors at compile time and leads to more robust code.</p>
      
      <h2>Avoid the 'any' Type</h2>
      <p>Using 'any' defeats the purpose of TypeScript. Learn to use 'unknown' and proper type guards instead.</p>
      
      <h2>Leverage Utility Types</h2>
      <p>TypeScript's built-in utility types like Partial, Pick, and Omit can significantly reduce boilerplate.</p>
      
      <h2>Discriminated Unions</h2>
      <p>This powerful pattern helps you model complex state and ensures exhaustive handling of all cases.</p>
    `,
    category: "Web Development",
    author: "Alex Chen",
    date: "December 15, 2025",
    readTime: "6 min read",
    image: blogTypescript
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: BlogPost["category"]): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};
