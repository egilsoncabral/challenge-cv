// import M from 'materialize-css';
import axios from 'axios';

export const loadVisualComponent = (idElemento, nomeComponent, options) => {
    const Fn = Function
      var componente = new Fn('return ' + nomeComponent)();
      if (componente.init(document.querySelector(idElemento), options) !== null) {
          return componente.getInstance(
              componente.init(document.querySelector(idElemento), options).el
            )
      }else{
          return null
      }
  }


export const loadNews = (url, data) => {return axios.get(`${url}/${data}.json`).then(result => {return result})}