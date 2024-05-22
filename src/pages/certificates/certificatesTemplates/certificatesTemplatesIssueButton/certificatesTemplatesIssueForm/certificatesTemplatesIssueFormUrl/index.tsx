import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import IssueFormCardWrap from "@/components/reusables/issueFormCardWrap";
import { UseFormReturn } from "react-hook-form";
import { CertificateTemplatesIssueSchema } from "..";

type CertificatesTemplatesIssueFormUrlProps = {
  form: UseFormReturn<CertificateTemplatesIssueSchema>;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export function CertificatesTemplatesIssueFormUrl({
  form,
  setOpenedCard,
}: CertificatesTemplatesIssueFormUrlProps) {
  return (
    <IssueFormCardWrap title="URL" setOpenedCard={setOpenedCard}>
      <CustomInput form={form} name="urlTitle" label="Title" type="text" />
      <CustomInput
        form={form}
        name="urlURL"
        label="URL"
        type="text"
        placeholder="http://"
      />
      <CustomTextarea
        form={form}
        name="urlDescription"
        label="Description"
        characters={350}
      />
    </IssueFormCardWrap>
  );
}
