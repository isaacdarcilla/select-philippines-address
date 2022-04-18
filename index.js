const axios = require('axios');

const fetch = (jsonPathName) => axios.get(`https://isaacdarcilla.github.io/philippine-addresses/${jsonPathName}.json`);

/**
 * @param NULL
 * @returns all regions
 */
const regions = async () => {
    try {
        const regions = await fetch('region');
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

/**
 * @param REGION_CODE
 * @returns region base on region code parameter.
 */
const regionByCode = async (code) => {
    try {
        const regions = await fetch('region');
        return regions.data.find( ({region_code}) => region_code === code)
    } catch (e) {
        return e.message;
    }
};

/** Default
 * @param REGION_CODE
 * @returns all provinces base on region code parameter.
 */
const provinces = async (code) => {
    try {
        const provinces = await fetch('province');
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

/**
 * @param REGION_CODE
 * @returns all provinces base on region code parameter.
 */
const provincesByCode = async (code) => {
    try {
        const provinces = await fetch('province');
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

/**
 * @param PROVINCE_NAME
 * @returns province base on province name parameter.
 */
const provinceByName = async (name) => {
    try {
        const provinces = await fetch('province');
        return provinces.data.find( ({province_name}) => province_name === name)
    } catch (e) {
        return e.message;
    }
};

/**
 * @param PROVINCE_CODE
 * @returns all cities base on province code parameter.
 */
const cities = async (code) => {
    try {
        const cities = await fetch('city');
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

/**
 * @param CITY_CODE
 * @returns all barangays base on city code parameter.
 */
const barangays = async (code) => {
    try {
        const barangays = await fetch('barangay')
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

module.exports = { regions, regionByCode, provinces, provincesByCode, provinceByName, cities, barangays };