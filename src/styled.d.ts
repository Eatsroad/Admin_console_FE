import "styled-components";

interface deviceSizes {
  mobile: string;
  tablet: string;
  desktop: string;
};
interface colors {
  logoColor: string;
  footerBackgroundColor: string;
}
interface fontSize {

}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colors,
    deviceSizes: deviceSizes,
    fontSize: fontSize,
    maxWidth: string,
  }
}