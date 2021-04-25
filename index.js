const axios = require('axios');


// Returns all regions
// @param NULL

const regions = async () => {
    try {
        const regions = await axios.get(
            'https://isaacdarcilla.github.io/philippine-addresses/region.json'
        );
        return regions.data.map((region) => {
            return {
                id: region.id,
                psgc_code: region.psgc_code,
                region_name: region.region_name,
                region_code: region.region_code
            };
        })
    } catch (e) {
        return e.message;
    }
};

// Returns all provinces base on region code parameter.
// @param REGION CODE

const provinces = async (code) => {
    try {
        const provinces = await axios.get(
            'https://isaacdarcilla.github.io/philippine-addresses/province.json'
        );
        return provinces.data.filter(province => province.region_code === code)
            .map((filtered) => {
                return {
                    psgc_code: filtered.psgc_code,
                    province_name: filtered.province_name,
                    province_code: filtered.province_code,
                    region_code: filtered.region_code
                };
            });
    } catch (e) {
        return e.message;
    }
};

// Returns all cities base on province code parameter.
// @param PROVINCE CODE

const cities = async (code) => {
    try {
        const cities = await axios.get(
            'https://isaacdarcilla.github.io/philippine-addresses/city.json'
        );
        return cities.data.filter(city => city.province_code === code)
            .map((filtered) => {
                return {
                    city_name: filtered.city_name,
                    city_code: filtered.city_code,
                    province_code: filtered.province_code,
                    region_desc: filtered.region_desc,
                };
            });
    } catch (e) {
        return e.message;
    }
};

// Returns all barangays base on city code parameter.
// @param CITY CODE

const barangays = async (code) => {
    try {
        const barangays = await axios.get(
            'https://isaacdarcilla.github.io/philippine-addresses/barangay.json'
        );
        return barangays.data.filter(barangay => barangay.city_code === code)
            .map((filtered) => {
                return {
                    brgy_name: filtered.brgy_name,
                    brgy_code: filtered.brgy_code,
                    province_code: filtered.province_code,
                    region_code: filtered.region_code,
                };
            });
    } catch (e) {
        return e.message;
    }
};

// barangays('052011').then((barangays) => console.log(barangays));

module.exports = { regions, provinces, cities, barangays };