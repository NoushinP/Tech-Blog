const router = require('express').Router();
const { Create } = require('../../models/');
const { apiGuard } = require('../../utils/authGuard');

router.post('/', apiGuard, async (req, res) => {
  try {
    const newCreate = await Create.create({
      ...req.body,
      userId: req.session.user_id,
    });
    res.json(newCreate);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;