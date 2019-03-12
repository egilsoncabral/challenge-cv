import React from 'react'
import '../assets/css/menu.css'
import PropTypes from 'prop-types';

const Menu = ({ filterByCategorie }) => {

        return (
        <div>
            <div>
                <select id="topMenu" className="selectMenu" onChange={(event) => filterByCategorie(event.target.value)} tabIndex="0">
                    <option value="newstories" aria-label="News Stories" defaultValue>New</option>
                    <option value="askstories" aria-label="Asks Stories">Ask</option>
                    <option value="showstories" aria-label="Show Stories">Show</option>
                    <option value="jobstories" aria-label="Job Stories">Jobs</option>
                </select>
            </div>
        </div>
        )

}
Menu.propTypes ={
    filterByCategorie: PropTypes.func.isRequired,
};

export default Menu