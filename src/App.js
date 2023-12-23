import logo from './logo.svg';
import './App.css';
import CalendarWrapper from "./component/calendar/CalendarWrapper";
import ModalWrapper from "./component/modal/ModalWrapper";
import {useState} from "react";
import Sidebar from "./component/sidebar/Sidebar";
import NavbarWrapper from "./component/navbar/NavbarWrapper";

function App() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expanded, setExpanded] = useState(true);

    const handleCalendarClick = (date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedDate(null);
        setIsModalOpen(false);
    };

    const handleSidebarToggle = () => {
        setExpanded(!expanded);
    };


    return (
    <div className="App">
        <div className="flex flex-col">
            <div className="">
                <NavbarWrapper/>
            </div>
            <div className="flex flex-row">
                <div className={`${expanded ? 'basis-1/6' : ''}`}>
                    <Sidebar onToggleClick={handleSidebarToggle} expanded={expanded}/>
                </div>
                <div className={`${expanded ? 'basis-5/6' : ''}`}>
                    <CalendarWrapper onCalendarClick={handleCalendarClick}/>
                    <ModalWrapper isOpen={isModalOpen} onClose={handleCloseModal} selectedDate={selectedDate}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;
