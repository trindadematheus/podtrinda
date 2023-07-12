import useSWR from "swr";
import { Masonry } from "react-plock";

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
        <div className="container py-12 max-w-4xl">
          <div className="flex mb-12 items-center gap-4">
            <h1 className="text-4xl font-bold">PODTRINDA</h1>
            <a
              className="btn btn-primary rounded-none"
              href="https://youtube.com/playlist?list=PLqlhBWSkJaoL6MUjkDZt9hwNCFg05a6qq"
            >
              VER PLAYLIST
            </a>
          </div>

          <Masonry
            items={data}
            config={{
              columns: [1, 2],
              gap: [8, 14],
              media: [640, 1024],
            }}
            render={(code: any) => (
              <ParticipantItem
                key={code.fileName}
                fileName={code.fileName}
                fileContent={code.fileContent}
                fileLanguage={code.fileLanguage}
              />
            )}
          />
        </div>
      </div>
    </>
  );
}
