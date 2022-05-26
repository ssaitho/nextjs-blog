/**
 * Do not edit directly
 * Generated on Thu, 26 May 2022 07:59:50 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "primary": DesignToken,
    "danger": DesignToken,
    "secondary": DesignToken,
    "hogehoge": DesignToken,
    "fugafuga": DesignToken,
    "hoge-fuga": DesignToken,
    "hoge_fuga": DesignToken,
    "sandFuga": DesignToken,
    "lime300": DesignToken,
    "red-200": DesignToken
  },
  "size": {
    "test2rem": DesignToken
  }
}