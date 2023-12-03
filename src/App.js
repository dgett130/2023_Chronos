import logo from './logo.svg';
import './App.css';
import CalendarWrapper from "./component/CalendarWrapper";
import ModalWrapper from "./component/modal/ModalWrapper";
import {useState} from "react";

function App() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCalendarClick = (date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedDate(null);
        setIsModalOpen(false);
    };


    return (
    <div className="App">
     <CalendarWrapper onCalendarClick={handleCalendarClick}/>
     <ModalWrapper isOpen={isModalOpen} onClose={handleCloseModal} selectedDate={selectedDate}/>
    </div>
  );
}

export default App;
