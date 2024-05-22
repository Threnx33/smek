import { Button } from "@/components/ui/button";
import { CertificatesCollectionWrap } from "@/pages/certificates/certificatesCollections/certificatesCollectionWrap";
import { CertificatesCollectionsDetailsForm } from "./certificatesCollectionsDetailsForm";

export function CertificatesCollectionsDetails() {
  return (
    <CertificatesCollectionWrap>
      <div className="flex flex-col text-sm">
        <div className="ml-auto flex items-center space-x-2 mb-6">
          <Button variant="outline">Delete Collection</Button>
          <Button>Save</Button>
        </div>
        <CertificatesCollectionsDetailsForm />
      </div>
    </CertificatesCollectionWrap>
  );
}
