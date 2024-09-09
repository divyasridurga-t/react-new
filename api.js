let express = require('express');
const axios = require('axios');
let app = express();
let port = 3000;

app.get('/api/restaurants', async (req, res) => {
    try {
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45228080314395&lng=78.36921878350192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        console.log(response.data);

        return res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`app listening on the port ${port}`);
})

