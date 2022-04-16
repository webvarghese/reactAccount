import { Routes, Route } from "react-router-dom";
import Table from "./Table";

import Tab from "./Tab";

function RightPanel() {
  return (
    <div>
      <Tab />
      <Routes>
        <Route path="/some" element={<Table text="Some Text" />} />
        <Route path="/somemore" element={<Table text="Some More Text" />} />
      </Routes>
    </div>
  );
}

export default RightPanel;
