/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "639px" },
      mobile: { max: "376px" },
    },
    extend: {
      colors: {
        "neutral-50": "#FAFAFA",
        "neutral-100": "#F5F5F6",
        "neutral-200": "#E4E4E8",
        "neutral-300": "#D3D2D8",
        "neutral-400": "#A19FAC",
        "neutral-500": "#706E7E",
        "neutral-600": "#504F5A",
        "neutral-700": "#3F3D46",
        "neutral-800": "#161619",
        "neutral-900": "#131126",
        "primary-50": "#f8f7fd",
        "primary-100": "#e2dff6",
        "primary-200": "#C4BEED",
        "primary-300": "#a79ee5",
        "primary-400": "#897ddc",
        "primary-500": "#6C5DD3",
        "primary-600": "#4B39C9",
        "primary-700": "#3D2DA7",
        "primary-800": "#302483",
        "primary-900": "#231A60",
        "secondary-50": "#fffaf1",
        "secondary-100": "#fff5e3",
        "secondary-200": "#FFEBC7",
        "secondary-300": "#ffe2ab",
        "secondary-400": "#ffd88f",
        "secondary-500": "#FFCE73",
        "secondary-600": "#FFBB3C",
        "secondary-700": "#ffa704",
        "secondary-800": "#cb8400",
        "secondary-900": "#946000",
        "tertiary-50": "#FAFDFC",
        "tertiary-100": "#ebf6f5",
        "tertiary-200": "#D7EDEB",
        "tertiary-300": "#c2e5e0",
        "tertiary-400": "#aedcd6",
        "tertiary-500": "#9AD3CC",
        "tertiary-600": "#74C2B9",
        "tertiary-700": "#4eb2a5",
        "tertiary-800": "#3d8c82",
        "tertiary-900": "#2c665f",
        "success-50": "#F0FDF4",
        "success-100": "#DCFCE7",
        "success-200": "#BBF7D0",
        "success-300": "#86EFAC",
        "success-400": "#4ADE80",
        "success-500": "#22C55E",
        "success-600": "#16A34A",
        "success-700": "#15803D",
        "success-800": "#166534",
        "success-900": "#14532D",
        "warning-50": "#FFFBEB",
        "warning-100": "#FEF3C7",
        "warning-200": "#FDE68A",
        "warning-300": "#FCD34D",
        "warning-400": "#FBBF24",
        "warning-500": "#F59E0B",
        "warning-600": "#D97706",
        "warning-700": "#B45309",
        "warning-800": "#92400E",
        "warning-900": "#78350F",
        "destructive-50": "#FEF2F2",
        "destructive-100": "#FEE2E2",
        "destructive-200": "#FECACA",
        "destructive-300": "#FCA5A5",
        "destructive-400": "#F87171",
        "destructive-500": "#EF4444",
        "destructive-600": "#DC2626",
        "destructive-700": "#B91C1C",
        "destructive-800": "#991B1B",
        "destructive-900": "#7F1D1D",
        "shades-50": "#ffffff",
        "shades-100": "#000000",
      },
      margin: {
        spacingXxSm: "4px",
        spacingXSm: "8px",
        spacingSm: "12px",
        spacingMd: "16px",
        spacingBig: "20px",
        spacingXBig: "24px",
        spacingXxBig: "28px",
        spacingXxxBig: "32px",
        spacingLg: "40px",
        spacingXLg: "48px",
        spacingXxLg: "64px",
        spacingXxxLg: "80px",
        spacingHuge: "96px",
        spacingXHuge: "128px",
        spacingXxHuge: "160px",
        spacingXxxHuge: "192px",
      },
      blur: {
        blurSmall: "4px",
        blurMedium: "8px",
        blurLarge: "12px",
        blurXlarge: "20px",
      },
      // boxShadow: {
      //   shadowXsmall: "0 1px 2px 0 rgba(16,24,40,0.05)",
      //   shadowSmall:
      //     "0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1);",
      //   shadowMedium:
      //     "0px 2px 4px -2px rgba(16, 24, 40, 0.1), 0px 4px 6px -1px rgba(16, 24, 40, 0.1)",
      //   shadowLarge:
      //     "0px 4px 6px -4px rgba(16, 24, 40, 0.1), 0px 10px 15px -3px rgba(16, 24, 40, 0.1)",
      //   shadowXlarge:
      //     "0px 8px 10px -6px rgba(16, 24, 40, 0.1), 0px 20px 25px -5px rgba(16, 24, 40, 0.1)",
      // },
    },
  },
  plugins: [],
};
