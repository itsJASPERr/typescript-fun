import { StyleSheet } from 'react-native';

// That's all we need for a "design system". We don't even need constants.
// Just find and replace what has to be changed. It's type-safe.
// For example, `16` or `padding: 16`. Why don't names? Because naming is hard.

export const theme = StyleSheet.create({
  rootScrollView: {
    flex: 1,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  container: {
    marginHorizontal: 'auto',
    maxWidth: 740,
    padding: 16,
  },
  pageHeader: {
    marginBottom: 48,
    marginTop: 32,
  },
  logo: {
    height: 45,
    width: 300,
  },
  heading1: {
    color: 'rgb(26, 32, 44)',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    marginBottom: 32,
  },
  heading2: {
    color: 'rgb(26, 32, 44)',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    marginBottom: 16,
  },
  paragraph: {
    color: 'rgb(26, 32, 44)',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});
