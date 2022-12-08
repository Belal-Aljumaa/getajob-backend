export type Skill = {
  idCode: string;
  name: string;
  url: string;
  description: string;
};

export const nullObjectSkill: Skill = {
  idCode: "",
  name: "",
  url: "",
  description: ""
};

export type RawJob = {
  id: number;
  title: string;
  company: string;
  description: string;
  url: string;
  skillList: string;
  todo: string;
};

export type Job = {
  id: number;
  title: string;
  company: string;
  description: string;
  url: string;
  skillList: string;
  skills: Skill[];
  todo: string;
};
