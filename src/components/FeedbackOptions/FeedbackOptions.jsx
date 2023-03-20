import PropTypes from 'prop-types';
import style from './feedbackOptions.module.scss';

const ButtonList = ({ onLeaveFeedback, options }) => {
    return (<>
                <ul className={style.list}>
                    
                    {options.map((grade, index) => {
                        return (<li key={index} className={style.item}>
                            <button type="button" className={style.button} onClick={() => onLeaveFeedback(grade)}>{grade[0].toUpperCase()+grade.slice(1)}</button>
                        </li>)
                    })}

                </ul>
            </>)
}

ButtonList.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array,
}

export default ButtonList;