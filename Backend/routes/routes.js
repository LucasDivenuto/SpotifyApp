import express from 'express';
import {searchAlbums, eliminar, create, get, getAll, update } from '../controllers/Controller.js';
const router = express.Router();

router.get('/', getAll);
router.get('/:id', get);
router.post('/almacenar', create);
router.post('/buscar', searchAlbums)
router.put('/:id',update);
router.delete('/:id',eliminar);

export default router