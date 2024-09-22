// urls for plant data

const SpeciesURL = 'https://perenual.com/api/species-list?key=sk-usT966ec6aaa9765e6913';

const PlantDetailsURL = 'https://perenual.com/api/species/details/[ID]?key=sk-usT966ec6aaa9765e6913';

const PlantDiseaseURL = 'https://perenual.com/api/pest-disease-list?key=sk-usT966ec6aaa9765e6913';

const PlantGuidesURL = 'https://perenual.com/api/species-care-guide-list?key=sk-usT966ec6aaa9765e6913';

// Global variables for catagories that the api will fetch

const PlantImage = localStorage.getItem("small_url");
const PlantName = localStorage.getItem("common_name");
const PlantColor = localStorage.getItem("color");
const PlantType = localStorage.getItem("type");
const SunExposure = localStorage.getItem("sunlight");
const Watering = localStorage.getItem("watering");
const GrowthRate = localStorage.getItem("growth_rate");
const PoisonousHumans = localStorage.getItem("poisonous_to_humans");
const PoisonousPets = localStorage.getItem("poisonous_to_pets");
const Flowers = localStorage.getItem("flowers");
const Indoors = localStorage.getItem("indoor");
const Medicinal = localStorage.getItem("medicinal");
const EdibleLeaf = localStorage.getItem("edible_leaf");

// Variables for API
// Adding both api keys's just in case we decide to pull information from both

// 'X-RAPIDAPI-KEY':import.meta.env.VITE_TREFLEAPI_KEY
// 'X-RAPIDAPI-KEY':import.meta.env.VITE_PERENUALAPI_KEY

// Functions: Check to see what information can be pulled. 
