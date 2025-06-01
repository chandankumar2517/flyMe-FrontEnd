module.exports = function validateLogin(req, res, next) {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
  
    // Proceed to the next middleware or route handler
    next();
  };