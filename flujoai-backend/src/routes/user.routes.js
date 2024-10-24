const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/user', createUser);

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/user/:id', getUserById);

// Ruta para actualizar un usuario
router.put('/user/:id', updateUser);

// Ruta para eliminar un usuario
router.delete('/user/:id', deleteUser);

module.exports = router;


