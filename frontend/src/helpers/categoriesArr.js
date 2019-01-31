const categoriesArr = categories => {
  return Object.values(categories).map(item => item.name);
}

export default categoriesArr;
