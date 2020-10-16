import React, { useState } from "react";
import NavBar from "./components/navbar.jsx";
import "./App.css";
import Counters from "./components/counters.jsx";

const App = () => {
  const counterDefaultVal = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];

  const [counters, setCounter] = useState(counterDefaultVal);
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrement = (counter) => {
    let tCount = totalCount !== 0 ? totalCount : getInitialTotalValue();
    const index = counters.indexOf(counter);
    counters[index].value++;
    tCount++;
    setCounter(counters);
    setTotalCount(tCount);
  };

  const handleDecrement = (counter) => {
    let tCount = totalCount !== 0 ? totalCount : getInitialTotalValue();
    const index = counters.indexOf(counter);
    if (counters[index].value !== 0) {
      counters[index].value--;
      tCount--;
    }
    setCounter(counters);
    setTotalCount(tCount);
  };

  const handleDelete = (counterId) => {
    console.log("Delete method called from child component id = " + counterId);
    let countersLocal = counters.filter((c) => c.id !== counterId);
    let counter = counters.filter((c) => c.id === counterId);
    let tCount = totalCount !== 0 ? totalCount : getInitialTotalValue();
    tCount -= counter[0].value;
    setCounter(countersLocal);
    setTotalCount(tCount);
  };

  const handleReset = () => {
    counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setCounter(counters);
    setTotalCount(0);
  };

  const getInitialTotalValue = () => {
    let tCount = totalCount;
    counters.map((counter) => {
      tCount += counter.value;
      return counter;
    });
    return tCount;
  };

  return (
    <React.Fragment>
      <NavBar
        totalCounters={counters.filter((c) => c.value > 0).length}
        totalValue={totalCount}
        initCountValue={getInitialTotalValue()}
      />
      <main className="container-fluid">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
