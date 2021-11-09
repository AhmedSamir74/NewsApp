export interface ISectionProps {
  children?: any;
  style?: any;
  cardStyle?: any;
  title?: string;
  subTitleComp?: any;
}

export interface IOption {
  id?: string | number;
  title: string;
  value: any;
}

export interface INew {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
