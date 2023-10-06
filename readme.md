## select-philippines-address@1.0.6

Promised-based select addresses in the Philippines using HTML select tag base on address codes or location name.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![npm version](https://badge.fury.io/js/select-philippines-address.svg)](https://badge.fury.io/js/select-philippines-address) [![codecov](https://codecov.io/gh/nodejs/undici/branch/main/graph/badge.svg?token=yZL6LtXkOA)](https://codecov.io/gh/nodejs/undici)

### Demos

> React JS

[![Deploy with Vercel](https://vercel.com/button)](https://select-philippines-address.vercel.app/)

> Vue JS

[![Deploy with Vercel](https://vercel.com/button)](https://select-philippines-address-vue.vercel.app/)

### Installation

```
npm i select-philippines-address --save
```

### Usage

```js
import { regions, provinces, cities, barangays, regionByCode, provincesByCode, provinceByName } from "select-philippines-address";

regions().then((region) => console.log(region));
regionByCode("01").then((region) => console.log(region.region_name));
provinces("01").then((province) => console.log(province));
provincesByCode("01").then((province) => console.log(province));
provinceByName("Rizal").then((province) => console.log(province.province_code));
cities("0128").then((city) => console.log(city));
barangays("052011").then((barangays) => console.log(barangays));
```

### Description

| Function           | Parameters                   | Description                                        |
|--------------------|------------------------------|----------------------------------------------------|
| `regions()`        | None                         | Returns all regions.                               |
| `regionByCode()`   | `region_code`                | Returns a region by its code.                      |
| `provinces()`      | `region_code`                | Returns provinces in the specified region.         |
| `provincesByCode()`| `region_code`                | Returns provinces in the specified region.         |
| `provinceByName()` | `province_name`              | Returns a province by its name.                    |
| `cities()`         | `province_code`              | Returns cities in the specified province.         |
| `barangays()`      | `city_code`                  | Returns barangays in the specified city.           |


<!---```diff
- ✨ Screenshots
```

| React JS                                                                                                  | Vue JS                                                                                       |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ![App](https://github.com/isaacdarcilla/select-philippines-address/blob/main/demo/react/screenshot/1.PNG) | ![App](https://github.com/isaacdarcilla/select-philippines-address/blob/main/demo/vue/2.PNG) |

![](https://github.com/isaacdarcilla/select-philippines-address/blob/main/demo/react/screenshot/img.png)
--->

### Demo Source Code

-   [React JS](https://github.com/isaacdarcilla/select-philippines-address/tree/main/demo/react)
-   [Vue JS](https://github.com/isaacdarcilla/select-philippines-address/tree/main/demo/vue)

###  License

[Apache-2.0](https://github.com/isaacdarcilla/select-philippines-address/blob/master/LICENSE)

### Contributors

- [Isaac Arcilla](https://facebook.com/isaacdarcilla)<br>
- [LA Colinares](https://github.com/la-colinares)
