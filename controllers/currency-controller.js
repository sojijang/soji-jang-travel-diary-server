const axios = require("axios");

const getCurrency = async (req, res) => {
  try {
    const apiKey = "fca_live_YZ6E18udVnbTWkDsPIDDBvMvpZ7iNAeTIdzbUi5T";
    const baseUrl = "http://api.freecurrencyapi.com/v1/latest?apikey=";

    const response = await axios.get(baseUrl + apiKey, {
      params: {
        access_key: apiKey,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);

    res.status(500).json({
      message: "Unable to retrieve data",
    });
  }
};

module.exports = { getCurrency };
