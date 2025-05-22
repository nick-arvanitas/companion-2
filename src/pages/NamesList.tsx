import { useEffect, useState } from 'react';

interface NamesListProps {
  onCompanyClick: (companyId: string) => void;
}

export default function NamesList({ onCompanyClick }: NamesListProps) {
//   const [names, setNames] = useState<string[]>([]);

//   useEffect(() => {
//     // Initial fetch of names
//     chrome.runtime.sendMessage({ type: 'GET_NAMES' }, (response: { names: string[] }) => {
//       if (response?.names) {
//         setNames(response.names);
//       }
//     });

//     // Listen for name updates
//     const messageListener = (message: { type: string; payload: string[] }) => {
//       if (message.type === 'NAMES_FOUND') {
//         setNames(message.payload);
//       }
//     };

//     chrome.runtime.onMessage.addListener(messageListener);

//     // Cleanup listener on unmount
//     return () => {
//       chrome.runtime.onMessage.removeListener(messageListener);
//     };
//   }, []);

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
