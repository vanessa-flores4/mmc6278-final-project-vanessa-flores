const router = require("express").Router();
const fetch = require("node-fetch");
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

// admin login/logout
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);

function apiGet(method, query) {
  const apiKey = "5ae2e3f221c38a28845f05b60b5231fc51d88e682aeffd09427cf61d";
  const apiUrl = `https://api.opentripmap.com/0.1/en/places/${method}?apikey=${apiKey}&${query}`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request error: " + response.status + " " + response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching tourSpots:", error);
      throw error;
    });
}

router.get("/search", async (req, res) => {
  try {
    const city = req.query.city;
    const response = await apiGet("geoname", `name=${city}`);
    const tourSpotsData = response._embedded ? response._embedded["tourist-attraction"] : [];
    res.render("index", { tourSpots: tourSpotsData });
  } catch (err) {
    console.error("Error fetching tourSpots:", err.message);
    res.status(500).send("Error fetching tourSpots.");
  }
});

module.exports = router;
