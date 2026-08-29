/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        "secondary": "#5f5e60",
        "primary-container": "#0066cc",
        "on-surface-variant": "#414753",
        "on-secondary-fixed-variant": "#474649",
        "on-secondary": "#ffffff",
        "surface-tint": "#005cba",
        "on-primary-container": "#dfe8ff",
        "surface-container-high": "#e8e8ea",
        "background": "#f9f9fb",
        "inverse-on-surface": "#f0f0f2",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#e9e8ed",
        "surface-container-highest": "#e2e2e4",
        "inverse-surface": "#2f3132",
        "surface-variant": "#e2e2e4",
        "error": "#ba1a1a",
        "primary-fixed-dim": "#aac7ff",
        "surface-container-low": "#f3f3f5",
        "on-background": "#1a1c1d",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed": "#1b1b1d",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#c8c6c8",
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9fb",
        "primary": "#004e9f",
        "tertiary-fixed": "#e3e2e7",
        "surface": "#f9f9fb",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#00458e",
        "secondary-container": "#e2dfe1",
        "on-primary-fixed": "#001b3e",
        "on-surface": "#1a1c1d",
        "surface-container": "#eeeef0",
        "primary-fixed": "#d7e3ff",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#aac7ff",
        "surface-dim": "#d9dadc",
        "outline-variant": "#c1c6d5",
        "tertiary-container": "#68686d",
        "secondary-fixed": "#e4e2e4",
        "tertiary": "#4f5054",
        "on-tertiary-fixed-variant": "#46464b",
        "tertiary-fixed-dim": "#c7c6cb",
        "on-secondary-container": "#636264",
        "on-tertiary-fixed": "#1a1b1f",
        "outline": "#727784"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "section-gap": "160px",
        "gutter": "24px",
        "unit": "8px",
        "margin-mobile": "20px",
        "margin-desktop": "40px",
        "container-max": "1200px"
      },
      fontFamily: {
        "body-md": ["Inter"],
        "display-xl": ["Inter"],
        "body-lg": ["Inter"],
        "label-md": ["Inter"],
        "headline-lg": ["Inter"],
        "headline-lg-mobile": ["Inter"],
        "display-lg": ["Inter"]
      },
      fontSize: {
        "body-md": ["17px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "400" }],
        "display-xl": ["80px", { lineHeight: "84px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["21px", { lineHeight: "32px", letterSpacing: "0em", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "30px", letterSpacing: "0em", fontWeight: "600" }],
        "display-lg": ["56px", { lineHeight: "60px", letterSpacing: "-0.01em", fontWeight: "700" }]
      }
    }
  },
  plugins: []
}
