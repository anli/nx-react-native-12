import { FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView as NativeSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

export const SafeAreaView: FC<SafeAreaViewProps> = ({
  children,
  style,
  ...rest
}) => (
  <NativeSafeAreaView style={[styles.container, style]} {...rest}>
    {children}
  </NativeSafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
