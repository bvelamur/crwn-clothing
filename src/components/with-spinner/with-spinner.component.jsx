import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles'

// This is a higher order component
const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
}

export default WithSpinner;