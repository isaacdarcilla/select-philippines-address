import './App.css';
import {regions, provinces, cities, barangays} from 'select-philippines-address';
import {useEffect, useState} from "react";

const App = () => {
    const [regionData, setRegion] = useState([]);
    const [provinceData, setProvince] = useState([]);
    const [cityData, setCity] = useState([]);
    const [barangayData, setBarangay] = useState([]);

    const [regionAddr, setRegionAddr] = useState("");
    const [provinceAddr, setProvinceAddr] = useState("");
    const [cityAddr, setCityAddr] = useState("");
    const [barangayAddr, setBarangayAddr] = useState("");

    const region = () => {
        regions().then(response => {
            setRegion(response);
        });
    }

    const province = (e) => {
        setRegionAddr(e.target.selectedOptions[0].text);
        provinces(e.target.value).then(response => {
            setProvince(response);
            setCity([]);
            setBarangay([]);
        });
    }

    const city = (e) => {
        setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then(response => {
            setCity(response);
        });
    }

    const barangay = (e) => {
        setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then(response => {
            setBarangay(response);
        });
    }

    const brgy = (e) => {
        setBarangayAddr(e.target.selectedOptions[0].text);
    }

    useEffect(() => {
        region()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>REACT JS</h1>
                <h4>select-philippines-address demo</h4>
                <select onChange={province} onSelect={region}>
                    <option disabled>Select Region</option>
                    {
                        regionData && regionData.length > 0 && regionData.map((item) => <option
                            key={item.region_code} value={item.region_code}>{item.region_name}</option>)
                    }
                </select><br/>
                <select onChange={city}>
                    <option disabled>Select Province</option>
                    {
                        provinceData && provinceData.length > 0 && provinceData.map((item) => <option
                            key={item.province_code} value={item.province_code}>{item.province_name}</option>)
                    }
                </select><br/>
                <select onChange={barangay}>
                    <option disabled>Select City</option>
                    {
                        cityData && cityData.length > 0 && cityData.map((item) => <option
                            key={item.city_code} value={item.city_code}>{item.city_name}</option>)
                    }
                </select><br/>
                <select onChange={brgy}>
                    <option disabled>Select Barangay</option>
                    {
                        barangayData && barangayData.length > 0 && barangayData.map((item) => <option
                            key={item.brgy_code} value={item.brgy_code}>{item.brgy_name}</option>)
                    }
                </select>
                <p>Address</p>
                 {barangayAddr}, {cityAddr}, {provinceAddr}, {regionAddr}
            </header>
        </div>
    );
}

export default App;
