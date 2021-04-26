## **select-philippines-address@1.0.0**

`Select addresses in the Philippines using HTML select tag.`

```diff
- ✨ Installation
```

https://www.npmjs.com/package/select-philippines-address

> **npm i select-philippines-address --save**

```diff
- ✨ Usage
```

```js
const { regions, provinces, cities, barangays } = require('select-philippines-address');

regions().then((region) => console.log(region)); // returns all regions
provinces('01').then((province) => console.log(province)); // returns provinces base on region code
cities('0128').then((city) => console.log(city)); // returns cities base on province code
barangays('052011').then((barangays) => console.log(barangays)); // returns barangays base on city code
```

```diff
- ✨ Screenshot
```

![](https://github.com/isaacdarcilla/select-philippines-address/blob/main/demo/react/screenshot/img.png)

### 🔖 License
[Apache-2.0](https://github.com/isaacdarcilla/select-philippines-address/blob/master/LICENSE)


### 🚀 Developer
[Isaac Arcilla](https://facebook.com/isaacdarcilla)

