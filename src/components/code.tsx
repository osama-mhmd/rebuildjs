import code from "@/utils/code";

async function Code({ text }: { text: string }) {
  const c = await code(text);

  return <div dangerouslySetInnerHTML={{ __html: c }}></div>;
}

export default Code;
