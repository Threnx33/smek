import { MainWrap } from "@/components/reusables/mainWrap";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TitleHeaderWrap } from "@/components/reusables/titleHeaderWrap";
import { useDropzone } from "react-dropzone";

interface CertificateItemProps {
  title: string;
  date: string;
  imageUrl: string;
}

const CertificateItem: React.FC<CertificateItemProps> = ({
  title,
  date,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl ">
      <div className="flex w-full justify-center rounded-t-xl bg-cWhiteGrey p-3">
        <img className="" src={imageUrl} alt="Design" />
      </div>
      <div className="w-full rounded-b-xl bg-white px-6 py-4 text-center">
        <div className="mb-2  font-semibold">{title}</div>
        <p className="text-sm text-cMediumGrey">{date}</p>
      </div>
    </div>
  );
};

const CertificateDropzone = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed bg-cWhiteGrey">
      <div className=" flex w-full justify-center rounded-t-xl ">
        <img className="mb-3" src="/addCircle.svg" alt="Design" />
      </div>
      <div className="w-9/12 text-center">
        <div className="mb-2 text-sm font-semibold">Create new design</div>
        <p className="text-sm text-cMediumGrey">
          Create a unique credential design using our design templates. Add your
          logo, change the font and include images.
        </p>
      </div>
    </div>
  );
};

const CertificateGrid: React.FC = () => {
  const certificates = [
    {
      title: "School Certificate",
      date: "10/19/2023",
      imageUrl: "/design1.png",
    },
    {
      title: "Employment Certificate",
      date: "10/26/2023",
      imageUrl: "/design2.png",
    },
  ];
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <CertificateDropzone />

      {certificates.map((certificate, index) => (
        <CertificateItem
          key={index}
          title={certificate.title}
          date={certificate.date}
          imageUrl={certificate.imageUrl}
        />
      ))}
    </div>
  );
};

export function ViewSelectDesign() {
  return (
    <>
      <div className="mb-2 select-none text-2xl font-semibold">
        Select a Design
      </div>
      <div className=" mb-5 w-11/12 select-none md:w-7/12">
        Create a new design of choose from existing options for your
        credentials. Alternatively, you can proceed without a design.
      </div>
      <CertificateGrid />
    </>
  );
}
