import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import IssueFormCardWrap from "@/components/reusables/issueFormCardWrap";
import { UseFormReturn } from "react-hook-form";
import { CertificateTemplatesIssueSchema } from "..";

type CertificatesTemplatesIssueFormTextProps = {
  form: UseFormReturn<CertificateTemplatesIssueSchema>;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export function CertificatesTemplatesIssueFormText({
  form,
  setOpenedCard,
}: CertificatesTemplatesIssueFormTextProps) {
  return (
    <IssueFormCardWrap title="Text" setOpenedCard={setOpenedCard}>
      <CustomInput form={form} name="textTitle" label="Title" type="text" />
      <CustomTextarea
        form={form}
        name="textDescription"
        label="Description"
        characters={350}
      />
    </IssueFormCardWrap>
  );
}
