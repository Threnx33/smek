import { CustomInput } from "@/components/reusables/customInput";
import IssueFormCardWrap from "@/components/reusables/issueFormCardWrap";
import { UseFormReturn } from "react-hook-form";
import { BadgeTemplatesIssueSchema } from "..";
import { CustomTextarea } from "@/components/reusables/customTextarea";

type BadgesTemplatesIssueFormTextProps = {
  form: UseFormReturn<BadgeTemplatesIssueSchema>;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export function BadgesTemplatesIssueFormText({
  form,
  setOpenedCard,
}: BadgesTemplatesIssueFormTextProps) {
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
