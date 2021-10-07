const getQueueList = async (req, res, next) => {
  const { queue } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      queue,
    },
  });
};

module.exports = getQueueList;
