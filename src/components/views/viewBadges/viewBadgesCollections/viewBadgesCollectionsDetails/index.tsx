import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { BadgesCollectionWrap } from "@/components/views/viewBadges/viewBadgesCollections/badgesCollectionWrap";
import { Button } from "@/components/ui/button";
import { BadgesCollectionsDetailsForm } from "./badgesCollectionsDetailsForm";

export function ViewBadgesCollectionsDetails() {
  const template = useSelector((state: RootState) => state.page.template);

  return (
    <BadgesCollectionWrap>
      <div className="flex flex-col text-sm">
        <div className="ml-auto flex items-center space-x-2 mb-6">
          <Button variant="outline">Delete Collection</Button>
          <Button>Save</Button>
        </div>
        <BadgesCollectionsDetailsForm />
      </div>
    </BadgesCollectionWrap>
  );
}
