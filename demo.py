import geopandas as gpd
import json
from shapely.geometry import mapping

# Sample URL for GeoJSON country boundaries
url = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson"

# Load GeoJSON into a GeoDataFrame
world_gdf = gpd.read_file(url)

# Print available columns to confirm
print("Available columns:", world_gdf.columns.tolist())

# Create a dictionary to store country names and their corresponding geometries
country_boundaries = {}

# Iterate through each row in the GeoDataFrame
for index, row in world_gdf.iterrows():
    country_name = row['name']  # Get the country name
    geometry = mapping(row['geometry'])  # Convert geometry to GeoJSON format using mapping
    country_boundaries[country_name] = geometry  # Store in dictionary

# Write the dictionary to a JSON file
output_file = 'demo.json'
with open(output_file, 'w') as f:
    json.dump(country_boundaries, f, indent=4)

print(f"Country boundaries have been written to {output_file}.")