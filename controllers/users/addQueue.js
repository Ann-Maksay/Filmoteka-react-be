const { users: services } = require("../../services");

const addQueue = async (req, res, next) => {
  try {
    const { queue, watched, _id } = req.user;
    const { filmId } = req.body;

    if (queue.includes(filmId)) {
      res.status(400).json({
        status: "error",
        code: 400,
        massege: "Film alredy in",
      });
      return;
    }

    queue.push(filmId);

    if (watched.includes(filmId)) {
      const newWatched = watched.filter((elem) => elem !== filmId);

      await services.updateById(_id, {
        queue: queue,
        watched: newWatched,
      });
    } else {
      await services.updateById(_id, { queue: queue });
    }

    const newUserData = await services.getById(_id);

    res.json({
      status: "success",
      code: 200,
      data: {
        newQueue: newUserData.queue,
        newWatched: newUserData.watched,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addQueue;
