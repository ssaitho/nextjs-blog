/**
 * Do not edit directly
 * Generated on Fri, 27 May 2022 07:17:33 GMT
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
  "theme": {
    "bg": DesignToken,
    "fg": DesignToken
  },
  "color": {
    "ecforce-blue": DesignToken,
    "red-900": DesignToken,
    "red-700": DesignToken,
    "red-500": DesignToken,
    "red-300": DesignToken,
    "blue-900": DesignToken,
    "blue-700": DesignToken,
    "blue-500": DesignToken,
    "blue-300": DesignToken
  }
}