/* eslint-disable react/no-direct-mutation-state */

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import { orderByName, selectAllRegions, setFilters } from "../../features/products/productsSlice";

const Filters = () => {
    const dispatch = useAppDispatch()
    const regions = useSelector(selectAllRegions)
    function handleFilters(e) {
        const { value, name } = e.target;
        dispatch(setFilters({ [name]: value }));
    }
    function handleSort(e) {
        dispatch(orderByName(e.target.value))
    }
    const vintage = [
        "2010-Present",
        "2000-2009",
        "1990-1999",
        "1980-1989",
        "1970-1979",
        "1960-1969",
        "1959-Older",
    ]
    const scores = [
        "100",
        "99-97",
        "96-94",
        "93-91",
        "90-Under"
    ]

    return (
        <div className="w-full inline-flex justify-around text-gray-600 pt-6">
            <select onChange={e => handleSort(e)} className="bg-transparent">
                <option disabled selected>Sort</option>
                <option className="" value="atoz">A - Z</option>
                <option className="" value="ztoa">Z - A</option>
            </select>
            <select id="filter-price" name="price" className="bg-transparent" onChange={handleFilters}>
                <option disabled selected>Price</option>
                <option value="all-price">ALL</option>
                <option value="100-200">$100 - $200</option>
                <option value="50-99">$50 - $99</option>
                <option value="30-49">$30 - $49</option>
                <option value="20-29">$20 - $29</option>
                <option value="16-19">$16 - $19</option>
                <option value="10-15">$10 - $15</option>
                <option value="6-9">$6 - $9</option>
            </select>
            {regions.length > 0 &&
                <select id="region" className="bg-transparent" name="region" onChange={handleFilters}>
                    <option disabled selected>Regions</option>
                    <option value="all-region">ALL</option>
                    {regions.map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            }
            <select id="filter-vintage" name="vintage" className="bg-transparent" onChange={handleFilters} >
                <option disabled selected>Vintage</option>
                <option value="all-vintage">ALL</option>
                {vintage.map((v, index) => (
                    <option value={v} key={index}>
                        {v}
                    </option>
                ))}
            </select>
            <select id="filter-score" name="score" className="bg-transparent" onChange={handleFilters}>
                <option disabled selected>Score</option>
                <option value="all-score">ALL</option>
                {scores.map((score, index) => (
                    <option value={score} key={index} >
                        {score}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Filters