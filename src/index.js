import express from 'express';
import { uuid, isUuid } from 'uuidv4';

const app = express();
const projects = [];

app.use(express.json());

function logRequest(req, res, next) {
  const { method, url } = req;
  const logLabel = `[${method}] ${url}`;
  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
}

app.use(logRequest);

function validateProjectId(req, res, next) {
  const { id } = req.params;
  if (!isUuid(id)) {
    return res.status(400).json({ erro: 'Id is invalid' });
  }
  return next();
}

function hasValues(req, res, next) {
  if (projects.length === 0)
    return res
      .status(400)
      .json({ erro: 'There is no register to delete/update' });
  return next();
}

app.use('/project/:id', hasValues, validateProjectId);

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello world' });
});

app.post('/project', (req, res) => {
  const { title, owner } = req.body;

  const project = {
    id: uuid(),
    title,
    owner,
  };

  projects.push(project);

  return res.json(project);
});

app.get('/project', (req, res) => {
  return res.json(projects);
});

app.put('/project/:id', (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex((value) => value.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found' });
  }

  const project = { id, title, owner };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete('/project/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((value) => value.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found' });
  }

  projects.splice(projectIndex, 1);
  return res.json();
});

app.listen(7000, () => {
  console.log('Server running');
});
