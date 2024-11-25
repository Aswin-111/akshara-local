import geopandas as gpd
import matplotlib.pyplot as plt

# Sample URL for GeoJSON country boundaries
url = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson"

# Load GeoJSON into a GeoDataFrame
world_gdf = gpd.read_file(url)

# Print available columns to confirm
print("Available columns:", world_gdf.columns.tolist())

def plot_country(country_name):
    # Use the correct column name 'name'
    country_column = 'name'
    
    # Filter the GeoDataFrame for the specified country
    country_gdf = world_gdf[world_gdf[country_column] == country_name]
    
    # Check if the country exists in the dataset
    if country_gdf.empty:
        print(f"Country '{country_name}' not found.")
        return
    
    # Plotting the specified country's boundaries
    fig, ax = plt.subplots()
    world_gdf.plot(ax=ax, color='white', edgecolor='black')  # Plot all countries for context
    country_gdf.plot(ax=ax, color='blue', edgecolor='black')  # Highlight the specified country
    
    # Set title and show plot
    plt.title(f'Boundaries of {country_name}')
    plt.show()

# Example usage: plot the boundaries of Canada
plot_country('Russia')