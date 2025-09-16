import multer from "multer";

// Configuration for disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // store files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // save with original file name
  }
});

// Create the multer instance
const upload = multer({ storage });

export default upload;
