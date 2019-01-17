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

  window.localStorage.setItem(localStorageKey, JSON.stringify(loader));
}
function update(localStorageKey, id) {
  let loader=load(localStorageKey);
  // console.log(loader);
  if (loader.length > 0) {
    loader.forEach(elem => {
      console.log(elem)

      if (elem.id == id) {
        (elem.isComplete === false) ? elem.isComplete = true : elem.isComplete = false

      }
    });
    window.localStorage.setItem(localStorageKey, JSON.stringify(loader));
  }
}
export { load, save, update };
