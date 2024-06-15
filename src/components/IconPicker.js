import React, { useState, useEffect } from 'react';
import * as feather from 'feather-icons';

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = '500px',
  pickerWidth = '500px',
  onSelectIcon,
  onCancel
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const iconList = Object.keys(feather.icons);
    setIcons(iconList);
  }, []);

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(icons.length / iconsPerPage);

  const handleIconClick = (iconName) => {
    onSelectIcon(iconName);
  };

  return (
    <div className="border border-gray-300 overflow-hidden relative bg-gray-50 rounded-lg shadow-lg" style={{ width: pickerWidth, height: pickerHeight }}>
      <div className="grid gap-2 p-5" style={{ gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`, gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)` }}>
        {icons.slice(currentPage * iconsPerPage, (currentPage + 1) * iconsPerPage).map((iconName) => (
          <div key={iconName} className="flex items-center justify-center cursor-pointer border border-gray-200 rounded hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:shadow-md" onClick={() => handleIconClick(iconName)}>
            <i className="text-gray-700" dangerouslySetInnerHTML={{ __html: feather.icons[iconName].toSvg() }} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 w-full text-center flex justify-center items-center">
        
        <button className="bg-blue-500 text-white py-2 px-4 mx-2 rounded hover:bg-blue-600" disabled={currentPage <= 0} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <span className="text-lg"> {currentPage + 1} of {totalPages}</span>
        <button className="bg-blue-500 text-white py-2 px-4 mx-2 rounded hover:bg-blue-600" disabled={currentPage >= totalPages - 1} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        <button className="bg-red-500 text-white py-2 px-4 mx-2 rounded hover:bg-red-600" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default IconPicker;
