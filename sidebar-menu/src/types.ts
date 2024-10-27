export interface Section {
  label:     string;
  to:        string;
  children?: SectionChild[];
}

export interface SectionChild {
  label:     string;
  to:        string;
  children?: ArticleChild[];
}

export interface ArticleChild {
  label:     string;
  to:        string;
  children?: OtherChild[];
}

export interface OtherChild {
  label: string;
  to:    string;
}