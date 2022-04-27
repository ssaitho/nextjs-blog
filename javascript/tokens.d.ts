/**
 * Do not edit directly
 * Generated on Wed, 27 Apr 2022 08:46:28 GMT
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
    "fugafuga": DesignToken
  },
  "size": {
    "test12": DesignToken
  }
}