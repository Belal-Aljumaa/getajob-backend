import fs from "fs";
import * as model from "./model.js";
import { RawJob, Job, Skill, nullObjectSkill } from "./types.js";

const rawJobs: RawJob[] = JSON.parse(
  fs.readFileSync("./src/data/jobs.json", "utf8")
);
const skillInfos: any = JSON.parse(
  fs.readFileSync("./src/data/skillInfos.json", "utf8")
);

export const getJobs = () => {
  const jobs: Job[] = [];
  rawJobs.forEach((rawJobs: RawJob) => {
    const job: Job = {
      ...rawJobs,
      skills: model.buildSkills(rawJobs.skillList),
    };
    jobs.push(job);
  });
  return jobs;
};

export const buildSkills = (skillList: string) => {
  const skills: Skill[] = [];
  const skillIdCodes = skillList.split(",").map((m) => m.trim());
  skillIdCodes.forEach((skillIdCode) => {
    const _skill = skillInfos[skillIdCode];
    if(_skill === undefined) {
      const skill: Skill = {
        ...nullObjectSkill,
        idCode: skillIdCode,
      };
      skills.push(skill);
    } else {
      const skill: Skill = {
        ..._skill,
        skillIdCode,
      };
      skills.push(skill);
    }
  });
  return skills;
};

export const getTodos = () => {
  return rawJobs.map((job: Job) => {
    return {
      todo: job.todo,
      company: job.company,
      title: job.title,
    };
  });
};

export const getApiDocumentationHtml = () => {
  return `
  <h1>Get a Job Api</h1>
  <ul>
    <li><a href="jobs">/jobs</a> - returns an array of job objects</li>
  </ul>`;
};
