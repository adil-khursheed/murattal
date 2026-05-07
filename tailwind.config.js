/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "noor-e-hidayat-regular": ["noorehidayat-Regular"],
        "noor-e-hira-regular": ["noorehira-Regular"],
        "noor-e-huda-regular": ["noorehuda-Regular"],
        "roboto-bold": ["Roboto-Bold", "sans-serif"],
        "roboto-extra-bold": ["Roboto-ExtraBold", "sans-serif"],
        "roboto-medium": ["Roboto-Medium", "sans-serif"],
        "roboto-regular": ["Roboto-Regular", "sans-serif"],
        "roboto-semibold": ["Roboto-SemiBold", "sans-serif"],
        "uthman-tn": ["UthmanTn"],
      },
    },
  },
  plugins: [],
};
