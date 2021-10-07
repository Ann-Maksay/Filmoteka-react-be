const deleteWatched = async (req, res, next) => {
  try {
    const { _id, watched } = req.user;
    const { filmId } = req.body;

    if (!watched.includes(filmId)) {
      res.status(404).json({
        status: "error",
        code: 404,
        massege: "Film not found",
      });
      return;
    }

    const newWatched = watched.filter((elem) => elem !== filmId);

    const newUserData = await services.updateById(_id, {
      watched: newWatched,
    });

    res.json({
      status: "success",
      code: 200,
      data: {
        newWatched: newUserData.watched,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteWatched;
