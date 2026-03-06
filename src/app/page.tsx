"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Shield, Zap, Clock, AlertCircle, CheckCircle, Users, Sparkles, HelpCircle } from "lucide-react";

const navItems = [
  { name: "Problem", id: "problem" },
  { name: "How It Works", id: "how-it-works" },
  { name: "Features", id: "features" },
  { name: "FAQ", id: "faq" }
];

const heroImage = "http://img.b2bpic.net/free-photo/luxurious-boardroom-space-within-multinational-company-used-meetings_482257-124520.jpg";

const socialProofLogos = [
  "http://img.b2bpic.net/free-vector/flat-minimal-technology-labels_23-2149083696.jpg",  "http://img.b2bpic.net/free-vector/hand-drawn-hub-logo-design_23-2149857667.jpg",  "http://img.b2bpic.net/free-vector/gradient-accounting-logo_23-2148844138.jpg",  "http://img.b2bpic.net/free-vector/design-artwork-logo-template_23-2149507369.jpg",  "http://img.b2bpic.net/free-vector/gradient-colored-data-logo-template_23-2149189483.jpg",  "http://img.b2bpic.net/free-vector/hand-drawn-hub-logo-design_23-2149857670.jpg",  "http://img.b2bpic.net/free-vector/hand-drawn-business-workshop-labels_23-2149422820.jpg"
];

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="large"
      background="fluid"
      cardStyle="inset"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Clearance"
          navItems={navItems}
          button={{
            text: "Join Waitlist",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Stop Losing Money When Your Content License Expires"
          description="Recover $1,000–$5,000+ per renewal on autopilot. Clearance automates IP protection for creators and agencies. Track licenses, get renewal reminders, and collect payments before your content goes dark."
          tag="Join 200+ creators protecting their IP"
          tagIcon={Shield}
          tagAnimation="blur-reveal"
          background={{ variant: "plain" }}
          kpis={[
            { value: "100%", label: "Automated Renewals" },
            { value: "$50K+", label: "Recovered Monthly" },
            { value: "5min", label: "Setup Time" }
          ]}
          enableKpiAnimation={true}
          buttons={[{ text: "Join Waitlist", href: "#contact" }]}
          imageSrc={heroImage}
          imageAlt="Clearance fintech dashboard interface"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="problem" data-section="problem">
        <MetricCardSeven
          title="The IP Renewal Crisis Facing Creators"
          description="These are the problems keeping money on the table—and Clearance solves them all."
          tag="The Problem"
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "Brands",              title: "Run Your Content Past Expiry",              items: ["No expiration tracking", "Licenses silently expire", "Brands keep profiting—you don't"]
            },
            {
              id: "2",              value: "You Never",              title: "Invoice the Renewal",              items: ["Manual renewal follow-ups", "Easy to forget", "Lost revenue disappears"]
            },
            {
              id: "3",              value: "That's Money",              title: "You'll Never See",              items: ["Average loss: $1,200/creator", "Expires quarterly", "Compounds over time"]
            }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureBento
          title="How Clearance Works"
          description="Three simple steps to never lose renewal revenue again."
          tag="Automation"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
          features={[
            {
              title: "Upload Your Deals",              description: "Connect your content licenses and set expiration dates",              bentoComponent: "timeline",              heading: "Step 1",              subheading: "One-time upload",              items: [
                { label: "Import licenses", detail: "Sync with Dropbox or manual upload" },
                { label: "Set details", detail: "Price, duration, and brand info" },
                { label: "Activate", detail: "Start tracking immediately" }
              ],
              completedLabel: "Setup Complete"
            },
            {
              title: "License Timer Runs",              description: "Real-time countdown to expiration with notifications",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Renewal Invoice Sends Automatically",              description: "Before expiry, automated invoice goes to the brand",              bentoComponent: "icon-info-cards",              items: [
                { icon: Clock, label: "30 Days Before", value: "First notice" },
                { icon: AlertCircle, label: "7 Days Before", value: "Urgent reminder" },
                { icon: CheckCircle, label: "Day of", value: "Invoice sent" }
              ]
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <ProductCardFour
          title="Clearance Features"
          description="Built for creators and agencies who need protection and peace of mind."
          tag="Platform"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          products={[
            {
              id: "1",              name: "Licensing Tracker",              price: "Core Feature",              variant: "Never miss a renewal deadline again",              imageSrc: heroImage,
              imageAlt: "Licensing tracker dashboard"
            },
            {
              id: "2",              name: "Automated Renewal Invoicing",              price: "Core Feature",              variant: "Get paid automatically before licenses expire",              imageSrc: heroImage,
              imageAlt: "Automated invoicing interface"
            },
            {
              id: "3",              name: "Payment Protection",              price: "Core Feature",              variant: "Ensure every license renewal turns into revenue",              imageSrc: heroImage,
              imageAlt: "Payment security interface"
            },
            {
              id: "4",              name: "Creator Dashboard",              price: "Core Feature",              variant: "Track all your IP revenue in one place",              imageSrc: heroImage,
              imageAlt: "Creator dashboard analytics"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Creators, agencies, and platforms rely on Clearance"
          tag="Partners"
          tagIcon={Users}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Creator Studio", "Digital Collective", "Content Agency Pro", "IP Protection Labs", "Revenue Shield", "Creator Finance", "Deal Tracker Hub"]}
          logos={socialProofLogos}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about Clearance and how it protects your IP revenue."
          tag="Help"
          tagIcon={HelpCircle}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "1",              title: "How much does Clearance cost?",              content: "Clearance is free during the waitlist phase. We're launching with tiered pricing for agencies and individual creators. Early adopters get lifetime discounts."
            },
            {
              id: "2",              title: "Do I need to upload all my licenses manually?",              content: "No. We support direct integration with Dropbox, Google Drive, and major licensing platforms. You can also bulk-upload CSV files for fast setup."
            },
            {
              id: "3",              title: "What if a brand doesn't pay the renewal invoice?",              content: "Clearance flags unpaid invoices and sends escalation notices. You'll have full audit trails and payment history to follow up or escalate disputes."
            },
            {
              id: "4",              title: "Is my data secure?",              content: "Yes. We use bank-grade encryption, SOC 2 compliance, and zero-knowledge architecture. Your licenses and payment details are never shared with third parties."
            },
            {
              id: "5",              title: "Can I use Clearance for my agency's clients?",              content: "Absolutely. Our Agency Plan includes team collaboration, multi-client management, and white-label reporting. Perfect for managing creator portfolios at scale."
            },
            {
              id: "6",              title: "How do I get started?",              content: "Join our waitlist above. We'll onboard you personally and give you a free setup call to map all your licenses and revenue streams."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Waitlist"
          title="Get Early Access"
          description="Join the waitlist and be among the first to protect your IP revenue. Early adopters get lifetime discounts and 1-on-1 onboarding."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc={heroImage}
          imageAlt="Clearance waitlist early access"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Join Waitlist"
          termsText="We respect your privacy. Unsubscribe anytime. No spam, ever."
          tagAnimation="blur-reveal"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Clearance. All rights reserved."
          bottomRightText="Protecting Creator IP."
        />
      </div>
    </ThemeProvider>
  );
}
