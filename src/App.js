import logo from './logo.svg';
import './App.css';
import CalendarWrapper from "./component/calendar/CalendarWrapper";
import ModalWrapper from "./component/modal/ModalWrapper";
import {useState} from "react";
import Sidebar from "./component/sidebar/Sidebar";

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
    <div className="App flex flex-row">
        <div className="basis-1/6">
            <Sidebar/>
        </div>
        <div className="basis-5/6">
            <CalendarWrapper onCalendarClick={handleCalendarClick}/>
            <ModalWrapper isOpen={isModalOpen} onClose={handleCloseModal} selectedDate={selectedDate}/>
        </div>
    </div>
  );
}

export default App;
