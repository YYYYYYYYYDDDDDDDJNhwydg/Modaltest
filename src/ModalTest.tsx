import React, { useState, useEffect } from 'react';
import './ModalTest.css';

function ModalTestbroke() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const fetchModalData = async () => {
    // Simulate an API call
    const data = await new Promise((resolve) =>
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
  }, [isModalOpen]);

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal-content' onClick={(e: any) => e.stopPropagation()}>
            {modalData ? (
              <>
                <h2>{modalData.title}</h2>
                <p>{modalData.content}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
            <button onClick={closeModal}>Close Modal</button>
            <button onClick={openModal}>Open Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalTestbroke;
