import { useLocalStorage } from "../useLocalStorage";

const FormCheckBox = () => {
  const [name, setName] = useLocalStorage("name2", "");
  const [checked, setChecked] = useLocalStorage("checked", false);

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>Not a robot?</span>        
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default FormCheckBox;
