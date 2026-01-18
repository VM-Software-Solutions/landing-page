export type Lang = "es" | "en";

export const messages = {
  es: {
    nav: {
      home: { label: "Inicio", href: "#inicio" },
      services: { label: "Servicios", href: "#servicios" },
      team: { label: "Equipo", href: "#equipo" },
      slider: { label: "Compañías", href: "#companias" },
      contact: { label: "Contacto", href: "#contacto" },
    },
    hero: {
      title: "Desarrollamos software a medida",
      subtitle:
        "Webs, sistemas y automatizaciones con foco en performance, diseño y resultados.",
      ctaPrimary: "Ver servicios", // <-- Actualizado
      ctaSecondary: "Contactar",
    },
    sections: {
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
      slider: {
        title: "Compañías",
        subtitle: "Algunas de las compañías con las que trabajamos.",
        items: [
          {
            name: "Compañía 1",
            description: "",
            logo: "compania1.png",
          },
          {
            name: "Compañía 2",
            description: "",
            logo: "compania2.png",
          },
          {
            name: "Compañía 3",
            description: "",
            logo: "compania3.png",
          },
        ],
      },
      contact: {
        title: "Contacto",
        subtitle: "Cuéntanos lo qué necesitas y hagámoslo realidad juntos.",
        ctaWhatsApp: "WhatsApp",
        ctaEmail: "Email",
        whatsappHref: "https://wa.me/543535693858",
        emailHref: "mailto:software.vm.solutions@gmail.com",
      },
      team: {
        title: "Equipo",
        subtitle: "Conoce a nuestro equipo.",
        members: [
          {
            name: "Martín Crosetto",
            role: "Co-fundador y Desarrollador",
            photo: "martin.jpeg",
          },
          {
            name: "Valentino Lattanzi",
            role: "Co-fundador y Desarrollador",
            photo: "valentino.jpeg",
          }
        ]
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
      services: { label: "Services", href: "#services" },
      team: { label: "Team", href: "#team" },
      slider: { label: "Companies", href: "#companies" },
      contact: { label: "Contact", href: "#contact" },
    },
    hero: {
      title: "We build custom software",
      subtitle:
        "Websites, systems and automations focused on performance, design and results.",
      ctaPrimary: "See services", 
      ctaSecondary: "Contact",
    },
    sections: {
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
      slider: {
        title: "Companies",
        subtitle: "Some of the companies we have worked with.",
        items: [
          {
            name: "Company 1",
            description: "",
            logo: "company1.png",
          },
          {
            name: "Company 2",
            description: "",
            logo: "company2.png",
          },
          {
            name: "Company 3",
            description: "",
            logo: "company3.png",
          },
        ],
      },
      contact: {
        title: "Contact",
        subtitle: "Tell us what you need and let’s make it happen together.",
        ctaWhatsApp: "WhatsApp",
        ctaEmail: "Email",
        whatsappHref: "https://wa.me/543535693858",
        emailHref: "mailto:software.vm.solutions@gmail.com",
      },
      team: {
        title: "Team",
        subtitle: "Meet our team.",
        members: [
          {
            name: "Martín Crosetto",
            role: "Co-founder & Developer",
            photo: "martin.jpeg",
          },
          {
            name: "Valentino Lattanzi",
            role: "Co-founder & Developer",
            photo: "valentino.jpeg",
          }
        ]
      },
    },
    footer: {
      tagline: "Custom software: websites, systems and automation.",
      rights: "All rights reserved.",
    },
  }
} as const;

export function getMessages(lang: Lang) {
  return messages[lang] ?? messages.es;
}