export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  prompt: string;
  options: Option[];
  correctOptionId: string;
};

export type ExamId =
  | "aws-saa"
  | "aws-cloud-practitioner"
  | "azure-az900"
  | "scrum-master-i"
  | "scrum-master-ii"
  | "scrum-developer-i";