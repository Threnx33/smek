import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import IssueFormCardWrap from "@/components/reusables/issueFormCardWrap";
import { UseFormReturn } from "react-hook-form";
import { CertificateTemplatesIssueSchema } from "..";

type CertificatesTemplatesIssueFormIdProps = {
  form: UseFormReturn<CertificateTemplatesIssueSchema>;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export function CertificatesTemplatesIssueFormId({
  form,
  setOpenedCard,
}: CertificatesTemplatesIssueFormIdProps) {
  return (
    <IssueFormCardWrap title="ID" setOpenedCard={setOpenedCard}>
      <CustomInput form={form} name="idTitle" label="Title" type="text" />
      <CustomTextarea form={form} name="idID" label="ID" characters={600} />
    </IssueFormCardWrap>
  );
}
