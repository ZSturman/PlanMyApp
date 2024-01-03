import React from "react";
import { StyledPDFPreview, StyledFullPage, StyledCoverPage } from "../styles";
import { CoverPage, ProjectTitle, Logo } from "../components";
import ComponentsType from "./types/ComponentsType";
import ContentType from "./types/ContentType";

// Define style and component mappings with proper TypeScript types
type StyleMapping = { [styleName: string]: React.ElementType };
const styleMapping: StyleMapping = {
  StyledPDFPreview,
  StyledFullPage,
  StyledCoverPage,
};

type ComponentMapping = { [componentName: string]: React.ComponentType<any> };
const componentMapping: ComponentMapping = {
  CoverPage,
  ProjectTitle,
  Logo,
};

// Define interfaces for your data types
interface DataType {
  theme?: string;
  stylesDir?: string;
  assetsDir?: string;
  componentsDir?: string;
  contents?: ContentType[];
  components?: ComponentsType[];
}

const handleComponents = (
    components: ComponentsType[],
    StyleComponent: React.ElementType,
    parentTheme?: string // Adding an optional parent theme parameter
  ): React.ReactNode[] => {
    console.log("Handling components:", components);
    return components.map((component, index) => {
      console.log(
        `Rendering component #${index + 1} for ${component}:`,
        component.componentName
      );
      const mappedComponent = componentMapping[component.componentName] || null;
      // Select the child theme if provided, else fallback to parent theme or default
      const style = component.theme
        ? styleMapping[component.theme]
        : parentTheme
        ? styleMapping[parentTheme]
        : StyleComponent;
  
      if (!mappedComponent) {
        console.error(
          `Component not found: ${component.componentName}. Please ensure it's correctly defined and imported.`
        );
        return null;
      }
  
      if (!style) {
        console.error(
          `Style not found: ${component.theme}. Falling back to default style.`
        );
      }
  
      // Create the component with React.createElement
      const Component = React.createElement(mappedComponent, {
        ...component,
        key: `${component.componentName}-${index}`,
      });
  
      if (Component) {
        console.log(
          `Successfully rendered component: ${component.componentName}`
        );
        // If the component has nested components, recursively process them
        let children = null;
        if (component.components) {
          children = handleComponents(component.components, style, component.theme || parentTheme);
        }
  
        // Return the component wrapped in its style, with children if applicable
        return React.createElement(
          style, // This now correctly refers to either the child's own theme or inherits from the parent
          { key: `${component.componentName}-${index}` },
          children ? [Component, ...children] : Component
        );
      } else {
        console.error(
          `Failed to create element for component: ${component.componentName}`
        );
      }
      return null;
    });
  };
  
// Main component function using TypeScript and React
const Main: React.FC<{ data: DataType | ComponentsType }> = ({ data }) => {
    console.log("Main component data received:", data);
    const styleName = data.theme || "StyledPDFPreview"; // Ensures a default theme is used if none is provided
    const StyleComponent = styleMapping[styleName] || StyledPDFPreview; // Retrieves the appropriate style
    console.log("Using theme style:", styleName);
  
    // Call handleComponents with the components and the style corresponding to the theme
    // No parent theme is passed initially as this is the top-level component
    const componentsRendered = data.components
      ? handleComponents(data.components, StyleComponent)
      : null;
  
    return <>{componentsRendered}</>;
  };
  
  export default Main;

  