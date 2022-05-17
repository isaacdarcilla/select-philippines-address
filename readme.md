<p align="center"><img src="https://pngimage.net/wp-content/uploads/2018/06/philippine-flag-icon-png-5.png" width="200"></p>

## **select-philippines-address@1.0.6**

`Select addresses in the Philippines using HTML select base on address codes`

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![npm version](https://badge.fury.io/js/select-philippines-address.svg)](https://badge.fury.io/js/select-philippines-address) [![codecov](https://codecov.io/gh/nodejs/undici/branch/main/graph/badge.svg?token=yZL6LtXkOA)](https://codecov.io/gh/nodejs/undici)

```diff
- ✨ Demo Deployed at Vercel
```

> React JS

[![Deploy with Vercel](https://vercel.com/button)](https://select-philippines-address.vercel.app/)

> Vue JS

[![Deploy with Vercel](https://vercel.com/button)](https://select-philippines-address-vue.vercel.app/)

```diff
- ✨ Installation
```

> **npm i select-philippines-address --save**

```diff
- ✨ Usage
```

```js
import {
    regions,
    provinces,
    cities,
    barangays,
} from "select-philippines-address";

regions().then((region) => console.log(region));
regionByCode("01").then((region) => console.log(region.region_name));
provinces("01").then((province) => console.log(province));
provincesByCode("01").then((province) => console.log(province));
provinceByName("Rizal").then((province) => console.log(province.province_code));
cities("0128").then((city) => console.log(city));
barangays("052011").then((barangays) => console.log(barangays));
```

-   `regions()` - has no parameter which returns all regions.
-   `regionByCode()` - has 1 parameter region_code which returns a region.
-   `provinces()` - has 1 parameter region_code which returns provinces in that region.
-   `provincesByCode()` - has 1 parameter region_code which returns provinces in that region.
-   `provinceByName()` - has 1 parameter province_name which returns province.
-   `cities()` - has 1 parameter province_code which returns cities in that province.
-   `barangays()` - has 1 parameter city_code which returns barangays in that city.

```diff
- ✨ Screenshot
```

| React JS                                                                                                  | Vue JS                                                                                       |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ![App](https://github.com/isaacdarcilla/select-philippines-address/blob/main/demo/react/screenshot/1.PNG) | ![App](https://github.com/isaacdarcilla/select-philippines-address/blob/main/demo/vue/2.PNG) |

![](https://github.com/isaacdarcilla/select-philippines-address/blob/main/demo/react/screenshot/img.png)

### 🚀 NPM Link

https://www.npmjs.com/package/select-philippines-address

### 👨‍💻 Source Code.

-   [React JS](https://github.com/isaacdarcilla/select-philippines-address/tree/main/demo/react)
-   [Vue JS](https://github.com/isaacdarcilla/select-philippines-address/tree/main/demo/vue)
-   [Svelte JS (WIP)](https://github.com/isaacdarcilla/select-philippines-address/tree/main/demo/vue)

**Please fork or star for support.**

### 🔗 API.

[Philippines Addresses API](https://isaacdarcilla.github.io/philippine-addresses/)

### 🔖 License

[Apache-2.0](https://github.com/isaacdarcilla/select-philippines-address/blob/master/LICENSE)

### 🚀 Developers

[Isaac Arcilla](https://facebook.com/isaacdarcilla)
[]()
