import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations.
  const navigation = useNavigation(); 

  // navigation.state has 'idle', 'loading', and 'submitting' 

  return (
    <>
      <MainNavigation />
      <main>
        {/*navigation.state === 'loading' && <p>Loading...</p>*/}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;