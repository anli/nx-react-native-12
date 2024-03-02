import {
  QueryClientProvider as NativeQueryClientProvider,
  QueryClientProviderProps as NativeQueryClientProviderProps,
  QueryClient,
} from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

const queryClient = new QueryClient();

type QueryClientProviderProps = PropsWithChildren<
  Omit<NativeQueryClientProviderProps, 'client'>
>;

export const QueryClientProvider: FC<
  PropsWithChildren<QueryClientProviderProps>
> = ({ children, ...rest }) => {
  return (
    <NativeQueryClientProvider client={queryClient} {...rest}>
      {children}
    </NativeQueryClientProvider>
  );
};
