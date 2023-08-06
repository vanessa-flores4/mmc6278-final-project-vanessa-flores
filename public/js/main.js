function handleSearchFormSubmit(event) {
  event.preventDefault(); 

  const city = document.getElementById("city").value;
  const searchResultsDiv = document.getElementById("searchResults");

  apiGet("geoname", `name=${city}`)
    .then((data) => {
      if (data && data.length > 0) {
        let tourSpotsHtml = data.map((attraction) => `
          <div class="attraction-card">
            <h2>${attraction.name}</h2>
            <p>${attraction.description ? attraction.description : ""}</p>
            <p>Rating: ${attraction.rate ? attraction.rate : "N/A"}</p>
            ${
              attraction.preview && attraction.preview.source
                ? `<img src="${attraction.preview.source}" alt="${attraction.name}" width="200">`
                : ""
            }
          </div>
        `).join("");

        searchResultsDiv.innerHTML = tourSpotsHtml;
      } else {
        searchResultsDiv.innerHTML = "<p>No tourSpots found for the given city.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching tourSpots:", error);
      searchResultsDiv.innerHTML = "<p>Error fetching tourSpots.</p>";
    });
}

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