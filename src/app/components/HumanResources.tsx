/**
 * In case is is not clear this is just a wrapper for a horizontal rule lol
 * It was like 4am and I thought this was funny
 * 
 */

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
