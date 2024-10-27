import check from "../assets/icons/sozlamalar/check.svg?react";
import filial from "../assets/icons/sozlamalar/filiallar.svg?react";
import sms from "../assets/icons/sozlamalar/xabarnoma.svg?react";
import sorov from "../assets/icons/sozlamalar/so'rovnoma.svg?react";
import status from "../assets/icons/sozlamalar/call.svg?react";

// Components
import { Generics } from "../view/Generics";

export const umumiy = [
  { id: 1, icon: check, element: Generics, path: "check", title: "Check" },
  {
    id: 2,
    icon: filial,
    element: Generics,
    path: "filiallar",
    title: "Filiallar",
  },
  {
    id: 3,
    icon: sms,
    element: Generics,
    path: "xabarnomalar",
    title: "Xabarnomalar",
  },
  {
    id: 4,
    icon: sorov,
    element: Generics,
    path: "so'rovnoma",
    title: "So'rovnoma",
  },
  { id: 4, icon: status, element: Generics, path: "status", title: "Status" },
];
