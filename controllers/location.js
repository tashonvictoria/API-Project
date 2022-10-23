import Location from "../models/Location.js";

export const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);

    if (location) {
      return res.json(location);
    }

    res.status(404).json({ message: "Location not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByIdAndUpdate(id, req.body);
    res.status(201).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Location.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Location deleted!");
    }

    throw new Error("Location not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

