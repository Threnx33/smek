import IssueFormCardWrap from "@/components/reusables/issueFormCardWrap";
import { UseFormReturn } from "react-hook-form";
import { BadgeTemplatesIssueSchema } from "..";
import { useDropzone } from "react-dropzone";

type BadgesTemplatesIssueFormUploadProps = {
  form: UseFormReturn<BadgeTemplatesIssueSchema>;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export function BadgesTemplatesIssueFormUpload({
  form,
  setOpenedCard,
}: BadgesTemplatesIssueFormUploadProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <IssueFormCardWrap title="Upload" setOpenedCard={setOpenedCard}>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="border border-dashed rounded-lg bg-cLightGreyBg flex justify-center items-center py-12 mb-2 cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-xs text-cMediumGrey">
          Drag files here or click to upload file
        </p>
      </div>

      {files.length > 0 && (
        <div>
          <div className="text-sm font-semibold">Files</div>
          <ul className="text-xs">{files}</ul>
        </div>
      )}
    </IssueFormCardWrap>
  );
}
