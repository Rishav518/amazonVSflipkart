import axios from 'axios';
import cheerio from 'cheerio';

async function scrapeData(url, selectors) {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
  };

  const response = await axios.get(url, { headers });
  return cheerio.load(response.data);
}

export default async function handler(req, res) {
  try {
    const { url } = req.body;
    const $ = await scrapeData(url);

    const product_name = $('#productTitle').text().trim();
    const product_image_url = $('#landingImage').attr('src');

    const product_current_price = $('.a-price-whole').first().text().trim();
    const product_rating = $('.a-icon-alt').text().trim();
    const product_real_price = $('.a-offscreen').first().text().trim();

    const table_data = {};
    $('tr .prodDetSectionEntry').each((index, element) => {
      const key = $(element).text().trim();
      const value = $(element).next('td.prodDetAttrValue').text().trim();
      table_data[key] = value;
    });

    const data = {
      name: product_name,
      current_price: product_current_price,
      real_price: product_real_price,
      table_data,
      image_url: product_image_url,
      rating: product_rating,
    };

    res.json(data);
    // console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to scrape Amazon' });
  }
}
