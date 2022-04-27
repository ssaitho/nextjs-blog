/**
 * Do not edit directly
 * Generated on Wed, 27 Apr 2022 05:44:25 GMT
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
    "secondary": DesignToken
  }
}