import { useEffect, useState } from "react";
import StatusModal from "./StatusModal";
import { Icon } from "./style";

export const Status = ({ value }) => {
  const [open, setOpen] = useState(false);

 // const onClickStatus = () => { };

 useEffect(() => {
  document.addEventListener("mousedown", () => {
    setOpen(false);
  });
 }, [])

  switch (value) {
    case "keldi":
      return (
        <div 
          onClick={() => setOpen(true)} 
          // style={{ position: "relative"}}
          >
          <StatusModal open={open} />
          <Icon.Keldi />
        </div>
      );

    case "sababli":
      return <Icon.Sababli />;
    case "sababsiz":
      return <Icon.Sababsiz />;
    case "birinchi":
      return <Icon.Birinchi />;
    default: value;
  }
};

export default Status;