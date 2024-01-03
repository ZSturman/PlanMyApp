// Example file: logComponents.js
const jsonData = {
  theme: "PDFPreview",
  stylesDir: "/styles",
  assetsDir: "/assets",
  componentsDir: "/components",
  components: [
    {
      componentName: "CoverPage",
      componentStyle: "StyledFullPage",
      components: [
        {
          componentName: "ProjectTitle",
          componentStyle: "",
          contents: [
            {
              contentType: "text",
              contentData: "Project Title",
              contentClass: "example-class",
              contentId: "project-id",
            },
            {
              contentType: "text",
              contentData: "Project Subtitle",
              contentClass: "example-class",
              contentId: "project-id",
            },
            {
              contentType: "list",
              contentData: "Authors",
              contentClass: "example-class",
              contentId: "project-id",
              contents: [
                {
                  contentType: "text",
                  contentData: "Author 1",
                  contentClass: "example-class",
                  contentId: "project-id",
                },
                {
                  contentType: "text",
                  contentData: "Author 2",
                  contentClass: "example-class",
                  contentId: "project-id",
                },
              ]
            },
          ],
        },
        {
          componentName: "Logo",
          componentStyle: "",
          contents: [
            {
              contentType: "image",
              contentData: "logo.png",
              contentClass: "logo",
              contentId: "logo",
            },
          ],
        }
      ],
    },
  ],
};

import { StyledFullPage } from "../styles/FullPage.styled";
import { StyledCoverPage } from "../styles/CoverPage.styled";
import { CoverPage, ProjectTitle } from "../components";
import  ComponentsType  from "./types/ComponentsType"


type StyleMapping = { [styleName: string]: React.ElementType };
const styleMapping: StyleMapping = {
  StyledFullPage,
  StyledCoverPage,
};

type ComponentMapping = { [componentName: string]: React.ElementType };
const componentMapping: ComponentMapping = {
  CoverPage,
  ProjectTitle,
};



function getComponents(data: any) {
  const components = data.components ?? []
  return components
}

function getContents(data: any) {
  const contents = data.contents ?? []
  return contents
}

function getStyle(componentStyle: string) {
  const style = styleMapping[componentStyle] || null;
  if (!style) {
    console.error(`Style ${componentStyle} not found`);
  }
  return style;
}

function getComponent(componentName: string) {
  const component = componentMapping[componentName] || null;
  if (!component) {
    console.error(`Component ${componentName} not found`);
  }
  return component;
}

interface DataType {
  theme?: string;
  stylesDir?: string;
  assetsDir?: string;
  componentsDir?: string;
  components?: ComponentsType[];
}

function main(data: DataType) {
  const theme = data.theme ?? "defaultTheme";
  const stylesDir = data.stylesDir ?? "styles";
  const assetsDir = data.assetsDir ?? "assets";
  const componentsDir = data.componentsDir ?? "components";
  const entry = data.components ?? [];

  console.log("Entry", entry)
  console.log("Theme", theme)
  console.log("Styles Dir", stylesDir)
  console.log("Assets Dir", assetsDir)
  console.log("Components Dir", componentsDir)
  

  entry.forEach((entry) => {
    const componentStyle = entry.componentStyle ?? theme;
    const componentName = entry.componentName ?? null;
    // get the correct mapping for the component
    if (componentName) {
      const component = getComponent(componentName);
      const style = getStyle(componentStyle);
      console.log("Component", component);
      console.log("Style", style);
    }


    const component = getComponents(entry);
    console.log("Component", component);
  });
}

main(jsonData)




// for the component get the componentStyle and set that as the wrapper
//    get the componentName and find the component thats mapped to it
//    for content in component.contents
//        render the content with the corresponding classname and id
//        for prop in content.contents
//          