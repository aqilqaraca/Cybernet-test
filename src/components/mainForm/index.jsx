import { useForm } from "react-hook-form";
import { useContext } from "react";
import { globalContext } from "../../context";
const MainForm = () => {
  const { inputsAttr, setInputsAttr } = useContext(globalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setInputsAttr([
      ...inputsAttr,
      {
        id: Date.now(),
        label: data.label,
        type: data.type,
        placeholder: data.placeholder,
      },
    ]);
  };
  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mainForm-block">
          <label htmlFor="label">Label</label>
          <input
            defaultValue=""
            id="label"
            type="text"
            {...register("label", { required: true })}
          />
          <span className="error">
            {errors.label?.type === "required" && "*Label is required"}
          </span>
        </div>
        <div className="mainForm-block">
          <label htmlFor="placeholder">Placeholder</label>
          <input
            defaultValue=""
            id="placeholder"
            type="text"
            {...register("placeholder", { required: true })}
          />
          <span className="error">
            {errors.placeholder?.type === "required" && "*Label is required"}
          </span>
        </div>
        <div className="mainForm-block">
          <label htmlFor="type">Type</label>
          <select id="type" {...register("type", { required: true })}>
            <option value="input">Input</option>
            <option value="textarea">Textarea</option>
            <option value="textarea">Textarea</option>
            <option value="date">Datepicker</option>
            <option value="email">Email</option>
          </select>
          <span className="error">
            {errors.type?.type === "required" && "*Label is required"}
          </span>
        </div>
        <button className="outline-none bg-indigo-400 text-white p-3">
          Add to Form
        </button>
      </form>
    </div>
  );
};

export default MainForm;
