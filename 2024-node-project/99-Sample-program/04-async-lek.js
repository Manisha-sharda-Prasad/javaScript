function fetchData() {
  const asynctask = resolve => {
    setTimeout(() => {
      console.log('Sync TAsk after 5 minutes');
      resolve('COMPLETED');
    }, 5000);
  };

  const cb = (resolve, reject) => {
    asynctask(resolve);
  };

  return new Promise(cb);
}

fetchData().then(d => console.log('fulfilled ! received data :', d));
