export default (res, message, error, statusCode = 500) => {
    console.error(error);
    res.status(statusCode).json({ message, error: error.message });
};
