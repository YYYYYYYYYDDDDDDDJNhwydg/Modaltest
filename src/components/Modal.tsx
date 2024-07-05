import React, { useState, useEffect } from 'react';

interface ModalData {
    title: string;
    content: string;
}

const Modal: React.FC<ModalData> = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [modalData, setModalData] = useState<ModalData | null>(null);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => setIsModalOpen(true), 10);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setIsModalVisible(false), 500);
    };

    const fetchModalData = async () => {
        // Simulate an API call
        const data: ModalData = await new Promise((resolve) =>
            setTimeout(
                () => resolve({ title: 'Modal Title', content: 'Some content for the modal...' }),
                2000,
            ),
        );
        setModalData(data);
    };
    
    useEffect(() => {
        if (isModalOpen) {
            fetchModalData();
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);


    return (
        <div>
            <h1>Welcome to the App</h1>
            <button onClick={openModal}>Open Modal</button>

            {isModalOpen && (
                <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
                    <div className={`modal-content ${isModalOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                        {modalData ? (
                            <>
                                <h2>{modalData.title}</h2>
                                <p>{modalData.content}</p>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                        <button className='close-button' onClick={closeModal}>&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
