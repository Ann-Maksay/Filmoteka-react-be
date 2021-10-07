const { users: services } = require("../../services");

const addWatched = async (req, res, next) => {
  try {
    const { queue, watched, _id } = req.user;
    const { filmId } = req.body;

    if (watched.includes(filmId)) {
      res.status(400).json({
        status: "error",
        code: 400,
        massege: "Film alredy in",
      });
      return;
    }

    watched.push(filmId);

    if (queue.includes(filmId)) {
      const newQueue = queue.filter((elem) => elem !== filmId);
      console.log(newQueue);

      await services.updateById(_id, {
        watched: watched,
        queue: newQueue,
      });
    } else {
      await services.updateById(_id, { watched: watched });
    }

    const newUserData = await services.getById(_id);

    res.json({
      status: "success",
      code: 200,
      data: {
        newWatched: newUserData.watched,
        newQueue: newUserData.queue,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addWatched;
