interface ContentType {
  contentType: string;
  contentData: string;
  contentClass: string;
  contentId: string;
  contents?: ContentType[]; // Recursive type reference for nested contents
}

export default ContentType;
