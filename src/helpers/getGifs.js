export const getGifs = async (category) => {

    //const url = `https://api.giphy.com/v1/gifs/search?api_key=STAtC8OMo5y5ijIpx73UG7PpMCBkqIkn&q=${category}&limit=14`;
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=STAtC8OMo5y5ijIpx73UG7PpMCBkqIkn&limit=10`);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({ 
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
    }));

   return gifs; 
};