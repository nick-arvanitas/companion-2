export default function CompanyDetailPage() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-2">Extracted Names</h1>
      <ul className="list-disc pl-5">
        {/* {names.map((name, idx) => (
          <li 
            key={idx}
            onClick={() => onCompanyClick(name)}
            className="cursor-pointer hover:text-blue-500 transition-colors"
          >
            {name}
          </li>
        ))} */}
      </ul>
    </div>
  );
}
