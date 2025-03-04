import { Input } from "@/components";
import "./styles.scss";
import { useState } from "react";

function SecondView() {
  const [teste, setTeste] = useState<string>("");
  function handleSubmit() {
    console.log("foi");
  }
  return (
    <div className="second-view-container">
      <Input
        searchValue={teste}
        onSearchValue={setTeste}
        onSubmit={handleSubmit}
        debounceTime={750}
        cleanAfterSubmit={false}
        minCharacters={3}
        isToggle={false}
      />
      <Input
        searchValue={teste}
        onSearchValue={setTeste}
        onSubmit={handleSubmit}
        debounceTime={1000}
        cleanAfterSubmit={true}
        minCharacters={3}
        isToggle={true}
        closeAfterSubmit={true}
      />
      <h1>SecondView Component</h1>
    </div>
  );
}
export { SecondView };
