import { HR } from "flowbite-react";

interface hrProps {
  classString: string;
}

const defaultClasses = "bg-neutral-content bg-opacity-30 my-0";

const HumanResources: React.FC<hrProps> = ({ classString }) => {
  classString ||= defaultClasses;

  return (
    <>
      <HR className={classString} />
    </>
  );
}

export { HumanResources }
