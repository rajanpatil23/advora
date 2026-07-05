import invoiceScreenshot from "@/assets/invoice-suite-hero.webp";
import warehouseScreenshot from "@/assets/warehouse-management-hero.webp";
import serviceDeskScreenshot from "@/assets/service-desk-hero.webp";
import claimsScreenshot from "@/assets/claims-os-hero.webp";
import invoiceDemo from "@/assets/productized-tool-1.webp";
import warehouseDemo from "@/assets/productized-tool-2.webp";
import serviceDeskDemo from "@/assets/productized-tool-3.webp";
import claimsDemo from "@/assets/productized-tool-4.webp";

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
  demoUrl: string;
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
    route: "/products/invoice-suite",
    name: "Invoice Suite",
    eyebrow: "Billing and revenue operations",
    headlineSerif: "Invoice Suite",
    headlineStrong: "Enterprise Billing, Simplified",
    description:
      "Enterprise billing software for finance and revenue teams that need accurate invoicing, structured approvals, complete payment visibility, and reliable revenue reporting at scale.",
    demoSummary:
      "Walk through invoice creation, approval status, payment reminders, expenses, and revenue reporting from one operational dashboard.",
    screenshot: invoiceScreenshot,
    demoImage: invoiceDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/ZlL28DDMHgv02GRxghXR",
    demoUrl: "https://invoicesuite-dev.advora.in",
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
        title: "Real-time visibility into cashflow",
        description:
          "Finance leaders get an accurate view of collected, pending, and overdue revenue across every business unit.",
      },
      {
        title: "Structured recurring billing",
        description:
          "Retainers, subscriptions, milestone billing, and client ledgers stay organized across large customer bases.",
      },
      {
        title: "Reduces finance operations overhead",
        description:
          "Templates, automated reminders, and approval workflows cut repetitive work for finance and operations teams.",
      },
      {
        title: "Consistent, professional client experience",
        description:
          "Branded invoices, clear communication, and reliable status updates strengthen enterprise customer relationships.",
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
        "Invoice Suite by Advora Digital is enterprise billing software for invoices, payments, expenses, approvals, and revenue reporting.",
      canonical: "/products/invoice-suite",
    },
    cta: {
      title: "Ready to modernize billing operations?",
      description:
        "We'll configure Invoice Suite around your clients, contracts, payment workflows, and financial reporting requirements.",
      buttonText: "Request an Invoice Suite Demo",
    },
  },
  {
    id: "warehouse-management",
    route: "/products/warehouse-management",
    name: "Warehouse Management",
    eyebrow: "Inventory and fulfillment control",
    headlineSerif: "Warehouse Management",
    headlineStrong: "Inventory Control at Scale",
    description:
      "Enterprise warehouse software for operations teams that need real-time stock visibility, shipment tracking, dispatch planning, supplier coordination, and multi-warehouse control.",
    demoSummary:
      "Explore receiving, stock movement, category distribution, dispatch status, supplier records, and warehouse utilization in one virtual walkthrough.",
    screenshot: warehouseScreenshot,
    demoImage: warehouseDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/Uox7eArzEzTw0gbxQZeo",
    demoUrl: "https://warehousemanagement-demo.advora.in",
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
        title: "Eliminates stock discrepancies",
        description:
          "Operations teams get a single source of truth across warehouses, channels, and fulfillment partners.",
      },
      {
        title: "Supports high-volume commerce",
        description:
          "Orders, dispatches, returns, and supplier data stay accurate as SKU counts and order volume grow.",
      },
      {
        title: "Multi-warehouse and multi-team ready",
        description:
          "Manage multiple locations, zones, and business units with role-based views and permissions.",
      },
      {
        title: "Clear cross-team handoffs",
        description:
          "Warehouse, operations, finance, and support teams work from the same order and inventory truth.",
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
        "Warehouse Management by Advora Digital is enterprise software for inventory, dispatches, suppliers, and warehouse utilization.",
      canonical: "/products/warehouse-management",
    },
    cta: {
      title: "Need reliable inventory and dispatch control?",
      description:
        "We'll configure Warehouse Management around your products, locations, suppliers, and fulfillment workflow.",
      buttonText: "Request a Warehouse Demo",
    },
  },
  {
    id: "service-desk",
    route: "/products/service-desk",
    name: "Service Desk",
    eyebrow: "Support and client operations",
    headlineSerif: "Service Desk",
    headlineStrong: "Enterprise Support Operations",
    description:
      "Enterprise service management software for support, IT, and client operations teams handling tickets, incidents, approvals, SLAs, and workload across the business.",
    demoSummary:
      "Move through ticket intake, team assignment, workload tracking, knowledge base records, SLA alerts, and customer mood signals.",
    screenshot: serviceDeskScreenshot,
    demoImage: serviceDeskDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/auD5xjdS5KPo3ZhfV3Bd",
    demoUrl: "https://servicedesk-demo.advora.in",
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
        title: "Unifies fragmented support channels",
        description:
          "Consolidates requests across email, chat, portals, and internal tools into one governed workspace.",
      },
      {
        title: "Enterprise-ready client operations",
        description:
          "Centralize customer issues, approvals, escalations, and recurring requests with role-based access and audit trails.",
      },
      {
        title: "Keeps leaders ahead of risk",
        description:
          "Managers see what is late, overloaded, breached, or trending toward escalation in real time.",
      },
      {
        title: "Scales support without linear headcount",
        description:
          "Structured queues, automation, and reporting let teams serve more customers with consistent quality.",
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
        "Service Desk by Advora Digital is enterprise service software for tickets, support, workload, SLAs, and service operations.",
      canonical: "/products/service-desk",
    },
    cta: {
      title: "Ready to modernize service operations?",
      description:
        "We'll configure Service Desk around your customers, channels, SLA policies, and delivery workflows.",
      buttonText: "Request a Service Desk Demo",
    },
  },
  {
    id: "claims-os",
    route: "/products/claims-os",
    name: "Claims OS",
    eyebrow: "Claims, approvals, and reimbursements",
    headlineSerif: "Claims OS",
    headlineStrong: "Governed Claims and Approvals",
    description:
      "Enterprise claims management software for finance, HR, and operations teams handling reimbursements, travel, approvals, documents, policy compliance, and audit-ready records.",
    demoSummary:
      "Review claim intake, progress states, approval queues, document checks, claimant communication, and reimbursement readiness.",
    screenshot: claimsScreenshot,
    demoImage: claimsDemo,
    arcadeDemoUrl: "https://app.arcade.software/share/MbuEV4vwggnl2Qf8onys",
    demoUrl: "https://claimsflow-demo.advora.in",
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
        title: "Removes reimbursement friction",
        description:
          "Employees, approvers, and finance work from one governed system instead of scattered emails and spreadsheets.",
      },
      {
        title: "Enterprise policy enforcement",
        description:
          "Category limits, document requirements, and approval matrices are applied consistently across the organization.",
      },
      {
        title: "Consistent, explainable decisions",
        description:
          "Approvers review claims against defined rules with a clear audit trail for every action.",
      },
      {
        title: "Streamlined finance handoff",
        description:
          "Approved claims flow to payout with documents, notes, and decisions already organized for finance.",
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
        "Claims OS by Advora Digital is enterprise software for claims, reimbursements, approvals, documents, and audit trails.",
      canonical: "/products/claims-os",
    },
    cta: {
      title: "Ready to standardize claims and approvals?",
      description:
        "We'll configure Claims OS around your reimbursement policy, approval matrix, claimant roles, and finance workflow.",
      buttonText: "Request a Claims OS Demo",
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
