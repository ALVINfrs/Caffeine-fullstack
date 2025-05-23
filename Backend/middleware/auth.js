function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = { isAuthenticated };
