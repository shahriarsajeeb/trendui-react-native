const path = require("path");

// Component definitions with their metadata
const AVAILABLE_COMPONENTS = {
  button: {
    name: "Button",
    description: "A customizable button component",
    dependencies: [],
  },
  image: {
    name: "Image",
    description: "An Image component with by default animation loader!",
    dependencies: [],
  },
  text: {
    name: "Text",
    description: "A text component with various styles",
    dependencies: [],
  },
  textinput: {
    name: "TextInput",
    description: "Text input component",
    dependencies: [],
  },
  select: {
    name: "Select",
    description: "Select options component",
    dependencies: [],
  },
  accordion: {
    name: "Accordion",
    description: "Accordion component",
    dependencies: [],
  },
  tabs: {
    name: "Tabs",
    description: "Tabs component",
    dependencies: [],
  },
  avatar: {
    name: "Avatar",
    description: "Avatar component",
    dependencies: [],
  },
  badge: {
    name: "Badge",
    description: "Badge component",
    dependencies: [],
  },
  checkbox: {
    name: "Checkbox",
    description: "Checkbox component",
    dependencies: [],
  },
  card: {
    name: "Card",
    description: "Card component",
    dependencies: [],
  },
  // card: {
  //   name: "Card",
  //   description: "Container component with shadow and border radius",
  //   dependencies: [],
  //   directory: "layout",
  // },
  // avatar: {
  //   name: "Avatar",
  //   description: "Circular image component for user avatars",
  //   dependencies: [],
  //   directory: "data-display",
  // },
  // checkbox: {
  //   name: "Checkbox",
  //   description: "Selectable checkbox component",
  //   dependencies: [],
  //   directory: "forms",
  // },
  // switch: {
  //   name: "Switch",
  //   description: "Toggle switch component",
  //   dependencies: [],
  //   directory: "forms",
  // },
  // spinner: {
  //   name: "Spinner",
  //   description: "Loading spinner animation",
  //   dependencies: [],
  //   directory: "feedback",
  // },
};

// Default configuration
const DEFAULT_CONFIG = {
  typescript: true,
  componentPath: "src/components",
  styleType: "styled-components", // or 'stylesheet'
  theme: {
    colors: {
      primary: "#007AFF",
      secondary: "#5856D6",
      success: "#34C759",
      warning: "#FF9500",
      danger: "#FF3B30",
      dark: "#1C1C1E",
      light: "#FFFFFF",
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 16,
      full: 9999,
    },
    typography: {
      fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
      },
      fontWeights: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
};

// File structure templates
const TEMPLATES = {
  component: {
    typescript: "component.tsx.template",
    javascript: "component.jsx.template",
  },
  style: {
    styledComponents: "styled.ts.template",
    stylesheet: "styles.ts.template",
  },
  test: {
    typescript: "component.test.tsx.template",
    javascript: "component.test.jsx.template",
  },
  story: {
    typescript: "component.stories.tsx.template",
    javascript: "component.stories.jsx.template",
  },
};

// Project structure
const PROJECT_STRUCTURE = {
  src: {
    components: {
      buttons: {},
      typography: {},
      forms: {},
      layout: {},
      "data-display": {},
      feedback: {},
    },
    theme: {
      "theme.ts": "",
      "types.ts": "",
    },
    utils: {
      "styles.ts": "",
      "constants.ts": "",
    },
  },
};

// CLI Messages
const MESSAGES = {
  success: {
    init: "✔ TrendUI initialized successfully!",
    componentAdd: (name) => `✔ Added ${name} component successfully!`,
    allComponents: (count) => `✔ Added ${count} components successfully!`,
  },
  error: {
    notFound: (name) => `Component "${name}" not found.`,
    invalidProject: "Not a valid React Native project directory",
    missingConfig:
      "TrendUI configuration file not found. Run 'trendui init' first.",
    componentExists: (name) => `Component "${name}" already exists.`,
  },
  info: {
    availableComponents: "Available components:",
    installDependencies: "Installing dependencies...",
    creatingFiles: "Creating component files...",
  },
};

// File paths
const PATHS = {
  templates: path.join(__dirname, "../templates"),
  components: path.join(__dirname, "../templates/components"),
  config: "trendui.config.js",
};

// Dependencies for different features
const DEPENDENCIES = {
  core: [
    "@types/react-native",
    "styled-components",
    "@types/styled-components",
    "@types/styled-components-react-native",
  ],
  testing: ["@testing-library/react-native", "@testing-library/jest-native"],
  storybook: [
    "@storybook/react-native",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
  ],
};

module.exports = {
  AVAILABLE_COMPONENTS,
  DEFAULT_CONFIG,
  TEMPLATES,
  PROJECT_STRUCTURE,
  MESSAGES,
  PATHS,
  DEPENDENCIES,
};
