let getcss = document.querySelector("#getcss");
getcss.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      }
    }
  };
  request.send();
};
getjs.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      }
    }
  };
  request.send();
};
gethtml.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      }
    }
  };
  request.send();
};
getxml.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let dom = request.responseXML;
        let string = dom.getElementsByTagName("warning")[0].textContent;
        console.log(string);
      }
    }
  };
  request.send();
};
getjson.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let json = request.response;
        let object = JSON.parse(json);
        console.log(object);
      }
    }
  };
  request.send();
};
