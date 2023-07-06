import useSWR from "swr";

import ParticipantItem from "@/components/ParticipantItem";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/codes", fetcher);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="container max-w-4xl">
          <div className="flex mt-12 mb-12 items-center gap-4">
            <h1 className="text-4xl font-bold">PODTRINDA</h1>
            <a
              className="btn btn-primary"
              href="https://www.youtube.com/watch?v=qvq5gH5Rwvc&list=PLqlhBWSkJaoL6MUjkDZt9hwNCFg05a6qq"
            >
              VER PLAYLIST
            </a>
          </div>

          <div className="grid grid-flow-row gap-8 grid-cols-2">
            {data.map((code: any) => (
              <ParticipantItem
                key={code.fileName}
                fileName={code.fileName}
                fileContent={code.fileContent}
                fileLanguage={code.fileLanguage}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
