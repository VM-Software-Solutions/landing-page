import { e as createComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot } from './astro/server_CALqXRaA.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Background = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="bgfx" aria-hidden="true" data-astro-cid-y3soregm> <canvas class="bgfx__canvas" data-astro-cid-y3soregm></canvas> <div class="bgfx__grid" data-astro-cid-y3soregm></div> <div class="bgfx__glow" data-astro-cid-y3soregm></div> <div class="bgfx__section-dim" data-astro-cid-y3soregm></div> <div class="bgfx__vignette" data-astro-cid-y3soregm></div> </div> <script>
  const root = document.currentScript?.previousElementSibling; // .bgfx
  const canvas = root?.querySelector('.bgfx__canvas');
  const glow = root?.querySelector('.bgfx__glow');

  if (!root || !canvas || !glow) {
    console.warn('[Background] No se pudo inicializar');
  } else {
    const ctx = canvas.getContext('2d', { alpha: true });

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    // Heur\xEDstica anti "zoom-out" / pantallas enormes:
    // 1) si el dpr es muy bajo suele indicar zoom-out (ej: 0.8, 0.67, 0.5)
    // 2) si el \xE1rea efectiva es gigante, evitamos dibujar part\xEDculas
    function shouldAnimateBackground() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;

      // Ajustables:
      const MIN_DPR = 0.5;               // por debajo, asumimos zoom-out fuerte
      const MAX_EFFECTIVE_PIXELS = 3_500_000; // ~3.5MP efectivos (ajustable)

      const effectivePixels = w * h * Math.min(2, Math.max(0.5, dpr)) ** 2;

      if (reduceMotion) return false;
      if (dpr < MIN_DPR) return false;
      if (effectivePixels > MAX_EFFECTIVE_PIXELS) return false;

      return true;
    }

    let animationEnabled = shouldAnimateBackground();

    // Si no animamos, ocultamos el canvas (opcional) para ahorrar a\xFAn m\xE1s
    if (!animationEnabled) {
      canvas.style.display = 'none';
      root.classList.add('bgfx--static');
    }

    const state = {
      dpr: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
      w: 0, h: 0,
      mx: 0.5, my: 0.5,
      tx: 0.5, ty: 0.5,
      t: 0,
      particles: []
    };

    function resize() {
      // Si estamos en modo est\xE1tico, igual actualizamos el dim del scroll, pero no canvas
      if (!animationEnabled) return;

      const rect = root.getBoundingClientRect();
      state.w = Math.max(1, Math.floor(rect.width));
      state.h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(state.w * state.dpr);
      canvas.height = Math.floor(state.h * state.dpr);
      canvas.style.width = state.w + 'px';
      canvas.style.height = state.h + 'px';
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

      const count = Math.floor((state.w * state.h) / 22000);
      state.particles = Array.from({ length: Math.max(45, Math.min(180, count)) }, () => ({
        x: Math.random() * state.w,
        y: Math.random() * state.h,
        r: 0.6 + Math.random() * 1.6,
        s: 0.15 + Math.random() * 0.65,
        o: 0.18 + Math.random() * 0.35
      }));
    }

    function setMouseFromEvent(e) {
      const rect = root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      state.tx = Math.max(0, Math.min(1, x));
      state.ty = Math.max(0, Math.min(1, y));
    }

    // Dim al salir del hero (esto s\xED corre siempre)
  function getHeroEl() {
    return (
        document.querySelector('section[data-hero]') ||
        document.querySelector('section#inicio, section#home')
      );
  }
  function updateSectionDim() {
    const hero = getHeroEl();
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const heroHeight = Math.max(1, rect.height);

    const progress = 1 - Math.min(1, Math.max(0, rect.bottom / heroHeight));
    const eased = Math.min(1, Math.max(0, (progress - 0.15) / 0.85));

    root.style.setProperty('--section-dim', eased.toFixed(3));
  } 

  window.addEventListener('scroll', updateSectionDim, { passive: true });
  window.addEventListener('resize', updateSectionDim, { passive: true });
  
  updateSectionDim();
    function tick() {
      if (!animationEnabled) return;

      state.t += 1 / 60;

      state.mx += (state.tx - state.mx) * 0.06;
      state.my += (state.ty - state.my) * 0.06;

      glow.style.setProperty('--mx', (state.mx * 100).toFixed(2) + '%');
      glow.style.setProperty('--my', (state.my * 100).toFixed(2) + '%');

      ctx.clearRect(0, 0, state.w, state.h);

      const cx = state.mx * state.w;
      const cy = state.my * state.h;

      for (const p of state.particles) {
        p.y -= p.s;
        if (p.y < -10) {
          p.y = state.h + 10;
          p.x = Math.random() * state.w;
        }

        const dx = (p.x - cx);
        const dy = (p.y - cy);
        const dist = Math.sqrt(dx * dx + dy * dy);

        const near = Math.max(0, 1 - dist / 280);
        const alpha = p.o + near * 0.30;

        ctx.beginPath();
        ctx.fillStyle = \`rgba(120, 210, 255, \${alpha.toFixed(3)})\`;
        ctx.arc(
          p.x + (state.mx - 0.5) * 12,
          p.y + (state.my - 0.5) * 8,
          p.r + near * 0.8,
          0,
          Math.PI * 2
        );
        ctx.fill();

        if (near > 0.55) {
          ctx.beginPath();
          ctx.strokeStyle = \`rgba(170, 110, 255, \${(near * 0.18).toFixed(3)})\`;
          ctx.lineWidth = 1;
          ctx.arc(p.x, p.y, (p.r + 8) * near, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      requestAnimationFrame(tick);
    }

    const onMove = (e) => setMouseFromEvent(e);
    const onTouch = (e) => {
      if (!e.touches || !e.touches[0]) return;
      setMouseFromEvent(e.touches[0]);
    };

    // Re-evaluar en resize (por si el usuario cambia zoom / tama\xF1o)
    function onResize() {
      const nextEnabled = shouldAnimateBackground();

      if (nextEnabled !== animationEnabled) {
        animationEnabled = nextEnabled;

        if (!animationEnabled) {
          canvas.style.display = 'none';
          root.classList.add('bgfx--static');
        } else {
          canvas.style.display = '';
          root.classList.remove('bgfx--static');
          state.dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
          resize();
          requestAnimationFrame(tick);
        }
      }

      resize();
      updateSectionDim();
    }

    window.addEventListener('scroll', updateSectionDim, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('mouseleave', () => { state.tx = 0.5; state.ty = 0.35; }, { passive: true });

    // init
    updateSectionDim();
    if (animationEnabled) {
      resize();
      state.tx = 0.5; state.ty = 0.35;
      state.mx = state.tx; state.my = state.ty;
      requestAnimationFrame(tick);
    }
  }
<\/script> `], ["", `<div class="bgfx" aria-hidden="true" data-astro-cid-y3soregm> <canvas class="bgfx__canvas" data-astro-cid-y3soregm></canvas> <div class="bgfx__grid" data-astro-cid-y3soregm></div> <div class="bgfx__glow" data-astro-cid-y3soregm></div> <div class="bgfx__section-dim" data-astro-cid-y3soregm></div> <div class="bgfx__vignette" data-astro-cid-y3soregm></div> </div> <script>
  const root = document.currentScript?.previousElementSibling; // .bgfx
  const canvas = root?.querySelector('.bgfx__canvas');
  const glow = root?.querySelector('.bgfx__glow');

  if (!root || !canvas || !glow) {
    console.warn('[Background] No se pudo inicializar');
  } else {
    const ctx = canvas.getContext('2d', { alpha: true });

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    // Heur\xEDstica anti "zoom-out" / pantallas enormes:
    // 1) si el dpr es muy bajo suele indicar zoom-out (ej: 0.8, 0.67, 0.5)
    // 2) si el \xE1rea efectiva es gigante, evitamos dibujar part\xEDculas
    function shouldAnimateBackground() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;

      // Ajustables:
      const MIN_DPR = 0.5;               // por debajo, asumimos zoom-out fuerte
      const MAX_EFFECTIVE_PIXELS = 3_500_000; // ~3.5MP efectivos (ajustable)

      const effectivePixels = w * h * Math.min(2, Math.max(0.5, dpr)) ** 2;

      if (reduceMotion) return false;
      if (dpr < MIN_DPR) return false;
      if (effectivePixels > MAX_EFFECTIVE_PIXELS) return false;

      return true;
    }

    let animationEnabled = shouldAnimateBackground();

    // Si no animamos, ocultamos el canvas (opcional) para ahorrar a\xFAn m\xE1s
    if (!animationEnabled) {
      canvas.style.display = 'none';
      root.classList.add('bgfx--static');
    }

    const state = {
      dpr: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
      w: 0, h: 0,
      mx: 0.5, my: 0.5,
      tx: 0.5, ty: 0.5,
      t: 0,
      particles: []
    };

    function resize() {
      // Si estamos en modo est\xE1tico, igual actualizamos el dim del scroll, pero no canvas
      if (!animationEnabled) return;

      const rect = root.getBoundingClientRect();
      state.w = Math.max(1, Math.floor(rect.width));
      state.h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(state.w * state.dpr);
      canvas.height = Math.floor(state.h * state.dpr);
      canvas.style.width = state.w + 'px';
      canvas.style.height = state.h + 'px';
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

      const count = Math.floor((state.w * state.h) / 22000);
      state.particles = Array.from({ length: Math.max(45, Math.min(180, count)) }, () => ({
        x: Math.random() * state.w,
        y: Math.random() * state.h,
        r: 0.6 + Math.random() * 1.6,
        s: 0.15 + Math.random() * 0.65,
        o: 0.18 + Math.random() * 0.35
      }));
    }

    function setMouseFromEvent(e) {
      const rect = root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      state.tx = Math.max(0, Math.min(1, x));
      state.ty = Math.max(0, Math.min(1, y));
    }

    // Dim al salir del hero (esto s\xED corre siempre)
  function getHeroEl() {
    return (
        document.querySelector('section[data-hero]') ||
        document.querySelector('section#inicio, section#home')
      );
  }
  function updateSectionDim() {
    const hero = getHeroEl();
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const heroHeight = Math.max(1, rect.height);

    const progress = 1 - Math.min(1, Math.max(0, rect.bottom / heroHeight));
    const eased = Math.min(1, Math.max(0, (progress - 0.15) / 0.85));

    root.style.setProperty('--section-dim', eased.toFixed(3));
  } 

  window.addEventListener('scroll', updateSectionDim, { passive: true });
  window.addEventListener('resize', updateSectionDim, { passive: true });
  
  updateSectionDim();
    function tick() {
      if (!animationEnabled) return;

      state.t += 1 / 60;

      state.mx += (state.tx - state.mx) * 0.06;
      state.my += (state.ty - state.my) * 0.06;

      glow.style.setProperty('--mx', (state.mx * 100).toFixed(2) + '%');
      glow.style.setProperty('--my', (state.my * 100).toFixed(2) + '%');

      ctx.clearRect(0, 0, state.w, state.h);

      const cx = state.mx * state.w;
      const cy = state.my * state.h;

      for (const p of state.particles) {
        p.y -= p.s;
        if (p.y < -10) {
          p.y = state.h + 10;
          p.x = Math.random() * state.w;
        }

        const dx = (p.x - cx);
        const dy = (p.y - cy);
        const dist = Math.sqrt(dx * dx + dy * dy);

        const near = Math.max(0, 1 - dist / 280);
        const alpha = p.o + near * 0.30;

        ctx.beginPath();
        ctx.fillStyle = \\\`rgba(120, 210, 255, \\\${alpha.toFixed(3)})\\\`;
        ctx.arc(
          p.x + (state.mx - 0.5) * 12,
          p.y + (state.my - 0.5) * 8,
          p.r + near * 0.8,
          0,
          Math.PI * 2
        );
        ctx.fill();

        if (near > 0.55) {
          ctx.beginPath();
          ctx.strokeStyle = \\\`rgba(170, 110, 255, \\\${(near * 0.18).toFixed(3)})\\\`;
          ctx.lineWidth = 1;
          ctx.arc(p.x, p.y, (p.r + 8) * near, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      requestAnimationFrame(tick);
    }

    const onMove = (e) => setMouseFromEvent(e);
    const onTouch = (e) => {
      if (!e.touches || !e.touches[0]) return;
      setMouseFromEvent(e.touches[0]);
    };

    // Re-evaluar en resize (por si el usuario cambia zoom / tama\xF1o)
    function onResize() {
      const nextEnabled = shouldAnimateBackground();

      if (nextEnabled !== animationEnabled) {
        animationEnabled = nextEnabled;

        if (!animationEnabled) {
          canvas.style.display = 'none';
          root.classList.add('bgfx--static');
        } else {
          canvas.style.display = '';
          root.classList.remove('bgfx--static');
          state.dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
          resize();
          requestAnimationFrame(tick);
        }
      }

      resize();
      updateSectionDim();
    }

    window.addEventListener('scroll', updateSectionDim, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('mouseleave', () => { state.tx = 0.5; state.ty = 0.35; }, { passive: true });

    // init
    updateSectionDim();
    if (animationEnabled) {
      resize();
      state.tx = 0.5; state.ty = 0.35;
      state.mx = state.tx; state.my = state.ty;
      requestAnimationFrame(tick);
    }
  }
<\/script> `])), maybeRenderHead());
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/components/Background.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.qfzKpqZk.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const messages = {
  es: {
    nav: {
      home: { label: "Inicio", href: "#inicio" },
      services: { label: "Servicios", href: "#servicios" },
      team: { label: "Equipo", href: "#equipo" },
      slider: { label: "Compañías", href: "#companias" },
      contact: { label: "Contacto", href: "#contacto" }
    },
    hero: {
      title: "Desarrollamos software a medida",
      subtitle: "Webs, sistemas y automatizaciones con foco en performance, diseño y resultados.",
      ctaPrimary: "Ver servicios",
      // <-- Actualizado
      ctaSecondary: "Contactar"
    },
    sections: {
      services: {
        title: "Servicios",
        subtitle: "Explora las soluciones que ofrecemos.",
        items: [
          {
            title: "Desarrollo Web",
            description: "Creación de sitios web personalizados y optimizados para SEO y rendimiento."
          },
          {
            title: "Sistemas a Medida",
            description: "Desarrollo de sistemas adaptados a las necesidades específicas de tu negocio."
          },
          {
            title: "Automatización de Procesos",
            description: "Implementación de soluciones para automatizar tareas repetitivas y mejorar la eficiencia."
          }
        ]
      },
      slider: {
        title: "Compañías",
        subtitle: "Algunas de las compañías con las que trabajamos.",
        items: [
          {
            name: "Compañía 1",
            description: "",
            logo: "compania1.png"
          },
          {
            name: "Compañía 2",
            description: "",
            logo: "compania2.png"
          },
          {
            name: "Compañía 3",
            description: "",
            logo: "compania3.png"
          }
        ]
      },
      contact: {
        title: "Contacto",
        subtitle: "Cuéntanos lo qué necesitas y hagámoslo realidad juntos.",
        ctaWhatsApp: "WhatsApp",
        ctaEmail: "Email",
        whatsappHref: "https://wa.me/543535693858",
        emailHref: "mailto:software.vm.solutions@gmail.com"
      },
      team: {
        title: "Equipo",
        subtitle: "Conoce a nuestro equipo.",
        members: [
          {
            name: "Martín Crosetto",
            role: "Co-fundador y Desarrollador",
            photo: "martin.jpeg"
          },
          {
            name: "Valentino Lattanzi",
            role: "Co-fundador y Desarrollador",
            photo: "valentino.jpeg"
          }
        ]
      }
    },
    footer: {
      tagline: "Software a medida: webs, sistemas y automatizaciones.",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      home: { label: "Home", href: "#home" },
      services: { label: "Services", href: "#services" },
      team: { label: "Team", href: "#team" },
      slider: { label: "Companies", href: "#companies" },
      contact: { label: "Contact", href: "#contact" }
    },
    hero: {
      title: "We build custom software",
      subtitle: "Websites, systems and automations focused on performance, design and results.",
      ctaPrimary: "See services",
      ctaSecondary: "Contact"
    },
    sections: {
      services: {
        title: "Services",
        subtitle: "Explore the solutions we offer.",
        items: [
          {
            title: "Web Development",
            description: "Creation of custom websites optimized for SEO and performance."
          },
          {
            title: "Custom Systems",
            description: "Development of systems tailored to the specific needs of your business."
          },
          {
            title: "Process Automation",
            description: "Implementation of solutions to automate repetitive tasks and improve efficiency."
          }
        ]
      },
      slider: {
        title: "Companies",
        subtitle: "Some of the companies we have worked with.",
        items: [
          {
            name: "Company 1",
            description: "",
            logo: "company1.png"
          },
          {
            name: "Company 2",
            description: "",
            logo: "company2.png"
          },
          {
            name: "Company 3",
            description: "",
            logo: "company3.png"
          }
        ]
      },
      contact: {
        title: "Contact",
        subtitle: "Tell us what you need and let’s make it happen together.",
        ctaWhatsApp: "WhatsApp",
        ctaEmail: "Email",
        whatsappHref: "https://wa.me/543535693858",
        emailHref: "mailto:software.vm.solutions@gmail.com"
      },
      team: {
        title: "Team",
        subtitle: "Meet our team.",
        members: [
          {
            name: "Martín Crosetto",
            role: "Co-founder & Developer",
            photo: "martin.jpeg"
          },
          {
            name: "Valentino Lattanzi",
            role: "Co-founder & Developer",
            photo: "valentino.jpeg"
          }
        ]
      }
    },
    footer: {
      tagline: "Custom software: websites, systems and automation.",
      rights: "All rights reserved."
    }
  }
};
function getMessages(lang) {
  return messages[lang] ?? messages.es;
}

