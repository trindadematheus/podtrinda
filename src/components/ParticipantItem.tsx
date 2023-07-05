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
      <div className="card card-compact bg-base-200 text-primary-content">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-base-content">{fileName}</h2>
          </div>

          <CodeBlock
            text={fileContent}
            language={fileLanguage}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>
      </div>
    </>
  );
}

export default ParticipantItem;
