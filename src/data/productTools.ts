import invoiceScreenshot from "@/assets/invoice-suite-hero.png";
import warehouseScreenshot from "@/assets/warehouse-management-hero.png";
import serviceDeskScreenshot from "@/assets/service-desk-hero.png";
import claimsScreenshot from "@/assets/Claims OS (1).png";
import invoiceDemo from "@/assets/productized-tool-1.png";
import warehouseDemo from "@/assets/productized-tool-2.png";
import serviceDeskDemo from "@/assets/productized-tool-3.png";
import claimsDemo from "@/assets/productized-tool-4.png";

export interface ProductTool {
  id: string;
  route: string;
  name: string;
  eyebrow: string;
  headlineSerif: string;
  headlineStrong: string;
  description: string;
  demoSummary: string;
  screenshot: string;
  demoImage: string;
  arcadeDemoUrl: string;
  screenshotAlt: string;
  demoAlt: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  demoSteps: Array<{
    title: string;
    description: string;
  }>;
  highlights: Array<{
    title: string;
    description: string;
  }>;
  startupBenefits: Array<{
    title: string;
    description: string;
  }>;
  modules: string[];
  integrations: string[];
  implementation: Array<{
    title: string;
    description: string;
  }>;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const productTools: ProductTool[] = [
  {
    id: "invoice-suite",
    route: "/products/tool-1",
    name: "Invoice Suite",
    eyebrow: "Billing and revenue operations",
    headlineSerif: "Invoice Suite",
    headlineStrong: "Billing That Moves Faster",
    description:
      "A focused billing workspace for startups, agencies, and service teams that need cleaner invoices, faster approvals, payment visibility, and fewer manual follow-ups.",
    demoSummary:
      "Walk through invoice creation, approval status, payment reminders, expenses, and revenue reporting from one operational dashboard.",
    screenshot: invoiceScreenshot,
    demoImage: invoiceDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/ZlL28DDMHgv02GRxghXR",
    screenshotAlt: "Invoice Suite dashboard screenshot",
    demoAlt: "Invoice Suite virtual demo interface",
    metrics: [
      { value: "1", label: "billing command center" },
      { value: "4", label: "core finance workflows" },
      { value: "0", label: "scattered follow-up sheets" },
    ],
    demoSteps: [
      {
        title: "Create a client invoice",
        description:
          "Build invoices from projects, retainers, milestones, or one-time services with taxes, discounts, and payment terms.",
      },
      {
        title: "Send and track payment status",
        description:
          "Monitor draft, sent, paid, partial, and overdue invoices without switching between spreadsheets and inboxes.",
      },
      {
        title: "Automate follow-ups",
        description:
          "Trigger reminders, internal alerts, and approval nudges so founders and finance teams do not chase every payment manually.",
      },
      {
        title: "Review revenue reports",
        description:
          "See monthly revenue, pending collections, expenses, and client balances in a clean reporting view.",
      },
    ],
    highlights: [
      {
        title: "Invoice builder",
        description:
          "Generate polished invoices with custom fields, client details, taxes, discounts, and line items.",
      },
      {
        title: "Payment visibility",
        description:
          "Give your team a live view of paid, pending, failed, partial, and overdue collections.",
      },
      {
        title: "Expense tracking",
        description:
          "Capture operational expenses beside revenue so founders can understand actual margins faster.",
      },
      {
        title: "Approval workflow",
        description:
          "Add internal review steps before invoices are sent, edited, cancelled, or marked as settled.",
      },
      {
        title: "Client ledger",
        description:
          "Keep every invoice, payment, credit note, and outstanding balance attached to the right client.",
      },
      {
        title: "Revenue reports",
        description:
          "Review collections, overdue accounts, tax totals, and monthly cash movement without manual consolidation.",
      },
    ],
    startupBenefits: [
      {
        title: "Keeps founders close to cashflow",
        description:
          "Early teams can see what is collected, what is delayed, and which clients need attention before cash gets tight.",
      },
      {
        title: "Helps agencies manage retainers",
        description:
          "Recurring invoices, milestone billing, and client balances stay organized for service-heavy teams.",
      },
      {
        title: "Reduces finance admin",
        description:
          "Templates, reminders, and status tracking reduce repetitive work for small operations teams.",
      },
      {
        title: "Improves client confidence",
        description:
          "Clean invoices and consistent communication make the billing experience feel professional from day one.",
      },
    ],
    modules: [
      "Invoice and quote builder",
      "Recurring billing workflows",
      "Payment status board",
      "Expense capture",
      "Client ledger",
      "Tax and discount fields",
      "Approval permissions",
      "Revenue reporting",
    ],
    integrations: [
      "Payment gateways",
      "Accounting exports",
      "CRM records",
      "Email reminders",
      "WhatsApp notifications",
      "Cloud storage",
    ],
    implementation: [
      {
        title: "Brand the invoice experience",
        description:
          "Templates, terms, sender identity, client fields, and invoice numbering can match your company process.",
      },
      {
        title: "Connect your payment flow",
        description:
          "Integrate payment links, finance exports, and notification channels around the way your team already works.",
      },
      {
        title: "Launch with controls",
        description:
          "Set roles for admins, finance users, managers, and viewers so the right people approve the right actions.",
      },
    ],
    seo: {
      title: "Invoice Suite",
      description:
        "Invoice Suite by Advora Digital helps startups and agencies manage invoices, payments, expenses, approvals, and revenue reporting.",
      canonical: "/products/tool-1",
    },
    cta: {
      title: "Ready to simplify billing operations?",
      description:
        "We can tailor Invoice Suite around your clients, retainers, payment workflow, and reporting needs.",
      buttonText: "Book an Invoice Suite Demo",
    },
  },
  {
    id: "warehouse-management",
    route: "/products/tool-2",
    name: "Warehouse Management",
    eyebrow: "Inventory and fulfillment control",
    headlineSerif: "Warehouse Management",
    headlineStrong: "Inventory Without Guesswork",
    description:
      "A warehouse operations console for teams that need stock visibility, shipment tracking, dispatch planning, supplier coordination, and fewer inventory surprises.",
    demoSummary:
      "Explore receiving, stock movement, category distribution, dispatch status, supplier records, and warehouse utilization in one virtual walkthrough.",
    screenshot: warehouseScreenshot,
    demoImage: warehouseDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/Uox7eArzEzTw0gbxQZeo",
    screenshotAlt: "Warehouse Management dashboard screenshot",
    demoAlt: "Warehouse Management virtual demo interface",
    metrics: [
      { value: "Live", label: "stock movement view" },
      { value: "Multi", label: "warehouse ready" },
      { value: "Fast", label: "dispatch handoff" },
    ],
    demoSteps: [
      {
        title: "Receive and classify stock",
        description:
          "Log inbound items, supplier batches, categories, storage zones, and available quantities as inventory enters the system.",
      },
      {
        title: "Track inventory movement",
        description:
          "Follow inbound, reserved, picked, packed, damaged, returned, and outbound units across your warehouse workflow.",
      },
      {
        title: "Plan dispatches",
        description:
          "Move orders through picking, packing, handoff, and shipment status with fewer manual updates.",
      },
      {
        title: "Watch utilization and gaps",
        description:
          "Surface low stock, aging inventory, supplier delays, category distribution, and warehouse capacity pressure.",
      },
    ],
    highlights: [
      {
        title: "Stock ledger",
        description:
          "Maintain a reliable history of every inbound, outbound, return, adjustment, and transfer.",
      },
      {
        title: "Dispatch board",
        description:
          "Coordinate picking, packing, pending handoffs, outgoing shipments, and delayed orders from one board.",
      },
      {
        title: "Supplier management",
        description:
          "Track supplier details, purchase references, lead times, and delivery status without scattered files.",
      },
      {
        title: "Warehouse utilization",
        description:
          "Understand how capacity is being used across categories, zones, and inventory types.",
      },
      {
        title: "Low-stock alerts",
        description:
          "Set reorder points and notify teams before important products fall below operational thresholds.",
      },
      {
        title: "Returns and adjustments",
        description:
          "Handle damaged stock, returns, manual corrections, and audit trails with structured records.",
      },
    ],
    startupBenefits: [
      {
        title: "Prevents stock confusion",
        description:
          "Growing teams can avoid selling items that are unavailable or losing track of inventory across channels.",
      },
      {
        title: "Supports ecommerce growth",
        description:
          "Orders, dispatches, returns, and supplier data stay organized as sales volume increases.",
      },
      {
        title: "Helps agencies serving D2C brands",
        description:
          "Operations partners can manage client stock reports, fulfillment status, and dispatch visibility in one place.",
      },
      {
        title: "Makes handoffs clearer",
        description:
          "Warehouse, operations, and customer support teams can see the same order and stock status.",
      },
    ],
    modules: [
      "Inventory ledger",
      "Inbound receiving",
      "Category distribution",
      "Supplier records",
      "Dispatch board",
      "Stock adjustment log",
      "Warehouse utilization",
      "Low-stock alerts",
    ],
    integrations: [
      "Ecommerce stores",
      "Shipping providers",
      "Supplier sheets",
      "Barcode workflows",
      "Accounting exports",
      "Customer support tools",
    ],
    implementation: [
      {
        title: "Model your warehouse structure",
        description:
          "Set up products, categories, zones, statuses, supplier fields, and dispatch stages around your actual operation.",
      },
      {
        title: "Connect order sources",
        description:
          "Bring orders from stores, marketplaces, or internal teams into a single fulfillment workflow.",
      },
      {
        title: "Add reporting controls",
        description:
          "Create role-based views for founders, warehouse teams, support agents, and client-facing operations managers.",
      },
    ],
    seo: {
      title: "Warehouse Management",
      description:
        "Warehouse Management by Advora Digital helps startups and agencies manage inventory, dispatches, suppliers, and warehouse utilization.",
      canonical: "/products/tool-2",
    },
    cta: {
      title: "Need cleaner inventory and dispatch visibility?",
      description:
        "We can adapt Warehouse Management around your products, warehouses, suppliers, and fulfillment workflow.",
      buttonText: "Book a Warehouse Demo",
    },
  },
  {
    id: "service-desk",
    route: "/products/tool-3",
    name: "Service Desk",
    eyebrow: "Support and client operations",
    headlineSerif: "Service Desk",
    headlineStrong: "Support That Stays Organized",
    description:
      "A service operations hub for teams managing tickets, client requests, team workload, incidents, approvals, and support reporting from one shared workspace.",
    demoSummary:
      "Move through ticket intake, team assignment, workload tracking, knowledge base records, SLA alerts, and customer mood signals.",
    screenshot: serviceDeskScreenshot,
    demoImage: serviceDeskDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/auD5xjdS5KPo3ZhfV3Bd",
    screenshotAlt: "Service Desk dashboard screenshot",
    demoAlt: "Service Desk virtual demo interface",
    metrics: [
      { value: "21", label: "open ticket view" },
      { value: "8", label: "risk alerts" },
      { value: "Team", label: "workload clarity" },
    ],
    demoSteps: [
      {
        title: "Capture every request",
        description:
          "Bring support tickets, client requests, incidents, approvals, and saved views into a shared operational queue.",
      },
      {
        title: "Assign the right owner",
        description:
          "Route work by category, priority, client, or teammate so urgent requests do not sit unnoticed.",
      },
      {
        title: "Monitor workload and risk",
        description:
          "Review open tickets, breached items, team workload, at-risk conversations, and escalations.",
      },
      {
        title: "Close the feedback loop",
        description:
          "Use canned responses, knowledge base links, customer mood signals, and reports to improve support quality.",
      },
    ],
    highlights: [
      {
        title: "Unified inbox",
        description:
          "Keep support, incidents, approvals, and client requests visible in one structured workspace.",
      },
      {
        title: "SLA and risk tracking",
        description:
          "Spot breached items, delayed responses, urgent requests, and high-risk clients before they escalate.",
      },
      {
        title: "Team workload",
        description:
          "Balance tickets across team members and understand where capacity is overloaded.",
      },
      {
        title: "Knowledge base",
        description:
          "Store reusable answers, process notes, and support references so teams respond consistently.",
      },
      {
        title: "Client mood signals",
        description:
          "Capture sentiment and interaction quality to see where relationships need proactive attention.",
      },
      {
        title: "Reporting views",
        description:
          "Track ticket volume, response time, unresolved items, team activity, and recurring issues.",
      },
    ],
    startupBenefits: [
      {
        title: "Replaces inbox chaos",
        description:
          "Small teams can stop losing support requests across email, chat, spreadsheets, and direct messages.",
      },
      {
        title: "Improves client delivery for agencies",
        description:
          "Agencies can centralize client issues, approvals, saved views, and recurring requests in one portal-like system.",
      },
      {
        title: "Keeps managers ahead of risks",
        description:
          "Leads can quickly see what is late, overloaded, blocked, or likely to become a client problem.",
      },
      {
        title: "Scales support without hiring too early",
        description:
          "Structured queues, reusable replies, and reporting help lean teams serve more clients with fewer manual steps.",
      },
    ],
    modules: [
      "Unified ticket inbox",
      "Team assignment",
      "SLA monitoring",
      "Incident tracking",
      "Approval requests",
      "Knowledge base",
      "Canned responses",
      "Workload reporting",
    ],
    integrations: [
      "Email inboxes",
      "Live chat",
      "CRM records",
      "Project tools",
      "Slack or Teams",
      "Client portals",
    ],
    implementation: [
      {
        title: "Define support categories",
        description:
          "Shape ticket types, priorities, SLA rules, client groups, and escalation paths around your operating model.",
      },
      {
        title: "Migrate common answers",
        description:
          "Turn existing support scripts, SOPs, and repeated replies into a usable knowledge base.",
      },
      {
        title: "Build manager views",
        description:
          "Create dashboards for founders, support leads, account managers, and delivery teams.",
      },
    ],
    seo: {
      title: "Service Desk",
      description:
        "Service Desk by Advora Digital helps startups and agencies manage tickets, client support, workload, SLAs, and service operations.",
      canonical: "/products/tool-3",
    },
    cta: {
      title: "Ready to organize support and client requests?",
      description:
        "We can tailor Service Desk around your clients, support channels, SLA rules, and delivery workflow.",
      buttonText: "Book a Service Desk Demo",
    },
  },
  {
    id: "claims-os",
    route: "/products/tool-4",
    name: "Claims OS",
    eyebrow: "Claims, approvals, and reimbursements",
    headlineSerif: "Claims OS",
    headlineStrong: "Approvals Without Back-and-Forth",
    description:
      "A claims management system for teams handling reimbursements, travel claims, approvals, documents, policy checks, and audit-ready status tracking.",
    demoSummary:
      "Review claim intake, progress states, approval queues, document checks, claimant communication, and reimbursement readiness.",
    screenshot: claimsScreenshot,
    demoImage: claimsDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/MbuEV4vwggnl2Qf8onys",
    screenshotAlt: "Claims OS dashboard screenshot",
    demoAlt: "Claims OS virtual demo interface",
    metrics: [
      { value: "4", label: "claim status lanes" },
      { value: "Audit", label: "ready history" },
      { value: "Role", label: "based approvals" },
    ],
    demoSteps: [
      {
        title: "Submit a claim",
        description:
          "Capture claimant details, category, amount, receipts, travel records, notes, and required documents in one form.",
      },
      {
        title: "Validate the request",
        description:
          "Check required fields, policy rules, duplicate references, missing documents, and approver routing.",
      },
      {
        title: "Move through approval",
        description:
          "Track claims from submitted to in review, approved, rejected, or needing claimant action.",
      },
      {
        title: "Prepare payout and records",
        description:
          "Keep finance-ready exports, decision notes, document history, and status updates attached to every claim.",
      },
    ],
    highlights: [
      {
        title: "Claim intake",
        description:
          "Collect structured claim information with receipts, categories, references, and claimant context.",
      },
      {
        title: "Approval routing",
        description:
          "Send claims to the right reviewer based on department, amount, policy, project, or client.",
      },
      {
        title: "Document checks",
        description:
          "Keep receipts, proofs, approvals, change requests, and notes connected to the claim record.",
      },
      {
        title: "Policy visibility",
        description:
          "Make claim rules and exceptions easier to review so decisions are consistent and explainable.",
      },
      {
        title: "Status communication",
        description:
          "Let claimants see what is submitted, in review, approved, rejected, or waiting on updates.",
      },
      {
        title: "Audit trail",
        description:
          "Preserve reviewer actions, timestamps, comments, attachments, and final decisions for future review.",
      },
    ],
    startupBenefits: [
      {
        title: "Removes reimbursement confusion",
        description:
          "Teams can stop chasing receipts, approval screenshots, and finance updates across messages.",
      },
      {
        title: "Useful for agency operations",
        description:
          "Client visits, travel, contractor expenses, campaign costs, and project reimbursements stay attached to clear records.",
      },
      {
        title: "Protects policy consistency",
        description:
          "Approvers can review claims against defined rules instead of relying on memory or informal exceptions.",
      },
      {
        title: "Makes finance handoff easier",
        description:
          "Approved claims can be exported or prepared for payout with documents and decisions already organized.",
      },
    ],
    modules: [
      "Claim submission portal",
      "Receipt and document upload",
      "Policy checks",
      "Approval routing",
      "Claimant updates",
      "Reviewer notes",
      "Finance export",
      "Audit trail",
    ],
    integrations: [
      "HR systems",
      "Finance tools",
      "Cloud storage",
      "Email alerts",
      "Project records",
      "Payment workflows",
    ],
    implementation: [
      {
        title: "Configure claim policies",
        description:
          "Set categories, limits, document requirements, approval rules, and exception paths around your internal policy.",
      },
      {
        title: "Design claimant and reviewer views",
        description:
          "Create focused screens for employees, contractors, managers, finance teams, and admins.",
      },
      {
        title: "Connect finance handoff",
        description:
          "Prepare exports, payment references, document folders, and status notifications for payout operations.",
      },
    ],
    seo: {
      title: "Claims OS",
      description:
        "Claims OS by Advora Digital helps startups and agencies manage claims, reimbursements, approvals, documents, and audit trails.",
      canonical: "/products/tool-4",
    },
    cta: {
      title: "Ready to clean up claims and approvals?",
      description:
        "We can tailor Claims OS around your reimbursement policy, approval rules, claimant roles, and finance workflow.",
      buttonText: "Book a Claims OS Demo",
    },
  },
];

export const productToolsById = productTools.reduce<Record<string, ProductTool>>(
  (tools, tool) => {
    tools[tool.id] = tool;
    return tools;
  },
  {},
);
