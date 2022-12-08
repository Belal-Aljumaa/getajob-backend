import express from "express";
import cors from 'cors';
import * as model from './model.js'


const app = express();
app.use(cors());
const PORT = 3333;


app.get("/", (req: express.Request, res: express.Response) => {
  res.send(model.getApiDocumentationHtml());
});

app.get("/jobs", (req: express.Request, res: express.Response) => {
  res.json(model.getJobs());
});

app.get("/todos", (req: express.Request, res: express.Response) => {
  res.json(model.getTodos());
});

app.get('/totaledSkills', (req: express.Request, res: express.Response) => {
  res.json(model.getTotaledSkills());
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
