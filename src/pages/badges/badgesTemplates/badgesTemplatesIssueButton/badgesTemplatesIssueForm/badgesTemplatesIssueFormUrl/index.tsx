import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import IssueFormCardWrap from "@/components/reusables/issueFormCardWrap";
import { UseFormReturn } from "react-hook-form";
import { BadgeTemplatesIssueSchema } from "..";

type BadgesTemplatesIssueFormUrlProps = {
  form: UseFormReturn<BadgeTemplatesIssueSchema>;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export function BadgesTemplatesIssueFormUrl({
  form,
  setOpenedCard,
}: BadgesTemplatesIssueFormUrlProps) {
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
