import React, { FC } from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import { Container, Toast } from "./styles";

const ToastContainer: FC = () => {

    return (
        <Container>
            <Toast hasDescription>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Toast works!</strong>
                    <p>Deu um ruim ai.</p>
                </div>
                
                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>
            <Toast type="success" hasDescription={false}>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Toast works!</strong>
                </div>
                
                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>
            <Toast hasDescription type="danger">
                <FiAlertCircle size={20} />

                <div>
                    <strong>Toast works!</strong>
                    <p>Deu um ruim ai.</p>
                </div>
                
                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>
        </Container>
    );
}

export default ToastContainer;