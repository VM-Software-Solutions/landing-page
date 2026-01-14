export type Lang = "es" | "en";

export const messages = {
  es: {
    nav: {
      home: { label: "Inicio", href: "#inicio" },
      features: { label: "Características", href: "#features" },
      services: { label: "Servicios", href: "#services" },
      contact: { label: "Contacto", href: "#contacto" },
      testimonials: { label: "Testimonios", href: "#testimonios" },
    },
    hero: {
      title: "Desarrollamos software a medida",
      subtitle:
        "Webs, sistemas y automatizaciones con foco en performance, diseño y resultados.",
      ctaPrimary: "Ver características",
      ctaSecondary: "Contactar",
    },
    sections: {
      features: {
        title: "Características",
        subtitle:
          "Soluciones pensadas para crecer: rápidas, escalables y fáciles de mantener.",
        items: [
          {
            title: "Webs rápidas",
            description:
              "Landing pages y sitios con SEO, performance y diseño moderno.",
          },
          {
            title: "Sistemas a medida",
            description:
              "Paneles, usuarios/roles, integraciones y flujos de negocio.",
          },
          {
            title: "Automatización",
            description:
              "APIs, procesos, scraping y tareas repetitivas automatizadas.",
          },
        ],
      },
      services: {
        title: "Servicios",
        subtitle: "Explora las soluciones que ofrecemos.",
        items: [
          {
            title: "Desarrollo Web",
            description:
              "Creación de sitios web personalizados y optimizados para SEO y rendimiento.",
          },
          {
            title: "Sistemas a Medida",
            description:
              "Desarrollo de sistemas adaptados a las necesidades específicas de tu negocio.",
          },
          {
            title: "Automatización de Procesos",
            description:
              "Implementación de soluciones para automatizar tareas repetitivas y mejorar la eficiencia.",
          },
        ],
      },
      testimonials: {
        title: "Testimonios",
        subtitle: "Algunos comentarios de clientes y proyectos.",
        items: [
          {
            quote: "“Excelente laburo, entregas rápidas y comunicación clara.”",
            author: "Cliente",
          },
          {
            quote: "“El sitio quedó muy rápido y mejoró el SEO.”",
            author: "Cliente",
          },
        ],
      },
      contact: {
        title: "Contacto",
        subtitle: "Cuéntanos lo qué necesitas y hagámoslo realidad juntos.",
        ctaWhatsApp: "WhatsApp",
        ctaEmail: "Email",
        // poné tus datos reales:
        whatsappHref: "https://wa.me/543535693858",
        emailHref: "mailto:martincrosetto312@gmail.com",
      },
    },
    footer: {
      tagline: "Software a medida: webs, sistemas y automatizaciones.",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      home: { label: "Home", href: "#home" },
      features: { label: "Features", href: "#features" },
      services: { label: "Services", href: "#services" },
      contact: { label: "Contact", href: "#contact" },
      testimonials: { label: "Testimonials", href: "#testimonials" },
    },
    hero: {
      title: "We build custom software",
      subtitle:
        "Websites, systems and automations focused on performance, design and results.",
      ctaPrimary: "See features",
      ctaSecondary: "Contact",
    },
    sections: {
      features: {
        title: "Features",
        subtitle: "Built to scale: fast, reliable and easy to maintain.",
        items: [
          {
            title: "Fast websites",
            description:
              "Landing pages and sites with SEO, performance and modern UI.",
          },
          {
            title: "Custom systems",
            description:
              "Dashboards, auth/roles, integrations and business workflows.",
          },
          {
            title: "Automation",
            description:
              "APIs, process automation, scraping and repetitive tasks.",
          },
        ],
      },
      services: {
        title: "Services",
        subtitle: "Explore the solutions we offer.",
        items: [
          {
            title: "Web Development",
            description:
              "Creation of custom websites optimized for SEO and performance.",
          },
          {
            title: "Custom Systems",
            description:
              "Development of systems tailored to the specific needs of your business.",
          },
          {
            title: "Process Automation",
            description:
              "Implementation of solutions to automate repetitive tasks and improve efficiency.",
          },
        ],
      },
      testimonials: {
        title: "Testimonials",
        subtitle: "A few notes from clients and projects.",
        items: [
          {
            quote: "“Great work, fast delivery and clear communication.”",
            author: "Client",
          },
          {
            quote: "“The website is extremely fast and SEO improved.”",
            author: "Client",
          },
        ],
      },
      contact: {
        title: "Contact",
        subtitle: "Tell us what you need and let’s make it happen together.",
        ctaWhatsApp: "WhatsApp",
        ctaEmail: "Email",
        whatsappHref: "https://wa.me/543535693858",
        emailHref: "mailto:martincrosetto312@gmail.com",
      },
    },
    footer: {
      tagline: "Custom software: websites, systems and automation.",
      rights: "All rights reserved.",
    },
  },
} as const;

export function getMessages(lang: Lang) {
  return messages[lang] ?? messages.es;
}
