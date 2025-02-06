const express = require("express");

const router = express.Router();

const {
  getContacts,
  createContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken); // Protect all routes in this file

router.get("/", getContacts);

router.post("/", createContacts);

router.get("/:id", getContactById);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