const $$Astro$4 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "es" } = Astro2.props;
  const t = getMessages(lang);
  const otherLang = lang === "es" ? "en" : "es";
  const langHref = otherLang === "es" ? "/es/" : "/en/";
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-16 text-white text-lg font-semibold bg-transparent backdrop-blur-md border-b border-white/10 px-4" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <img${addAttribute(logo.src, "src")} alt="Logo de VM Software" class="inline-block h-8 w-auto mr-3" height="64" data-astro-cid-3ef6ksr2> </div> <div class="ml-auto flex items-center gap-4" data-astro-cid-3ef6ksr2> <ul class="hidden md:flex items-center gap-6" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a${addAttribute(t.nav.home.href, "href")} class="hover:text-white/80" data-astro-cid-3ef6ksr2>${t.nav.home.label}</a></li> <li data-astro-cid-3ef6ksr2><a${addAttribute(t.nav.services.href, "href")} class="hover:text-white/80" data-astro-cid-3ef6ksr2>${t.nav.services.label}</a></li> <li data-astro-cid-3ef6ksr2><a${addAttribute(t.nav.team.href, "href")} class="hover:text-white/80" data-astro-cid-3ef6ksr2>${t.nav.team.label}</a></li> <!-- <li><a href={t.nav.slider.href} class="hover:text-white/80">{t.nav.slider.label}</a></li> --> <li data-astro-cid-3ef6ksr2><a${addAttribute(t.nav.contact.href, "href")} class="hover:text-white/80" data-astro-cid-3ef6ksr2>${t.nav.contact.label}</a></li> </ul> <!-- Switch de idioma (opcional) --> <a${addAttribute(langHref, "href")} class="hidden md:inline-flex items-center rounded border border-white/15 px-3 py-1 text-sm hover:bg-white/10" data-astro-cid-3ef6ksr2> ${otherLang.toUpperCase()} </a> <details class="md:hidden relative mobile-menu" data-astro-cid-3ef6ksr2> <summary class="p-2 rounded hover:bg-white/10 cursor-pointer" aria-label="Open menu" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </summary> <div class="absolute right-0 mt-2 w-48 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded shadow-lg py-2 z-20" data-astro-cid-3ef6ksr2> <a${addAttribute(t.nav.home.href, "href")} class="block px-4 py-2 hover:bg-white/10" data-astro-cid-3ef6ksr2>${t.nav.home.label}</a> <a${addAttribute(t.nav.services.href, "href")} class="block px-4 py-2 hover:bg-white/10" data-astro-cid-3ef6ksr2>${t.nav.services.label}</a> <a${addAttribute(t.nav.team.href, "href")} class="block px-4 py-2 hover:bg-white/10" data-astro-cid-3ef6ksr2>${t.nav.team.label}</a> <!-- <a href={t.nav.slider.href} class="block px-4 py-2 hover:bg-white/10">{t.nav.slider.label}</a> --> <a${addAttribute(t.nav.contact.href, "href")} class="block px-4 py-2 hover:bg-white/10" data-astro-cid-3ef6ksr2>${t.nav.contact.label}</a> <a${addAttribute(langHref, "href")} class="block px-4 py-2 hover:bg-white/10 text-white/90" data-astro-cid-3ef6ksr2> ${otherLang.toUpperCase()} </a> </div> </details> </div> </nav> </header> `;
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/components/Header.astro", void 0);

