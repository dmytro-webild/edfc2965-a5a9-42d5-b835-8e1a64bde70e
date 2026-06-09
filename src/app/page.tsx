"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Zap, CircuitBoard, Monitor, Wrench } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmall"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Start",          id: "#home"},
        {
          name: "O nas",          id: "#about"},
        {
          name: "Usługi",          id: "#features"},
        {
          name: "Statystyki",          id: "#metrics"},
        {
          name: "Produkty",          id: "#products"},
        {
          name: "Referencje",          id: "#testimonials"},
        {
          name: "Partnerzy",          id: "#social-proof"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Kontakt",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/paper-craft-cog-wheel-icon_53876-74658.jpg"
      logoAlt="Elgreen Logo"
      brandName="Elgreen"
      button={{
        text: "Zapytaj o ofertę",        href: "#contact"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboard
      background={{
        variant: "downward-rays-static-grid"}}
      title="Elgreen: Automatyka Przemysłowa Przyszłości"
      description="Integrujemy innowacyjne rozwiązania, które zwiększają wydajność, bezpieczeństwo i niezawodność Twoich procesów produkcyjnych. Przemysł 4.0 na wyciągnięcie ręki."
      buttons={[
        {
          text: "Odkryj nasze rozwiązania",          href: "#features"},
        {
          text: "Skontaktuj się z nami",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/person-using-ar-technology-their-daily-occupation_23-2151137510.jpg"
      imageAlt="Zaawansowane maszyny przemysłowe w fabryce"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",          alt: "Experienced male engineer"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67156.jpg",          alt: "Confident female industrial designer"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-person-working-construction-industry_23-2151349663.jpg",          alt: "Male technician in a modern factory"},
        {
          src: "http://img.b2bpic.net/free-photo/diverse-group-ambitious-businesswomen-engaged-briefing-meeting_482257-124415.jpg",          alt: "Female project manager"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-sitting-desk_23-2149429127.jpg",          alt: "Senior expert in automation"},
      ]}
      avatarText="Dołącz do ponad 250 zadowolonych klientów!"
      marqueeItems={[
        {
          type: "text",          text: "Innowacja"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301539.jpg",          alt: "Integrated circuits and glowing data streams"},
        {
          type: "text",          text: "Niezawodność"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/view-sea-horse-animal-with-fantastic-neon-lighting_23-2151514435.jpg",          alt: "Robotic arm performing intricate assembly"},
        {
          type: "text",          text: "Wydajność"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/photovoltaics-factory-engineer-looking-paperwork-documents-analyzing-data_482257-118009.jpg",          alt: "Digital dashboard displaying real-time factory data"},
        {
          type: "text",          text: "Bezpieczeństwo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/data-center-technicians-deploying-ai-driven-management-tools-using-tablet_482257-125454.jpg",          alt: "Engineer interacting with a transparent touchscreen"},
        {
          type: "text",          text: "Precyzja"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Wizja Elgreen: Tworzymy Inteligentny Przemysł"
      buttons={[
        {
          text: "Poznaj naszą historię",          href: "#"},
      ]}
      
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Robotyka i Automatyzacja",          description: "Projektowanie i integracja systemów robotycznych, zwiększających precyzję i szybkość produkcji.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-robot-arms-grunge-metallic-surface_1048-10845.jpg",          imageAlt: "Robotyka przemysłowa",          buttonIcon: Zap,
        },
        {
          title: "Systemy IoT dla Przemysłu",          description: "Wdrożenia rozwiązań Internetu Rzeczy do monitorowania i zarządzania danymi w czasie rzeczywistym.",          imageSrc: "http://img.b2bpic.net/free-photo/industry-40-engineer-upgrading-robotic-automation-systems_482257-126783.jpg",          imageAlt: "IoT w przemyśle",          buttonIcon: CircuitBoard,
        },
        {
          title: "Oprogramowanie SCADA/HMI",          description: "Tworzenie intuicyjnych interfejsów do kontroli i wizualizacji procesów przemysłowych.",          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-technology-concept_23-2151908108.jpg",          imageAlt: "Oprogramowanie SCADA",          buttonIcon: Monitor,
        },
        {
          title: "Serwis i Wsparcie Techniczne",          description: "Profesjonalne wsparcie, konserwacja i diagnostyka systemów automatyki, zapewniające ciągłość pracy.",          imageSrc: "http://img.b2bpic.net/free-photo/remote-control-sound-settings-from-tablet_169016-23700.jpg",          imageAlt: "Serwis techniczny",          buttonIcon: Wrench,
        },
      ]}
      title="Kompleksowe Usługi Automatyki"
      description="Nasza oferta obejmuje szeroki zakres innowacyjnych rozwiązań, które zoptymalizują Twoje procesy przemysłowe."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "250+",          title: "Zrealizowanych Projektów",          items: [
            "Od małych usprawnień",            "Po kompleksowe linie",            "W różnych branżach"],
        },
        {
          id: "m2",          value: "15%",          title: "Wzrost Wydajności",          items: [
            "Średni wzrost po wdrożeniu",            "Poprawa cykli produkcyjnych",            "Optymalizacja procesów"],
        },
        {
          id: "m3",          value: "99%",          title: "Zadowolenia Klientów",          items: [
            "Wysokie oceny usług",            "Długoterminowa współpraca",            "Pozytywne referencje"],
        },
      ]}
      title="Nasze osiągnięcia w liczbach"
      description="Lata doświadczeń i udanych wdrożeń przekładają się na konkretne, mierzalne rezultaty dla naszych klientów."
      animationType="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Sterowniki PLC",          price: "Od 1200 PLN",          imageSrc: "http://img.b2bpic.net/free-photo/technology-texture-background_23-2148105560.jpg",          imageAlt: "Sterownik PLC"},
        {
          id: "p2",          name: "Panele HMI",          price: "Od 800 PLN",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-digital-monitors_23-2148910244.jpg",          imageAlt: "Panel HMI"},
        {
          id: "p3",          name: "Roboty Przemysłowe",          price: "Zapytaj o wycenę",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory-robot_1268-23338.jpg",          imageAlt: "Robot przemysłowy"},
        {
          id: "p4",          name: "Czujniki Inteligentne",          price: "Od 150 PLN",          imageSrc: "http://img.b2bpic.net/free-photo/blue-themed-circuit-board-with-capacitor_23-2148284284.jpg",          imageAlt: "Inteligentny czujnik"},
        {
          id: "p5",          name: "Systemy Wizyjne",          price: "Od 3000 PLN",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-making-eye-glasses_23-2148919990.jpg",          imageAlt: "System wizyjny"},
        {
          id: "p6",          name: "Napędy Serwo",          price: "Od 700 PLN",          imageSrc: "http://img.b2bpic.net/free-photo/wind-turbines-road-rural-landscape-sunset-sky_169016-68337.jpg",          imageAlt: "Napęd Serwo"},
      ]}
      title="Kluczowe Komponenty Systemów"
      description="Oferujemy sprawdzone komponenty, które stanowią podstawę niezawodnych systemów automatyki przemysłowej."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Marek Kowalski",          role: "Dyrektor Produkcji",          company: "Fabryka XYZ",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-businessman-glasses-showing-okay-hand-sign-sitting-with-laptop-cafe-working-remotely-recommends-coworking-space_1258-314260.jpg",          imageAlt: "Marek Kowalski"},
        {
          id: "2",          name: "Anna Nowak",          role: "Kierownik Operacyjny",          company: "Tech Solutions",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg",          imageAlt: "Anna Nowak"},
        {
          id: "3",          name: "Piotr Zieliński",          role: "Dyrektor Zakładu",          company: "Industrial Group",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-posing-with-folded-arms-having-many-flowers-colleague-holding-pot-with-pink-chrysanthemums-glass-roof_158595-7126.jpg",          imageAlt: "Piotr Zieliński"},
        {
          id: "4",          name: "Katarzyna Wójcik",          role: "Dyrektor R&D",          company: "InnoTech Labs",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-66972.jpg",          imageAlt: "Katarzyna Wójcik"},
        {
          id: "5",          name: "Michał Dąbrowski",          role: "Dyrektor Logistyki",          company: "Global Logistics",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-clipboard_23-2149214304.jpg",          imageAlt: "Michał Dąbrowski"},
        {
          id: "6",          name: "Ewa Kaczmarek",          role: "Inżynier Projektu",          company: "Future Automation",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-architect-with-thumb-up_1149-1128.jpg",          imageAlt: "Ewa Kaczmarek"},
      ]}
      title="Co mówią o nas klienci"
      description="Nasze sukcesy mierzymy zadowoleniem i pozytywnymi opiniami partnerów, z którymi współpracujemy."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "http://img.b2bpic.net/free-vector/business-card-template_23-2148023277.jpg",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3orm55",        "http://img.b2bpic.net/free-vector/digital-futuristic-design-concept-with-3d-yellow-hi-tech-construction-horizontal-metal-pillar_1284-48821.jpg",        "http://img.b2bpic.net/free-photo/close-up-construction-safety-goggles-work-tools_169016-17031.jpg",        "http://img.b2bpic.net/free-photo/innovation-ideas-imagine-processing-system-concept_53876-132192.jpg",        "http://img.b2bpic.net/free-photo/view-puzzle-pieces-blue-background_23-2149299057.jpg",        "http://img.b2bpic.net/free-vector/collection-labour-day-stickers-with-red-frames_23-2147617897.jpg"]}
      title="Zaufali nam najlepsi w branży"
      description="Jesteśmy dumni z partnerstw, które budujemy, dostarczając wartość i innowacje w każdym projekcie."
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "Jakie branże obsługujecie?",          content: "Specjalizujemy się w obsłudze szerokiego spektrum branż, w tym motoryzacyjnej, spożywczej, farmaceutycznej, logistycznej oraz produkcji maszyn."},
        {
          id: "faq2",          title: "Czy oferujecie rozwiązania \"pod klucz\"?",          content: "Tak, dostarczamy kompleksowe rozwiązania \"pod klucz\", od analizy potrzeb i projektu, przez wdrożenie, aż po serwis i wsparcie posprzedażowe."},
        {
          id: "faq3",          title: "Ile czasu zajmuje wdrożenie systemu automatyki?",          content: "Czas wdrożenia jest zależny od złożoności projektu i indywidualnych potrzeb klienta. Zawsze staramy się dostarczyć rozwiązania w możliwie najkrótszym czasie, zachowując najwyższą jakość."},
        {
          id: "faq4",          title: "Czy zapewniacie szkolenia dla pracowników?",          content: "Oczywiście. W ramach naszych usług oferujemy kompleksowe szkolenia dla operatorów i personelu technicznego, aby zapewnić pełne wykorzystanie potencjału wdrożonych systemów."},
        {
          id: "faq5",          title: "Jakie są korzyści z automatyzacji procesów produkcyjnych?",          content: "Automatyzacja prowadzi do znaczącego wzrostu wydajności, redukcji błędów, poprawy bezpieczeństwa pracy, optymalizacji kosztów oraz zwiększenia elastyczności produkcji."},
      ]}
      title="Często Zadawane Pytania"
      description="Znajdź odpowiedzi na najpopularniejsze pytania dotyczące naszych usług i automatyki przemysłowej."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Gotowy na automatyzację Twojej firmy? Skontaktuj się z Elgreen!"
      buttons={[
        {
          text: "Napisz do nas",          href: "mailto:kontakt@elgreen.pl"},
        {
          text: "Zadzwoń: +48 123 456 789",          href: "tel:+48123456789"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Usługi",          items: [
            {
              label: "Robotyka",              href: "#features"},
            {
              label: "Systemy IoT",              href: "#features"},
            {
              label: "Oprogramowanie",              href: "#features"},
            {
              label: "Serwis",              href: "#features"},
          ],
        },
        {
          title: "Firma",          items: [
            {
              label: "O nas",              href: "#about"},
            {
              label: "Referencje",              href: "#testimonials"},
            {
              label: "Partnerzy",              href: "#social-proof"},
            {
              label: "Kariera",              href: "#"},
          ],
        },
        {
          title: "Wsparcie",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Kontakt",              href: "#contact"},
            {
              label: "Polityka Prywatności",              href: "#"},
            {
              label: "Warunki Użytkowania",              href: "#"},
          ],
        },
      ]}
      logoText="Elgreen"
      copyrightText="© 2024 Elgreen. Wszelkie prawa zastrzeżone."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
