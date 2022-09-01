import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RestForm() {
  const [state, setState] = useState([]);

  const getRestaraunts = () => {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
      params: {
        location_id: '293919',
        restaurant_tagcategory: '10591',
        restaurant_tagcategory_standalone: '10591',
        currency: 'USD',
        lunit: 'km',
        limit: '30',
        open_now: 'false',
        lang: 'en_US',
      },
      headers: {
        'X-RapidAPI-Key': '0330575239msh8b8d89162167bd1p1baa75jsnb07d45ec1e27',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      setState(response.data.data.map((el) => ({
        name: el.name, description: el.description, phone: el.phone, price: el.price, rating: el.rating, photo: el.photo?.images.medium.url, website: el.website, weburl: el.web_url,
      })));
    });
  };

  console.log(state);
  useEffect(() => {
    getRestaraunts();
  }, []);

  const newState = state.filter((el) => el.name !== undefined);

  return (
    <div className="rest-list">
      {newState.map((el) => (
        <div className="card-content">
          <div className="card">
            <img src={el.photo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">{el.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Рейтинг
                {' '}
                {' '}
                {' '}
                {el.rating}
              </li>
              <li className="list-group-item">
                Средний чек
                {' '}
                {' '}
                {' '}
                {el.price}
              </li>
              <li className="list-group-item">
                Тел.
                {' '}
                {el.phone}
              </li>
            </ul>
            <div className="card-body">
              <a href={el.website} className="card-link">Сайт</a>
              <a href={el.weburl} className="card-link">TripAdvisor</a>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
