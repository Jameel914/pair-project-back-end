const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkCurrency = (req, res, next) => {
  if (req.body.currency) {
    next();
  } else {
    res.status(400).json({ error: "Currency is required" });
  }
};

module.exports = { checkName, checkCurrency };
