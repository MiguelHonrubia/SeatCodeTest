export const buildRequestFilters = (filters: any): URLSearchParams => {
  const urlParams = new URLSearchParams();

  for (const f in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, f)) {
      if (filters[f] != undefined && filters[f] != "") {
        if (Array.isArray(filters[f])) {
          filters[f].forEach((elem) => {
            urlParams.append(f, elem);
          });
        } else {
          urlParams.append(f, filters[f]);
        }
      }
    }
  }

  return urlParams;
};

export const buildRequestSort = (sort: any): URLSearchParams => {
  const urlParams = new URLSearchParams();

  let paramsString = "";

  Object.keys(sort).forEach((elem) => {
    if (paramsString !== "") {
      paramsString = `${paramsString},${elem} ${sort[elem]}`;
    } else {
      paramsString = `${elem} ${sort[elem]}`;
    }
  });

  if (Object.keys(sort).length > 0) {
    urlParams.append("_sort", paramsString);
  }

  return urlParams;
};

export const buildRequestFiltersAndSort = (
  filters?: any,
  sort?: any
): URLSearchParams => {
  let filteredParams;
  let sortedParams;

  if (filters) filteredParams = buildRequestFilters(filters);

  if (sort) sortedParams = buildRequestSort(sort);

  return combineSearchParams(filteredParams, sortedParams);
};

function combineSearchParams(searchParams1, searchParams2) {
  const result = new URLSearchParams();
  const array = [];

  if (searchParams1) array.push(searchParams1);
  if (searchParams2) array.push(searchParams2);

  // Display the key/value pairs

  array.forEach((params) => {
    for (const pair of params.entries()) {
      result.append(pair[0], pair[1]);
    }
  });

  return result;
}
