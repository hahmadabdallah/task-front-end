
const API_URL = process.env.REACT_APP_API_URL;

export const getGenres = async () => {
    // Fetch genres information from the server
    const response =  await fetch(`${API_URL}/api/genres`);
    return await response.json();
}
export const getArtistByGenre =async (genre) => {
    const response = await fetch(`${API_URL}/api/artists/${genre}`);
    return await response.json();
}
export const getArtistInfoById = async (id) => {
    // Fetch artist information from the server
    const response = await fetch(`${API_URL}/api/artists/artist/${id}`);
    return await response.json();
  };

  export const saveChatMessage = async (artistId, userId, message) => {
    // Save the chat message to the server
    const response = await fetch(`${API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ artistId, userId, message }),
    });
    return await response.json();
  };
  
  export const getChatHistory = async (artistId, userId) => {
    // Fetch the chat history from the server
    const response = await fetch(`${API_URL}/api/chat/${artistId}?userId=${userId}`);
    return await response.json();
  };