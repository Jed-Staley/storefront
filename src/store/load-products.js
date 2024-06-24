import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const loadCategories = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/categories`);
    console.log('Categories loaded:', response.data);
    return response.data.map(category => ({
      name: category,
      displayName: category,
    }));
  } catch (error) {
    console.error('Error loading categories:', error);
    return [];
  }
};
