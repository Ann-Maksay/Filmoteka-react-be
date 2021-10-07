const { users: services } = require("../../services");

const deleteQueue = async (req, res, next) => {
  try {
    const { _id, queue } = req.user;
    const { filmId } = req.body;

    if (!queue.includes(filmId)) {
      res.status(404).json({
        status: "error",
        code: 404,
        massege: "Film not found",
      });
      return;
    }

    const newQueue = queue.filter((elem) => elem !== filmId);

    const newUserData = await services.updateById(_id, { queue: newQueue });

    res.json({
      status: "success",
      code: 200,
      data: {
        newQueue: newUserData.queue,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteQueue;
