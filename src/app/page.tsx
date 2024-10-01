import { Suspense } from 'react';
import UploadForm from "./_components/UploadForm";
import AnalysisDisplay from "./_components/AnalysisDisplay";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-4xl font-bold">AI Document Analyzer</h1>
      <div className="w-full max-w-2xl">
        <UploadForm />
        <Suspense fallback={<div>Loading analysis...</div>}>
          <AnalysisDisplay />
        </Suspense>
      </div>
    </main>
  );
}
