import PageHeader from "../../components/page-header/PageHeader";
import { useLocation } from "react-router-dom";
import MainContainer from "../../components/containers/main-container/MainContainer";
const LoadingModemJobPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <PageHeader currentUrl={pathname} />
      <MainContainer>selam</MainContainer>
    </>
  );
};

export default LoadingModemJobPage;
