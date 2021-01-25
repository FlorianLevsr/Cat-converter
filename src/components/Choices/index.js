import PropTypes from "prop-types";
import './style.scss';

const Choices = ( { list, onObjectClick } ) => {

    return (

        <div className="choices">

            <div className="choices-title">Choix</div>

            <ul className="choices-list">

                {
                    list.map((item) => {
                        return (
                            <li key={item.name} className="choice" onClick={() => onObjectClick(item)}>{item.name} ({item.height})</li>
                        )
                    })
                }

            </ul>

        </div>


    )

};

Choices.propTypes = {

    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            height: PropTypes.string.isRequired,
            rate: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    onObjectClick: PropTypes.func.isRequired
    
};

export default Choices;