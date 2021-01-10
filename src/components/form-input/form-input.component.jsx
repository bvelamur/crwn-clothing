import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' 
            onChange={handleChange} 
            {...otherProps} 
        />
        {
            // whenever the user has typed in anything, shrink
            // mainly for browsers that have auto-complete
            label ?
            (<label className={`${otherProps.value.length ? 'shrink': null} form-input-label`}>
                    {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput;