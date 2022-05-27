import { useContext } from "react";
import { globalContext } from "../../context";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import postThunkAsync from "../../store/thunk";

const AddingForm = ({ id, type, placeholder, label }) => {
  const dispatch = useDispatch();
  const { inputsAttr, setInputsAttr } = useContext(globalContext);
  const remove = (id) => {
    setInputsAttr(inputsAttr.filter((input) => input.id != id));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(postThunkAsync(data.subinput,label))
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register("subinput", { required: true })}
      />
      <div className="bg-red-700 text-white p-2" onClick={() => remove(id)}>
        Remove last
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AddingForm;
