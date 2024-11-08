import Check from "../assets/icons/sozlamalar/check.svg?react";
import filial from "../assets/icons/sozlamalar/filiallar.svg?react";
import sms from "../assets/icons/sozlamalar/xabarnoma.svg?react";
import sorov from "../assets/icons/sozlamalar/so'rovnoma.svg?react";
import status from "../assets/icons/sozlamalar/call.svg?react";

// Components
// Umumiy
import CheckView from "../view/Sozlamalar/Check";
import FiliallarView from "../view/Sozlamalar/Filiallar";
import XabarnomaView from "../view/Sozlamalar/Xabarnoma";
import SorovnomaView from "../view/Sozlamalar/Sorovnoma";
import CallConfigView from "../view/Sozlamalar/CallConfig";

// Manager
import DarajalarView from "../view/Sozlamalar/Darajalar";
import TolovlarView from "../view/Sozlamalar/Tolovlar";

export const umumiy = [
  { id: 1, icon: Check, element: CheckView, path: "check", title: "Check" },
  {
    id: 2,
    icon: filial,
    element: FiliallarView,
    path: "filiallar",
    title: "Filiallar",
  },
  {
    id: 3,
    icon: sms,
    element: XabarnomaView,
    path: "xabarnomalar",
    title: "Xabarnomalar",
  },
  {
    id: 4,
    icon: sorov,
    element: SorovnomaView,
    path: "so'rovnoma",
    title: "So'rovnoma",
  },
  { id: 4, icon: status, element: CallConfigView, path: "status", title: "Status" },
];

export const manager = [
  {
    id: 2,
    icon: Check,
    element: TolovlarView,
    path: "tolovlar",
    title: "To'lovlar",
  },
  {
    id: 3,
    icon: filial,
    element: DarajalarView,
    path: "darajalar",
    title: "Darajalar",
  },
];