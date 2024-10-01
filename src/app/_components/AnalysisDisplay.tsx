import { db } from '~/server/db';
import { documents } from '~/server/db/schema';
import { desc } from 'drizzle-orm';

export default async function AnalysisDisplay() {
  const latestDocument = await db.query.documents.findFirst({
    orderBy: [desc(documents.createdAt)],
  });

  if (!latestDocument || !latestDocument.aiAnalysis) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Latest Analysis</h2>
      <p className="text-gray-600">{latestDocument.aiAnalysis}</p>
    </div>
  );
}
