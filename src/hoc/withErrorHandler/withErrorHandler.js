import Aux from './../Auxiliar';
import Modal from './../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent,axios) =>{
    return (props) => (
        <Aux>
            <Modal showModal>Something went grong!</Modal>
            <WrapperComponent {...props} />
        </Aux>
    );
}

export default withErrorHandler;