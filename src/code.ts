import { codeToHtml } from "shiki";

async function code(code: string, lang = "typescript") {
  const html = await codeToHtml(code, {
    lang: lang,
    theme: "vitesse-dark",
  });
  return html;
}

export default code;
