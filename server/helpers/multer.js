import multer from "multer";
import path, { dirname } from "path";

const uploadPath = ("../../client/public/Images/products");

const fileTypes = /jpeg|jpg|png/;
const fileFilter = (req, file, cb) => {
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb(new Error("File type is not allowed, Only images are allowed"));
  }
};

const uploadImage = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../Olx-clone/client/public/images');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 },
  }).single("productPhoto");

  upload(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({
          message: "Multer error occured during uploads",
          error: err.message,
        });
      } else {
        return res.status(400).json({
          message: "File upload error.",
          error: err.message,
        });
      }
    }
    next();
  });
};

export default uploadImage;
