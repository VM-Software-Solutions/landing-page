import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/astro-designed-error-pages_jcnlLkb-.mjs';
import 'piccolore';
import 'es-module-lexer';
import './chunks/astro/server_CwyWYPgU.mjs';
import 'clsx';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_Dk44n_uh.mjs';

const internalFetchHeaders = {};

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (target.hasOwnProperty(objKey) || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // redefine prototype methods as the object's own property, not the prototype's
        bind: action.bind,
        valueOf: () => action.valueOf,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function _getActionPath(toString) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  for (const [key, value] of Object.entries(internalFetchHeaders)) {
    headers.set(key, value);
  }
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    _getActionPath(() => getActionQueryString(path)),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  const bodyText = await rawResult.text();
  if (rawResult.ok) {
    return deserializeActionResult({
      type: "data",
      body: bodyText,
      status: 200,
      contentType: "application/json+devalue"
    });
  }
  return deserializeActionResult({
    type: "error",
    body: bodyText,
    status: rawResult.status,
    contentType: "application/json"
  });
}
toActionProxy();

class EmailService {
  resend;
  constructor() {
    this.resend = new Resend("re_7aQdp3km_CaTSAwKUa25phkEDwSbtmxnX");
  }
  async sendContactEmail(emailFrom, message) {
    const { data, error } = await this.resend.emails.send({
      from: "onboarding@resend.dev",
      to: "software.vm.solutions@gmail.com",
      subject: "Contact Form Submission",
      html: `
      <h1>New Contact Form Submission</h1>
      <p>From: ${emailFrom}</p>
      <p>Message:</p>
      <p>${message}</p>
    `
    });
    if (error) {
      console.error("Error sending email:", error);
      return { data: null, error, success: false };
    }
    return { data, error: null, success: true };
  }
}

const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email({ message: "El email no es válido." }),
      message: z.string().nonempty({ message: "El mensaje no puede estar vacío." })
    }),
    handler: async (input) => {
      const emailService = new EmailService();
      const result = await emailService.sendContactEmail(
        input.email,
        input.message
      );
      if (!result.success) {
        return {
          error: "Error al enviar el email. Por favor, inténtalo de nuevo más tarde."
        };
      }
      return { message: "¡Email enviado con éxito!" };
    }
  })
};

export { server };
