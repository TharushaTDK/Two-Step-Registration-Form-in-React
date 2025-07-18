const TextInput = ({ label, name, value, onChange, error, type = 'text' }) => (
    <div className="mb-4">
        <label className="block text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full p-3 rounded-full border ${error ? 'border-red-500' : 'border-gray-300'} bg-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

export default TextInput;
