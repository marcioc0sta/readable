const getCategoryName = pathname => (
  pathname.replace('/category/', '')
);

export default getCategoryName;
