const cheerio = require('cheerio');
const fetchHTML = require('./fetchHTML');

const baseURL = 'https://www.imdb.com';

function getPlaceInfo(element) {
  const $ = cheerio.load(element);
  const title = $('.lister-item-header > a').text();
  const categories = $('.genre').text();
  const link = $('.lister-item-header > a').attr('href');

  return { title, categories, link }
}

async function getPagination(url) {
  const html = await fetchHTML(url);
  const $ = cheerio.load(html);

  const paginator = $('.lister-page-next');

  const elements = $('.lister-item');

  return { paginator, elements }
}

async function getIndividualFilms(URL) {
  let url = URL;

  while (true) {
    const { paginator, elements } = await getPagination(url);

    for (let index = 0; index < elements.length; index++) {
      console.log(elements[index]);
    }
    const next = paginator.attr('href');
    if (!next) break;
    url = `${baseURL}${next}`;
  }
}

getIndividualFilms('https://www.imdb.com/search/title/?genres=comedy&explore=title_type,genres&ref_=adv_prv');