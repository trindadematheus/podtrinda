import Link from "next/link";
import { CodeBlock, dracula } from "react-code-blocks";

type ParticipantItemProps = {
  fileName: string;
  fileContent: string;
  fileLanguage: string;
};

function ParticipantItem({
  fileContent,
  fileName,
  fileLanguage,
}: ParticipantItemProps) {
  return (
    <>
      <div
        id={fileName}
        className="card rounded-none card-compact self-start bg-base-200/50 text-primary-content"
      >
        <div className="card-body">
          <div className="flex justify-between items-center">
            <Link href={`#${fileName}`}>
              <h2 className="card-title text-base-content">{fileName}</h2>
            </Link>
          </div>

          <CodeBlock
            text={fileContent}
            language={fileLanguage}
            showLineNumbers={true}
            codeContainerStyle={{
              maxHeight: 600,
            }}
            // @ts-ignore
            theme={dracula}
          />
        </div>
      </div>
    </>
  );
}

export default ParticipantItem;
