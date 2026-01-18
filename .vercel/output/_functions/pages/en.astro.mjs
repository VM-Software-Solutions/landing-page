/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Background, b as $$Header, c as $$Hero, d as $$Landing, e as $$Footer } from '../chunks/Footer_1NzcWx73.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Background", $$Background, {})} ${maybeRenderHead()}<div class="relative z-10"> ${renderComponent($$result2, "Header", $$Header, { "lang": "en" })} ${renderComponent($$result2, "Hero", $$Hero, { "lang": "en" })} ${renderComponent($$result2, "Landing", $$Landing, { "lang": "en" })} ${renderComponent($$result2, "Footer", $$Footer, { "lang": "en" })} </div> ` })}`;
}, "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/pages/en/index.astro", void 0);

const $$file = "/home/martin-jesus-crosetto/Documentos/workspace/landing-page/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
