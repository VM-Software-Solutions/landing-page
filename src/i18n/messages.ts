/**
 * Interfaz de los mensajes de navegación.
 */
type NavItem = {
  label: string;
  href: string;
};

/**
 * Interfaz de los mensajes de idioma.
 */
type Language = {
  nav: {
    home: NavItem;
    services: NavItem;
    team: NavItem;
    slider: NavItem;
    contact: NavItem;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sections: {
    services: {
      title: string;
      subtitle: string;
      items: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
    slider: {
      title: string;
      subtitle: string;
      items: {
        name: string;
        description: string;
        logo: string;
      }[];
    };
    contact: {
      title: string;
      subtitle: string;
      ctaWhatsApp: string;
      ctaEmail: string;
      whatsappHref: string;
      emailHref: string;
      formHref: string;
      labelEmail: string;
      phEmail: string;
      labelMessage: string;
      phMessage: string;
      ctaSubmit: string;
    };
    team: {
      title: string;
      subtitle: string;
      members: {
        name: string;
        role: string;
        photo: string;
      }[];
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

type Message = {
  es: Language;
  en: Language;
};

export type Lang = "es" | "en";

export const messages: Message = {
  es: {
    nav: {
      home: { label: "Inicio", href: "#inicio" },
      services: { label: "Servicios", href: "#servicios" },
      team: { label: "Equipo", href: "#equipo" },
      slider: { label: "Compañías", href: "#companias" },
      contact: { label: "Contacto", href: "#contacto" },
    },
    hero: {
      title: "CONSTRUIMOS SISTEMAS DE INFORMACIÓN A MEDIDA",
      subtitle:
        "Enfocados en performance, diseño y resultados para que tu empresa dé el siguiente paso.",
      ctaPrimary: "Ver servicios",
      ctaSecondary: "Contactar",
    },
    sections: {
      services: {
        title: "Servicios",
        subtitle: "Somos profesionales en tecnología de la información. Proporcionamos soluciones para diferentes situaciones y necesidades.",
        items: [
          {
            icon: "web", // Desarrollo Web
            title: "Sistemas Web",
            description:
              "Creamos sitios web personalizados, optimizados para SEO, rendimiento y experiencia de usuario.",
          },
          {
            icon: "smartphone", // Desarrollo Mobile
            title: "Sistemas Mobile",
            description:
              "Aplicaciones móviles a medida para Android y iOS, adaptadas a las necesidades de tu negocio.",
          },
          {
            icon: "computer", // Desarrollo Desktop
            title: "Sistemas Desktop",
            description:
              "Sistemas de escritorio robustos y eficientes para plataformas Windows, Mac y Linux.",
          },
          {
            icon: "settings", // Automatización de Procesos
            title: "Automatización de Procesos",
            description:
              "Soluciones para automatizar tareas repetitivas y mejorar la eficiencia operativa.",
          },
          {
            icon: "build", // Sistemas a Medida
            title: "Sistemas a Medida",
            description:
              "Desarrollo de sistemas personalizados que se adaptan a los procesos y objetivos de tu empresa.",
          },
          {
            icon: "search", // Relevamiento y Consultoría
            title: "Relevamiento y Consultoría",
            description:
              "Analizamos tus procesos y necesidades para definir la mejor solución tecnológica para tu negocio.",
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
        subtitle: "Cuéntanos lo que necesitas y hagámoslo realidad juntos.",
        ctaWhatsApp: "WhatsApp",
        ctaEmail: "Email",
        whatsappHref: "https://wa.me/543535693858",
        emailHref: "mailto:software.vm.solutions@gmail.com",
        ctaSubmit: "Enviar",
        formHref: "https://forms.gle/example",
        labelEmail: "Tu correo electrónico",
        phEmail: "Tu correo electrónico",
        labelMessage: "Tu mensaje",
        phMessage: "Tu mensaje",
      },
      team: {
        title: "Equipo",
        subtitle: "Conoce a nuestro equipo.",
        members: [
          {
            name: "Martín Crosetto",
            role: "Co-fundador e Ingeniero en Sistemas",
            photo: "martin.jpeg",
          },
          {
            name: "Valentino Lattanzi",
            role: "Co-fundador e Ingeniero en Sistemas",
            photo: "valentino.jpeg",
          },
        ],
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
      title: "WE BUILD CUSTOM INFORMATION SYSTEMS",
      subtitle:
        "Focused on performance, design and results so your company can take the next step.",
      ctaPrimary: "See services",
      ctaSecondary: "Contact",
    },
    sections: {
      services: {
        title: "Services",
        subtitle: "We are information technology professionals. We provide solutions for different situations and needs.",
        items: [
          {
            icon: "web", // Web Development
            title: "Web Systems",
            description:
              "We create custom websites, optimized for SEO, performance, and user experience.",
          },
          {
            icon: "smartphone", // Mobile Development
            title: "Mobile Systems",
            description:
              "Custom mobile applications for Android and iOS, tailored to your business needs.",
          },
          {
            icon: "computer", // Desktop Development
            title: "Desktop Systems",
            description:
              "Robust and efficient desktop systems for Windows, Mac, and Linux platforms.",
          },
          {
            icon: "settings", // Process Automation
            title: "Process Automation",
            description:
              "Solutions to automate repetitive tasks and improve operational efficiency.",
          },
          {
            icon: "build", // Custom Systems
            title: "Custom Systems",
            description:
              "Development of custom systems that adapt to your company's processes and goals.",
          },
          {
            icon: "search", // Survey and Consulting
            title: "Survey and Consulting",
            description:
              "We analyze your processes and needs to define the best technological solution for your business.",
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
        ctaSubmit: "Send",
        formHref: "https://forms.gle/example",
        labelEmail: "Your email",
        phEmail: "Your email",
        labelMessage: "Your message",
        phMessage: "Your message",
      },
      team: {
        title: "Team",
        subtitle: "Meet our team.",
        members: [
          {
            name: "Martín Crosetto",
            role: "Co-founder & Systems Engineer",
            photo: "martin.jpeg",
          },
          {
            name: "Valentino Lattanzi",
            role: "Co-founder & Systems Engineer",
            photo: "valentino.jpeg",
          },
        ],
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
