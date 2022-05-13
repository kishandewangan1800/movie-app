const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey : 'ec7f8b6c6b4494842644d08eeeb1d57c',
    originalImage: (imgPath)=> `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;