import Task from '../models/Task.js';
import handleError from '../utils/handleError.js';

// Criar nova tarefa
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    handleError(res, 'Erro ao criar tarefa', error, 400);
  }
};

// Listar todas as tarefas
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    handleError(res, 'Erro ao buscar tarefas', error);
  }
};

// Buscar uma tarefa por ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
    handleError(res, 'Erro ao buscar tarefa por ID', error, 400);
  }
};

// Atualizar tarefa
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.status(200).json(task);
  } catch (error) {
    handleError(res, 'Erro ao atualizar tarefa', error, 400);
  }
};

// Deletar tarefa
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    handleError(res, 'Erro ao deletar tarefa', error);
  }
};

