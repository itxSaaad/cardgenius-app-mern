const multer = require('multer');
const path = require('path');

// Define storage for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    ); // File name format
  },
});

// Create the multer upload instance
const upload = multer({ storage });

module.exports = upload;