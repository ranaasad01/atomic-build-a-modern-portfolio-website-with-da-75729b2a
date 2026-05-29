import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `Project: ${slug}`,
  };
}
