import EmailsProvider from "./emails";
import MoliyaContext from "./moliya";
import AnalyticsProvider from "./analytics";
import MediaProvider from "./media";

const provider = [
  AnalyticsProvider, 
  EmailsProvider, 
  MoliyaContext,
  MediaProvider,
];

export const ContextProvider = ({ children }) => {
  return provider.reduceRight(
    (account, Provider) => <Provider>{account}</Provider>,
    children
  );
};

export default ContextProvider;