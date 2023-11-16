export default function SelectComponent({
  label,
  value,
  onChange,
  Options = [],
}) {
  return (
    <div className="relative">
      <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-grey-600 bg-white">
        {label}
      </p>
      <select
        value={value}
        onChange={onChange}
        className="border placeholder-grey-400 focus:outline-none focus:boder-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white boder-grey-300 rounded-md"
      >
        {Options && Options.length ? (
          Options.map((optionItem) => <option id={optionItem.id} value={optionItem.id} key={optionItem.id}>{optionItem.label}</option>)
        ) : (
          <option id="" value={" "}>
            Select
          </option>
        )}
      </select>
    </div>
  );
}
