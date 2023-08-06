USE mysql_project_db;

INSERT INTO users (username, password)
VALUES ("banana", "$2b$10$/1UfZvXYrToAGa5mO1IbfesmFQJ42WIlI60swCyafhzrB/2KcD1RK");

INSERT INTO tourSpots (name, location, descriptiogitn, rating, category)
VALUES
  ("TourSpot 1", "Location 1", "Description for TourSpot 1", 4.5, "Category A"),
  ("TourSpot 2", "Location 2", "Description for TourSpot 2", 3.8, "Category B"),
  ("TourSpot 3", "Location 3", "Description for TourSpot 3", 4.2, "Category C"),
  ("TourSpot 4", "Location 4", "Description for TourSpot 4", 4.0, "Category A"),
  ("TourSpot 5", "Location 5", "Description for TourSpot 5", 4.6, "Category B");