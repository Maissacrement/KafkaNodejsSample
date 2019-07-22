// App
const BadRequest = (_: any, res: any) => {
  return res.status(404).json({
    message: "Path not found",
    status: 404
  });
};

export default BadRequest;
