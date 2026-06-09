import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Elgreen - Automatyka Przemysłowa: Innowacyjne Rozwiązania',
  description: 'Elgreen to lider w automatyce przemysłowej. Dostarczamy nowoczesne systemy robotyki, IoT i oprogramowanie SCADA/HMI, zwiększając wydajność i bezpieczeństwo Twojej firmy. Skontaktuj się z nami!',
  keywords: ["automatyka przemysłowa, robotyka, IoT, SCADA, HMI, przemysł 4.0, elektryk, rozwiązania automatyzacyjne, innowacje przemysłowe, Elgreen"],
  openGraph: {
    "title": "Elgreen - Automatyka Przemysłowa: Innowacyjne Rozwiązania",
    "description": "Elgreen to lider w automatyce przemysłowej. Dostarczamy nowoczesne systemy robotyki, IoT i oprogramowanie SCADA/HMI, zwiększając wydajność i bezpieczeństwo Twojej firmy.",
    "url": "https://www.elgreen.pl",
    "siteName": "Elgreen",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/person-using-ar-technology-their-daily-occupation_23-2151137510.jpg",
        "alt": "Zaawansowane maszyny przemysłowe w fabryce"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Elgreen - Automatyka Przemysłowa: Innowacyjne Rozwiązania",
    "description": "Elgreen to lider w automatyce przemysłowej. Dostarczamy nowoczesne systemy robotyki, IoT i oprogramowanie SCADA/HMI, zwiększając wydajność i bezpieczeństwo Twojej firmy.",
    "images": [
      "http://img.b2bpic.net/free-photo/person-using-ar-technology-their-daily-occupation_23-2151137510.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
