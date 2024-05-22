import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import IssueFormCardWrap from "@/components/reusables/issueFormCardWrap";
import { UseFormReturn } from "react-hook-form";
import { BadgeTemplatesIssueSchema } from "..";

type BadgesTemplatesIssueFormIdProps = {
  form: UseFormReturn<BadgeTemplatesIssueSchema>;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export function BadgesTemplatesIssueFormId({
  form,
  setOpenedCard,
}: BadgesTemplatesIssueFormIdProps) {
  return (
    <IssueFormCardWrap title="ID" setOpenedCard={setOpenedCard}>
      <CustomInput form={form} name="idTitle" label="Title" type="text" />
      <CustomTextarea form={form} name="idID" label="ID" characters={600} />
    </IssueFormCardWrap>
  );
}
