import React from "react";
import Header from "src/components/Header/Header.js";
import Footer from "src/components/Footer/Footer.js";
import CalendarDates from "src/components/Home/Calendar.js";
import Sponsors from "src/components/Home/Sponsors.js";
import Schedule from "src/components/Home/Schedule.js";
import CountdownTimer from "src/components/Home/Timer.js";
import MainTitle from "src/components/Home/MainTitle.js";

const Home = () => {
  const startDate = new Date(2023, 10, 25);
  const endDate = new Date(2023, 10, 27);
  const startTime = new Date(2023, 10, 25, 11);
  const endTime = new Date(2023, 10, 26, 11);
  const timerActive = true;

  const events = [
    {
      time: "8:30 h - 25 de novembre",
      title: "Inici del check-in",
    },
    {
      time: "10:00 h - 25 de novembre",
      title: "Cerimònia d'obertura",
    },
    {
      time: "11:00 h - 25 de novembre",
      title: "Começa el temps de hacking",
    },
    {
      time: "15:00 h - 25 de novembre",
      title: "Finalitza el check-in",
    },
    {
      time: "11:00 h - 26 de novembre",
      title: "Finalitza el temps de hacking",
    },
    {
      time: "11:30 h - 26 de novembre",
      title: "Presentacions dels projectes",
    },
    {
      time: "14:00 h - 26 de novembre",
      title: "Cerimònia de cloenda i entrega de premis",
    },
  ];

  return (
    <div>
      <Header />
      <MainTitle />
      <CountdownTimer
        startTime={startTime}
        endTime={endTime}
        timerActive={timerActive}
      />
      <CalendarDates startDate={startDate} endDate={endDate} />
      <Schedule events={events} />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
