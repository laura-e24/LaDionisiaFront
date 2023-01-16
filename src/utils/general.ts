export enum EStateGeneric {
  IDLE = "idle",
  SUCCEEDED = "succeeded",
  PENDING = "pending",
  FAILED = "failed",
}

export enum EGenericButtonType {
  PRIMARY = "PRIMARY",
  CLOSE = "CLOSE",
}

export const rateGen = (rating) => {
  const
    scores = [0, 20, 40, 50, 60, 70, 80, 90, 96, 100],
    max = scores[rating],
    min = scores[rating - 1],
    seed = Math.abs(
      Math.sqrt(
        -1 * Math.log(1 - Math.random())
      )
      *
      Math.cos(1 * Math.PI * Math.random())
    )
  return Math.floor(seed * (max - min + 1) + min)
}
export function filterWines(wines, filters) {
  return wines.filter(wine => {
    return filters.filter(filter => {
      return wine.region === filter.region || filterByVintage(wine, filter) || filterByScore(wine, filter);
    }).length === filters.length;
  });
}

const filterByVintage = (wine, filter) => {
  switch (filter.vintage) {
    case '2010-Present':
      return wine.year > 2009
    case '2000-2009':
      return wine.year > 1999 && wine.year < 2010
    case '1990-1999':
      return wine.year > 1989 && wine.year < 2000
    case '1980-1989':
      return wine.year > 1979 && wine.year < 1990
    case '1970-1979':
      return wine.year > 1969 && wine.year < 1980
    case '1960-1969':
      return wine.year > 1959 && wine.year < 1970
    case '1959-older':
      return wine.year < 1959
    case 'all-vintage':
      return wine.year
  }
}

const filterByScore = (wine, filter) => {
  switch (filter.score) {
    case '100':
      return rateGen(wine.rating) === 100
    case '99-97':
      return rateGen(wine.rating) < 100 && rateGen(wine.rating) >= 97
    case '96-94':
      return rateGen(wine.rating) < 97 && rateGen(wine.rating) >= 94
    case '93-91':
      return rateGen(wine.rating) < 94 && rateGen(wine.rating) >= 91
    case '90-under':
      return rateGen(wine.rating) < 91
    case 'all-score':
      return rateGen(wine.rating)
  }
}