const Coords = require("./models/coords");

// Sample data for Indian states and their coordinates
const indianStates = [
  { state: 'Andhra Pradesh', coords: '15.3173, 78.4867' },
  { state: 'Arunachal Pradesh', coords: '27.0667, 93.3667' },
  { state: 'Assam', coords: '26.2006, 92.9376' },
  { state: 'Bihar', coords: '25.0961, 85.3139' },
  { state: 'Chhattisgarh', coords: '21.2787, 81.8661' },
  { state: 'Goa', coords: '15.2993, 74.1240' },
  { state: 'Gujarat', coords: '23.0216, 72.5714' },
  { state: 'Haryana', coords: '29.0588, 76.0856' },
  { state: 'Himachal Pradesh', coords: '31.1048, 77.1734' },
  { state: 'Jammu and Kashmir', coords: '33.7782, 76.5762' },
  { state: 'Jharkhand', coords: '23.6102, 85.2799' },
  { state: 'Karnataka', coords: '15.3173, 74.1239' },
  { state: 'Kerala', coords: '10.8505, 76.2711' },
  { state: 'Madhya Pradesh', coords: '23.1800, 77.4200' },
  { state: 'Maharashtra', coords: '19.0760, 72.8777' },
  { state: 'Manipur', coords: '24.6637, 93.9063' },
  { state: 'Meghalaya', coords: '25.4670, 91.3667' },
  { state: 'Mizoram', coords: '23.1645, 92.9376' },
  { state: 'Nagaland', coords: '26.1581, 94.1833' },
  { state: 'Odisha', coords: '20.9517, 85.0985' },
  { state: 'Punjab', coords: '31.1471, 75.3412' },
  { state: 'Rajasthan', coords: '27.0238, 74.2179' },
  { state: 'Sikkim', coords: '27.5333, 88.5128' },
  { state: 'Tamil Nadu', coords: '11.1271, 78.6569' },
  { state: 'Telangana', coords: '17.3850, 78.4867' },
  { state: 'Tripura', coords: '23.9408, 91.2904' },
  { state: 'Uttarakhand', coords: '30.0668, 79.0193' },
  { state: 'Uttar Pradesh', coords: '26.8467, 80.9462' },
  { state: 'West Bengal', coords: '22.9868, 87.8553' },
  { state: 'Andaman and Nicobar Islands', coords: '11.7401, 92.6586' },
  { state: 'Chandigarh', coords: '30.7333, 76.7794' },
  { state: 'Dadra and Nagar Haveli and Daman and Diu', coords: '20.1800, 72.8300' },
  { state: 'Delhi', coords: '28.7041, 77.1025' },
  { state: 'Jammu and Kashmir', coords: '33.7782, 76.5762' },
  { state: 'Ladakh', coords: '34.1526, 77.5771' },
  { state: 'Lakshadweep', coords: '10.5667, 72.6333' },
  { state: 'Puducherry', coords: '11.9333, 79.8167' }
];

// Function to insert data into the Coords model
async function insertIndianStates() {
  try {
    for (const state of indianStates) {
      await Coords.create({
        Country: 'India',
        State: state.state,
        Coords: state.coords
      });
    }
    console.log('All Indian states data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}


insertIndianStates();