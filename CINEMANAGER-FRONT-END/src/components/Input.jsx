
function Input({name, type, placeholder, onChange, className, value}) {
    return (
        <div className="">
            <input value={value} name={name} type={type} placeholder={placeholder} onChange={onChange}
                   className={`py-4 px-3 bg-black placeholder:text-gray-200 border border-1 border-gray-200 rounded w-[100%] text-white font-serif font-medium placeholder:px-4  ${className}`} />
        </div>
    );
}

export default Input;