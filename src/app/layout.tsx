import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ondesk | The AI front desk for local businesses",
  description:
    "Ondesk answers your website chat, WhatsApp and Instagram DMs 24/7, books appointments into your calendar and follows up with every lead. Set up in one afternoon. Try it free for 14 days.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    title: "Ondesk | The AI front desk for local businesses",
    description:
      "Answers every chat, WhatsApp and DM in seconds, books straight into your calendar and follows up while you work. 14 days free, no credit card.",
    url: SITE_URL,
    siteName: "Ondesk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ondesk | The AI front desk for local businesses",
    description:
      "Answers every chat, WhatsApp and DM in seconds, books straight into your calendar and follows up while you work.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F3EFE7",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Ondesk",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Ondesk is an AI front desk for local service businesses. It answers website chat, WhatsApp and Instagram DMs 24/7, books appointments into your calendar, qualifies leads and follows up no-shows.",
      url: SITE_URL,
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "49",
        highPrice: "299",
        priceCurrency: "USD",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "380",
      },
    },
    {
      "@type": "Organization",
      name: "Ondesk Inc.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Will it sound like a robot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You set the tone and approve example answers. Most customers can't tell, and Ondesk always tells people it's an assistant if asked.",
          },
        },
        {
          "@type": "Question",
          name: "What if it doesn't know the answer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It never guesses prices or medical advice. It tells the customer a team member will reply and flags the chat for you.",
          },
        },
        {
          "@type": "Question",
          name: "Which calendars and booking tools does it work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Calendar, Calendly, Fresha, Mindbody and Square Appointments. More are added every month.",
          },
        },
        {
          "@type": "Question",
          name: "How long does setup take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most businesses are live in one afternoon. Our team can set it up for you on Growth and Pro.",
          },
        },
        {
          "@type": "Question",
          name: "Is my customer data safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data is encrypted in transit and at rest, stored in the US or EU, and never used to train public models.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. No contracts, no setup fees. Export your conversations whenever you like.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
