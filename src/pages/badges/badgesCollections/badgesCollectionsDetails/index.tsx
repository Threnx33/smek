import { Button } from "@/components/ui/button";
import { BadgesCollectionWrap } from "@/pages/badges/badgesCollections/badgesCollectionWrap";
import { BadgesCollectionsDetailsForm } from "./badgesCollectionsDetailsForm";

export function BadgesCollectionsDetails() {
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
