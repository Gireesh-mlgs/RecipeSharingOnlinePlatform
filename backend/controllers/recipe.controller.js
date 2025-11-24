const Recipe = require("../models/Recipe");

// POST /recipe/add
exports.addRecipe = async (req, res) => {
  try {
    const { title, description, ingredients = [], steps = [], images = [] } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const recipe = new Recipe({
      title,
      description,
      ingredients: Array.isArray(ingredients) ? ingredients : [ingredients],
      steps: Array.isArray(steps) ? steps : [steps],
      images: Array.isArray(images) ? images : [images],
      userId: req.user.id,
    });

    await recipe.save();
    res.status(201).json({ message: "Recipe created", recipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add recipe" });
  }
};

// GET /recipe/feed  -> returns feed (all recipes sorted by createdAt desc)
exports.getFeed = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("userId", "-password").sort({ createdAt: -1 }).lean();
    const base = process.env.SERVER_BASE_URL || "";
    const mapped = recipes.map((r) => {
      const copy = { ...r };
      if (copy.images && Array.isArray(copy.images)) {
        copy.images = copy.images.map((img) => (img && img.startsWith("http") ? img : img ? `${base}/${img}` : img));
      }
      if (copy.userId && copy.userId.profileImage) {
        copy.userId.profileImage = copy.userId.profileImage.startsWith("http")
          ? copy.userId.profileImage
          : `${base}/${copy.userId.profileImage}`;
      }
      return copy;
    });

    res.json({ feed: mapped });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch feed" });
  }
};

// GET /recipe/getMyRecipe?populate=recipes
exports.getMyRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find({ userId: req.user.id }).sort({ createdAt: -1 }).lean();
    res.json({ recipes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch user recipes" });
  }
};

// GET /recipe/getAllRecipe
exports.getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 }).lean();
    res.json({ recipes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};

// GET /recipe/getSingleRecipe/:id
exports.getSingleRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("userId", "-password").lean();
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json({ recipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch recipe" });
  }
};

// PATCH /recipe/update/:id
exports.updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const recipe = await Recipe.findById(id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    if (recipe.userId.toString() !== req.user.id) return res.status(403).json({ message: "Unauthorized" });

    const updated = await Recipe.findByIdAndUpdate(id, updates, { new: true });
    res.json({ message: "Recipe updated", updatedRecipe: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update recipe" });
  }
};
