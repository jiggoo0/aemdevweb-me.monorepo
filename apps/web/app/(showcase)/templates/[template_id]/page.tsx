/** @format */
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { template_id: string } }): Promise<Metadata> {
  return {
    title: `เทมเพลต ${params.template_id} | AEMDEVWEB`,
  };
}

export default function TemplateViewerPage({ params }: { params: { template_id: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Viewing Template: {params.template_id}</h1>
      {/* Specific template content will be rendered here */}
    </div>
  );
}
