import React, { useState } from 'react';
import IconPicker from './components/IconPicker';
import * as feather from 'feather-icons';

const App = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('');

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
    setIsPickerOpen(false);
  };

  const handleCancel = () => {
    setIsPickerOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-5 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Icon Picker</h1>
      <div
        className="w-24 h-24 border border-gray-300 flex items-center justify-center cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-lg mb-6"
        onClick={() => setIsPickerOpen(true)}
      >
        {selectedIcon ? <i dangerouslySetInnerHTML={{ __html: feather.icons[selectedIcon].toSvg() }} /> : 'Select Icon'}
      </div>

      {isPickerOpen && (
        <div className="flex justify-center w-full">
          <IconPicker
            rowsInOnePage={5}
            columnsInOnePage={5}
            iconHeight={75}
            iconWidth={80}
            pickerHeight="500px"
            pickerWidth="500px"
            onSelectIcon={handleIconSelect}
            onCancel={handleCancel}
          />
        </div>
      )}
    </div>
  );
};

export default App;
