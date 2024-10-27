export interface CatFact {
  fact:   string;
  length: number;
}

export interface CatImage {
  tags:      string[];
  createdAt: Date;
  updatedAt: Date;
  mimetype:  string;
  size:      number;
  _id:       string;
}