const martinImg = new Proxy({"src":"/_astro/martin.B9WTu0Rc.jpeg","width":1200,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/assets/martin.jpeg";
							}
							
							return target[name];
						}
					});

const valentinoImg = new Proxy({"src":"/_astro/valentino.B3NcNMgb.jpeg","width":1200,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/assets/valentino.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Landing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Landing;
  const { lang = "es" } = Astro2.props;
  const t = getMessages(lang);
  const idFromHref = (href) => href.startsWith("#") ? href.slice(1) : href;
  const photoMap = {
    "martin.jpeg": martinImg,
    "valentino.jpeg": valentinoImg
  };
  return renderTemplate`${maybeRenderHead()}<main class="relative z-10 pt-16"> <!-- Servicios --> <section${addAttribute(idFromHref(t.nav.services.href), "id")} class="mx-auto max-w-6xl px-6 py-20"> <h2 class="text-white text-3xl md:text-4xl font-semibold">${t.sections.services.title}</h2> <p class="mt-3 text-white/75 max-w-2xl">${t.sections.services.subtitle}</p> <div class="mt-10 grid gap-6 md:grid-cols-3"> ${t.sections.services.items.map((item) => renderTemplate`<div class="rounded-xl border border-white/10 bg-white/5 p-6 text-white"> <h3 class="font-semibold text-lg">${item.title}</h3> <p class="mt-2 text-white/70">${item.description}</p> </div>`)} </div> </section> <!-- Equipo --> <section${addAttribute(idFromHref(t.nav.team.href), "id")} class="mx-auto max-w-6xl px-6 py-20"> <h2 class="text-white text-3xl md:text-4xl font-semibold">${t.sections.team.title}</h2> <p class="mt-3 text-white/75 max-w-2xl">${t.sections.team.subtitle}</p> <div class="mt-10 grid gap-6 md:grid-cols-2"> ${t.sections.team.members.map((member) => renderTemplate`<div class="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-white"> <img${addAttribute(photoMap[member.photo]?.src, "src")}${addAttribute(member.name, "alt")} class="w-28 h-28 rounded-full object-cover border-2 border-white/20 shadow-lg mb-4"> <h3 class="font-semibold text-lg">${member.name}</h3> <p class="mt-1 text-emerald-300 font-medium">${member.role}</p> </div>`)} </div> </section> <!-- Compañías/Slider --> <!-- <section id={idFromHref(t.nav.slider.href)} class="mx-auto max-w-6xl px-6 py-20">
    <h2 class="text-white text-3xl md:text-4xl font-semibold">{t.sections.slider.title}</h2>
    <p class="mt-3 text-white/75 max-w-2xl">{t.sections.slider.subtitle}</p>
    <div class="mt-10">
      <div class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {t.sections.slider.items.map((item) => (
          <article class="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl border border-white/10 bg-white/5 p-6 text-white overflow-hidden hover:scale-105 transition-transform duration-300">
            <div class="w-full overflow-hidden rounded-md bg-white/5 aspect-square">
              {
                !item.logo ? (
                  <img width="96" height="96" src={companyPlaceholder.src} alt="company"/>
                ) : (
                  <img src={item.logo} alt={item.name} class="w-full h-full object-cover" onerror={\`this.src='\${companyPlaceholder.src}'\`} />
                )
              }
            </div>
            <h3 class="font-semibold text-lg mt-4">{item.name}</h3>
            <p class="mt-2 text-white/70">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section> --> <!-- Contacto --> <section${addAttribute(idFromHref(t.nav.contact.href), "id")} class="mx-auto max-w-6xl px-6 py-20"> <h2 class="text-white text-3xl md:text-4xl font-semibold">${t.sections.contact.title}</h2> <p class="mt-3 text-white/75 max-w-2xl">${t.sections.contact.subtitle}</p> <div class="mt-8 flex flex-wrap gap-3"> <a class="rounded-md bg-emerald-400/90 px-5 py-3 font-medium text-black hover:bg-emerald-400"${addAttribute(t.sections.contact.whatsappHref, "href")} target="_blank" rel="noreferrer"> ${t.sections.contact.ctaWhatsApp} </a> <a class="rounded-md border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10"${addAttribute(t.sections.contact.emailHref, "href")}> ${t.sections.contact.ctaEmail} </a> <a class="rounded-md border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10" href="https://mail.google.com/mail/?view=cm&to=software.vm.solutions@gmail.com" target="_blank" rel="noopener" title="Enviar mail usando Gmail web">
Gmail Web
</a> <button class="rounded-md border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10" type="button" onclick="navigator.clipboard.writeText('software.vm.solutions@gmail.com');alert('Email copiado!')" style="background: none;">
Copiar Email
</button> </div> <p class="text-xs text-white/50 mt-3"> ${lang === "es" ? "En computadoras, el bot\xF3n \u201CEmail\u201D abrir\xE1 tu app de correo predeterminada. Si prefieres usar Gmail Web, haz clic en \u201CGmail Web\u201D." : 'On computers, the "Email" button will open your default email app. If you prefer to use Gmail Web, click on "Gmail Web".'} </p> </section> </main>`;
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/components/Landing.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/assets/logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>VM Software Solutions</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { lang = "es" } = Astro2.props;
  const t = getMessages(lang);
  const ids = lang === "es" ? { home: "inicio"} : { home: "home"};
  return renderTemplate`${maybeRenderHead()}<section data-hero${addAttribute(ids.home, "id")} class="relative z-10 min-h-[90vh] flex items-center"> <div class="mx-auto max-w-6xl px-6 pt-20 pb-16"> <div class="max-w-4xl"> <h1 class="text-white font-semibold tracking-tight text-4xl md:text-6xl leading-tight"> ${t.hero.title} </h1> <p class="mt-5 text-white/80 text-lg md:text-xl leading-relaxed"> ${t.hero.subtitle} </p> <div class="mt-8 flex flex-wrap gap-3"> <a${addAttribute(t.nav.services.href, "href")} class="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90"> ${t.hero.ctaPrimary} </a> <a${addAttribute(t.nav.contact.href, "href")} class="inline-flex items-center rounded-md border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10"> ${t.hero.ctaSecondary} </a> </div> </div> </div> </section>`;
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "es" } = Astro2.props;
  const t = getMessages(lang);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md"> <div class="mx-auto max-w-6xl px-6 py-10"> <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"> <div class="max-w-sm"> <div class="flex items-center gap-3"> <img${addAttribute(logo.src, "src")} alt="VM Software" class="h-8 w-auto"> <span class="text-white font-semibold">VM Software</span> </div> <p class="mt-3 text-white/70 text-sm leading-relaxed"> ${t.footer.tagline} </p> </div> <div class="grid grid-cols-2 gap-8 sm:grid-cols-3"> <div> <h3 class="text-white/90 text-sm font-semibold">Links</h3> <ul class="mt-3 space-y-2 text-sm"> <li><a class="text-white/70 hover:text-white"${addAttribute(t.nav.home.href, "href")}>${t.nav.home.label}</a></li> <li><a class="text-white/70 hover:text-white"${addAttribute(t.nav.contact.href, "href")}>${t.nav.contact.label}</a></li> </ul> </div> <div> <h3 class="text-white/90 text-sm font-semibold">${t.nav.contact.label}</h3> <ul class="mt-3 space-y-2 text-sm"> <li> <a class="text-white/70 hover:text-white"${addAttribute(t.sections.contact.emailHref, "href")}> ${lang === "es" ? "Email" : "Email"} </a> </li> <li> <a class="text-white/70 hover:text-white"${addAttribute(t.sections.contact.whatsappHref, "href")} target="_blank" rel="noreferrer">
WhatsApp
</a> </li> </ul> </div> <div> <h3 class="text-white/90 text-sm font-semibold">${lang === "es" ? "Idioma" : "Language"}</h3> <p class="mt-3 text-sm text-white/70"> ${lang === "es" ? "Espa\xF1ol" : "English"} </p> </div> </div> </div> <div class="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between"> <p>© ${year} VM Software. ${t.footer.rights}</p> <p class="text-white/50">${lang === "es" ? "Hecho con Astro + Tailwind" : "Built with Astro + Tailwind"}</p> </div> </div> </footer>`;
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Background as a, $$Header as b, $$Hero as c, $$Landing as d, $$Footer as e };
