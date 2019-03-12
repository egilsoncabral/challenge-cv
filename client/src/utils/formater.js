import moment from 'moment';

export const formatUrl = url => {
  if(url)
    if (url.match(/\www.(.*)/)) {
      let smallUrl = url.replace('https://www.','') || url.replace('http://www.','') || url.replace('Https://www.','')
      return smallUrl.substr(0,smallUrl.indexOf('/'))
    } else {
      let urlSemHttp = url.substr(url.indexOf('/')+2,url.length)
      return urlSemHttp.substr(0,urlSemHttp.indexOf("/"));
    }

}

export const formatTime = time => moment(new Date(time * 1000), "YYYYMMDD").fromNow();
