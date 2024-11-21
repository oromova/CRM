import EmailsProvider from "./emails";
import MoliyaContext from "./moliya";
import AnalyticsProvider from "./analytics";
import MediaProvider from "./media";
import StudentsProvider from './students'

const provider = [
  AnalyticsProvider, 
  EmailsProvider, 
  MoliyaContext,
  MediaProvider,
  StudentsProvider,
];

export const ContextProvider = ({ children }) => {
  return provider.reduceRight(
    (account, Provider) => <Provider>{account}</Provider>,
    children
  );
};

export default ContextProvider;