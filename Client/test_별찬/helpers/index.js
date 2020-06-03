import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = (res) => res.body;

const requests = {
  get: (paramArgs) =>
    axios
      .get(`${API_ROOT}`, {
        params: paramArgs,
      })
      .then(responseBody),
};

const Articles = {
  all: (paramArgs) =>
    requests.get({
      limit: 10,
    }),
};
