/* empty css                                 */
import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, l as renderHead } from '../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const accept = Astro2.request.headers.get("accept-language") ?? "";
  const primary = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  const isSpanish = primary.startsWith("es");
  const target = isSpanish ? "/es/" : "/en/";
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta http-equiv="refresh"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>VM Software Solutions</title><link rel="icon" type="image/png" href="/assets/logo.svg"><script>\n      setTimeout(function() {\n        window.location.replace(target);\n      }, 1800);\n    <\/script>', '</head> <body data-astro-cid-j7pv25f6> <div class="redirect-center" data-astro-cid-j7pv25f6> <div class="loader" data-astro-cid-j7pv25f6></div> <div data-astro-cid-j7pv25f6>Redirigiendo a tu idioma preferido...</div> <div style="font-size:.9em;color:#8eeaf7;margin-top:.7em;" data-astro-cid-j7pv25f6>\nSi no sucede autom\xE1ticamente, haz <a', ' style="color:#bafffd;text-decoration:underline;" data-astro-cid-j7pv25f6>clic aqu\xED</a>.\n</div> </div> </body></html>'])), addAttribute("2; url=" + target, "content"), renderHead(), addAttribute(target, "href"));
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/pages/index.astro", void 0);

const $$file = "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
