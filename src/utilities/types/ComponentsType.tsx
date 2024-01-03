import ContentType from "./ContentType";

interface ComponentsType {
  componentName: string;
  theme: string;
  components?: ComponentsType[];
  contents?: ContentType[];
}

export default ComponentsType;
