const filterData= (searchItem, bookList) => {
  return bookList.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );
};

export default filterData;
