const Router = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send({
        title: 'API REST',
        version: '1.0.10',
    });
});

module.exports = router;