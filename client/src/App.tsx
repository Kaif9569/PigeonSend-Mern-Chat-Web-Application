import { ReactNode, Suspense } from "react";

interface AppProps {
  children: ReactNode;
}

const App = ({ children }: AppProps) => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      {children}
    </Suspense>
  );
};

export default App;
