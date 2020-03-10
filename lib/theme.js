// example theme
import { deep } from "@theme-ui/presets";
export default {
  ...deep,
  styles: {
    ...deep.styles
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      color: "background",
      backgroundColor: "text",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)"
    }
  }
};
