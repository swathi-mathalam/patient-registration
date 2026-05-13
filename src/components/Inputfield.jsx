const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  required,
  min,
  maxLength,
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">
        {label}
        {required && (
          <span className="text-red-500"> *</span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onInput={(e) => {
          if (
            name === "phone" ||
            name === "emergencyContact"
          ) {
            e.target.value =
              e.target.value.replace(
                /[^0-9]/g,
                ""
              );
          }
        }}
        min={min}
        maxLength={maxLength}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;