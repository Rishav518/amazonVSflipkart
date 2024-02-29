import axios from 'axios';
import cheerio from 'cheerio';

// Function to scrape data
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

    const product_name = $('.B_NuCI').text().trim();
    const product_image_url = $('._396cs4').attr('src');

    const product_current_price = $('._30jeq3').first().text().trim();
    const product_real_price = $('._3I9_wc').first().text().trim();
    const product_savings_percentage = $('._3Ay6Sb').text().trim();

    const table_data = {};
    $('._1s_Smc').each((index, element) => {
      const key = $(element).find('td._1hKmbr').text().trim();
      const value = $(element).find('td.URwL2w').text().trim();
      table_data[key] = value;
    });

    const data = {
      name: product_name,
      current_price: product_current_price,
      real_price: product_real_price,
      savings_percentage: product_savings_percentage,
      table_data,
      image_url: product_image_url,
    };

    res.json(data);
    // console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to scrape Flipkart' });
  }
}
