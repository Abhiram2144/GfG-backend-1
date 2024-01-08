import ErrorHandler from "../middlewares/error.js";
import { blog} from "../models/blog.js";

//creating blog
export const BLOG = async (req, res, next) => {
  try {
    const {description} = req.body;

    await blog.create({
      description,
      user: req.user, //user so thaat we can display it later on

    });

    res.status(201).json({
      success: true,
      message: "Task added Successfully",
    });
  } catch (error) {
    next(error);
  }
};
//getting blog
export const MYBLOG = async (req, res, next) => {
    try {
        //here we are not displaying user wise blog but display all users
        const all = await blog.find();
      res.status(200).json({
        success: true,
        all,      ///getting all blog
      });
    } catch (error) {
      next(error);
    }
  };
  




