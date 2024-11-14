import EmailsProvider from "./emails";
import MoliyaContext from "./moliya";
import AnalyticsProvider from "./analytics";

const provider = [
  AnalyticsProvider, 
  EmailsProvider, 
  MoliyaContext
];

export const ContextProvider = ({ children }) => {
  return provider.reduceRight(
    (account, Provider) => <Provider>{account}</Provider>,
    children
  );
};

export default ContextProvider;