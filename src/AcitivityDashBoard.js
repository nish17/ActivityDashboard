import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Activity from './Activity';
import './App.css';
import getData from './api';

Modal.setAppElement('#root');

const ModalStyles = {
  overlay: {
    backgroundColor: '#282c3',
  },
  content: {
    top: '5%',
    left: '5%',
    right: '5%',
    bottom: '5%',
  },
};

const AcitivityDashBoard = () => {
  const [data, setData] = useState({ receivedData: [], hasErrors: false });
  const [isLoading, setIsLoading] = useState(false);
  const [openTheModal, setOpenTheModal] = useState({
    isOpen: false,
    dataToShow: -1,
  });
  const [showData, setShowData] = useState([]);

  function setModalData() {
    setIsLoading(true);
    setShowData(data.receivedData[openTheModal.dataToShow]);
    setIsLoading(false);
  }

  useEffect(() => {
    getData(setData, setIsLoading);
  }, []);

  return (
    <div>
      <h2 className='heading-1'>All Users</h2>
      {isLoading && (
        <div>
          Loading...
          <hr /> Please Wait!
        </div>
      )}

      {!isLoading && (
        <div>
          {data.receivedData.map((d, i) => (
            <div key={i}>
              <span
                className='Activity-user-list'
                onClick={() => {
                  setOpenTheModal({ isOpen: true, dataToShow: i });
                }}
              >
                <p>{d.real_name}</p>
              </span>
            </div>
          ))}

          <Modal
            isOpen={openTheModal.isOpen}
            onAfterOpen={setModalData}
            onRequestClose={() =>
              setOpenTheModal({ ...openTheModal, isOpen: false })
            }
            aria={{
              labelledby: 'heading',
              describedby: 'full_description',
            }}
            style={ModalStyles}
          >
            {showData.id && <Activity data={showData} />}
            <div className='btn-tr'>
              <div
                className='x spin large'
                onClick={() => setOpenTheModal(false)}
              >
                <b></b>
                <b></b>
                <b></b>
                <b></b>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default AcitivityDashBoard;
