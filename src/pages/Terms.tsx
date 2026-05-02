import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageSEO";

const Terms = () => {
  usePageSEO({
    title: "Terms of Service",
    description: "Review the Advora Digital terms of service governing your use of our website and services.",
    canonical: "/terms",
    noIndex: true,
  });
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
        {/* Hero Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Terms of Service
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: January 14, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Advora's website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground">
              Advora provides software development, web development, mobile app development, and related 
              technology consulting services. Specific project terms, deliverables, and timelines are 
              outlined in individual project contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              Upon full payment, clients receive ownership of the custom software and code developed 
              specifically for their project. Advora retains ownership of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Pre-existing code libraries and frameworks</li>
              <li>General methodologies and techniques</li>
              <li>Our website content, logos, and branding</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <p className="text-muted-foreground">
              Payment terms are specified in individual project contracts. Typically, projects require 
              an upfront deposit with milestone-based payments. Late payments may result in project 
              delays or suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
            <p className="text-muted-foreground">
              We treat all client information, project details, and business data as confidential. 
              We will not disclose your information to third parties without your consent, except 
              as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Advora's liability is limited to the amount paid for the specific project or service. 
              We are not liable for indirect, incidental, or consequential damages arising from the 
              use of our services or deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Project Changes</h2>
            <p className="text-muted-foreground">
              Changes to project scope after contract signing may require additional time and cost. 
              All change requests will be documented and require mutual agreement before implementation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate a project with written notice as specified in the project contract. 
              Upon termination, the client is responsible for payment of all work completed up to 
              the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of the State of New York, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              Email: advora.in@gmail.com<br />
              Address: New York, NY
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
