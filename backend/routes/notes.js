const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/auth/getuser".   Login required.
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  // console.log("req : = >>>>", req.user);
  try {
    const notes = await Note.find({ user: req.user.id });
    // console.log("notes ==>>>>", notes);
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured.");
  }
});

// ROUTE 2: Add a new Note using: POST "/api/auth/addnote".   Login required.
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    console.log(" Add note req ===>> ", req.body);
    try {
      const { title, description, tag } = req.body;
      //if there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({ title, description, tag, user: req.user.id });

      const savedNote = await note.save(); //  returns the note
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured.");
    }
  }
);

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote".   Login required.
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    console.log("req.body ==>>>", req.body);
    // Create a newNote object
    const newNote = {};
    //update if changed
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    //check if the user is authenticate:
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // newNote.id = req.user.id;
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured.");
  }
});

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote".   Login required.
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    //Allow deleteion only if user owns this Note:
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // newNote.id = req.user.id;
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    //if the database is not working or server is down:
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured.");
  }
});
module.exports = router;
