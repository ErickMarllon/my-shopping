import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./styles.scss";
import { InputProps } from "./types";
import { useEnterKey } from "@/hooks/useEnterKey";
import { Icon } from "../Icon";
import { useDebouncedCallback } from "use-debounce";
import { useToggle } from "@/hooks/useToggle";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useConditionalString } from "@/hooks/useConditionalString";

const CLASSNAME_INPUT_ACTIVE = "active";
const DEBOUNCE_TIME = 0;
const MIN_CHARACTERS = 3;

function Input({
  searchValue,
  onSearchValue,
  onSubmit,
  cleanAfterSubmit = false,
  closeAfterSubmit = false,
  debounceTime = DEBOUNCE_TIME,
  minCharacters = MIN_CHARACTERS,
  isToggle = false,
}: InputProps) {
  const [search, setSearch] = useState<string>(searchValue);
  const [showInput, onShowInput] = useToggle();

  const conditionsShowInput = [!isToggle, isToggle && showInput, false];

  const [isVisibleInput] = useConditionalString({
    conditions: conditionsShowInput,
    defaultMessage: CLASSNAME_INPUT_ACTIVE,
  });
  const { handleKeyDown } = useEnterKey(handleSubmit);
  const debounce = useDebouncedCallback(handleSubmit, debounceTime);

  const [inputRef] = useOutsideClick<HTMLDivElement>(() => {
    if (showInput) {
      onShowInput();
    }
  });

  function handleClean() {
    setSearch("");
    onSearchValue("");

    if (isToggle) {
      if (showInput) {
        onShowInput();
      }
    }
  }

  function handleSubmit() {
    if (search && search.length >= minCharacters - 1) onSubmit();

    if (isToggle && closeAfterSubmit && showInput) {
      onShowInput();
    }

    if (cleanAfterSubmit) {
      handleClean();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    if (search && search.length >= minCharacters - 1) {
      onSearchValue(value);
      debounce();
    }
  }

  function handleToggle() {
    if (isToggle && !showInput) {
      onShowInput();
    }
  }

  return (
    <InputGroup
      className={`search-input-group ${isVisibleInput}`}
      onClick={() => handleToggle()}
      ref={inputRef}
    >
      <InputGroup.Text
        className={`search-input-text ${isVisibleInput}`}
        onClick={() => {
          handleSubmit();
        }}
        onKeyDown={handleKeyDown}
      >
        <Icon name="SearchRounded" />
      </InputGroup.Text>

      <Form.Control
        type="text"
        placeholder="Buscar..."
        className={`search-input ${isVisibleInput}`}
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <Icon
        name="CloseRounded"
        className={`close-icon ${isVisibleInput}`}
        onClick={() => handleClean()}
      />
    </InputGroup>
  );
}

export { Input };
