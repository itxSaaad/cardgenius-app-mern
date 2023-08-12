const multer = require('multer');

// Define storage for uploaded images
const storage = multer.memoryStorage();

// Create the multer upload instance
const upload = multer({ storage });

module.exports = upload;
