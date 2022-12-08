import express from "express";
import cors from "cors";
import * as model from "./model.js";

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

app.get("/totaledSkills", (req: express.Request, res: express.Response) => {
  res.json(model.getTotaledSkills());
});

app.delete('/job/:id', async (req: express.Request, res: express.Response) => {
	const id = Number(req.params.id);
	const deletedObject = await model.deleteJob(id);
	if (deletedObject === undefined) {
			res.status(409).send({
					error: true,
					message: `job with id ${id} does not exist, deletion failed`
			})
	} else {
			res.status(200).json(deletedObject);
	}
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
