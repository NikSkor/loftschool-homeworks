function load(localStorageKey) {
  const stringData = window.localStorage.getItem(localStorageKey);
  let data = null;

  try {
    data = JSON.parse(stringData);
  } catch (e) {}

  return data;
}

function save(localStorageKey, data) {
  let loader=load(localStorageKey);
  if (loader===null) loader=[];
  loader.push(data);
  // console.log(loader);

  window.localStorage.setItem(localStorageKey, JSON.stringify(loader));
}
function update(localStorageKey, id) {
  let loader=window.localStorage.getItem(localStorageKey);
  // if (loader===null) loader=[];
// console.log(loader);
  // let storage = window.localStorage.localStorageKey;
  if (loader) {
    loader.forEach(elem => {
      if (elem.id === id) {
        elem.isComplete==='false' ? elem.isComplete='true' : elem.isComplete='false'
      }
    });
    window.localStorage.setItem(localStorageKey, JSON.stringify(loader));
  }
}
export { load, save, update };
