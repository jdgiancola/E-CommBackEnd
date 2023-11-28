const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags with their associated Products
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product, through: ProductTag }]
  })
  .then(tags => res.json(tags))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Get a single tag by its ID with its associated Products
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{ model: Product, through: ProductTag }]
  })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(tag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(tag => res.status(200).json(tag))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update a tag's name by its ID
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then(tag => {
    if (!tag[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(tag);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

// Delete a tag by its ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(tag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
