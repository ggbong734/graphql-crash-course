import React from "react";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects></Projects>
      <hr />
      <Clients></Clients>
    </>
  );
}
