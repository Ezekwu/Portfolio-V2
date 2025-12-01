export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  stack: { tech: string; icon: string }[];
  image: string;
}
