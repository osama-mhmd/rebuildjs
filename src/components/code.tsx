import code from "@/utils/code";

async function Code({ text, lang = "ts" }: { text: string; lang?: string }) {
  const c = await code(text, lang);

  return <div dangerouslySetInnerHTML={{ __html: c }}></div>;
}

export default Code;
