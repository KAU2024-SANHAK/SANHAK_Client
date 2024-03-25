import { Suspense } from 'react';
import Loading from './pages/Loading/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider, QueryErrorResetBoundary } from 'react-query';
import FallbackUI from './pages/FallbackUI/FallbackUI';
import * as S from './App.style';

function App() {
  const queryClient = new QueryClient();
  return (
    <S.Wrapper>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={() => reset()} FallbackComponent={FallbackUI}>
                <Suspense fallback={<Loading />}>
                  <RouterProvider router={router} />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </QueryClientProvider>
      </RecoilRoot>
    </S.Wrapper>
  );
}

export default App;
