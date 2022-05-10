import { useLocalStorage } from "../useLocalStorage";
import FormCheckBox from "../components/FormCheckBox"

const FormInputText = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
     <h1>localStorage with React hooks</h1>
     <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
      </form>

      <FormCheckBox />
      
    </>  
  );
};

export default FormInputText;
