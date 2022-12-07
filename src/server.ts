import express from "express";
import fs from "fs";
import cors from 'cors';

type Job = {
  id: number;
  title: string;
  company: string;
  description: string;
  url: string;
  skillList: string;
  todo: string;
};

const app = express();
app.use(cors());
const PORT = 3333;

const jobs: Job[] = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("job site api");
});

app.get("/jobs", (req: express.Request, res: express.Response) => {
  res.json(jobs);
});

app.get("/todos", (req: express.Request, res: express.Response) => {
  res.json(jobs.map((job: Job)=> {
    return {
      todo: job.todo,
      company: job.company,
      title: job.title,
    };
  }));
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
