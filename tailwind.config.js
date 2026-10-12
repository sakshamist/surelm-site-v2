/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        "charcoal": "#0F1419",
        "slate-ink": "#1A2430",
        "ivory": "#F5F1EC",
        "navy": "#0F3D56",
        "teal": "#3FBFBF",
        "ochre": "#F2A65A",
        "mist": "#F2F5F7",
        "graphite": "#9FB3C8",
        "secondary": "#6B7685",
        "on-surface-variant": "#4C5666",
        "surface": "#FBF8F5",
        "background": "#FBF8F5",
        "surface-bright": "#FBF8F5",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F7F3EF",
        "surface-container": "#F2ECE6",
        "surface-container-high": "#EDE6DF",
        "surface-container-highest": "#E7E0D8",
        "on-surface": "#1A2430",
        "primary": "#0F3D56",
        "on-primary": "#FFFFFF",
        "primary-container": "#1A556D",
        "on-primary-container": "#D7E8F0",
        "accent": "#3FBFBF",
        "on-accent": "#0F1419",
        "cta": "#F2A65A",
        "on-cta": "#1A2430",
        "outline": "#C9D1D9",
        "outline-variant": "#D6DCE2"
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
