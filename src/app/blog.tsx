"use client"
import React, { useState } from 'react';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaPlus, FaMinus } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { SketchPicker } from 'react-color';


const BlogTypingSection = () => {
  const [text, setText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [fontSize, setFontSize] = useState(12);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTextSelect = () => {
    const selection = window.getSelection();
    setSelectedText(selection ? selection.toString() : '');
  };

  const applyFormatting = (format: string) => {
    const textarea = document.getElementById('blog-textarea') as HTMLTextAreaElement;
    const start = textarea?.selectionStart ?? 0;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    let formattedText = '';

    switch (format) {
      case 'bold':
        formattedText = `<strong>${selectedText}</strong>`;
        setIsBold(!isBold);
        break;
      case 'italic':
        formattedText = `<em>${selectedText}</em>`;
        setIsItalic(!isItalic);
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        setIsUnderline(!isUnderline);
        break;
      case 'strikethrough':
        formattedText = `<del>${selectedText}</del>`;
        setIsStrikethrough(!isStrikethrough);
        break;
      default:
        break;
    }

    const newText = text.substring(0, start) + formattedText + text.substring(end);
    setText(newText);
  };

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 1);
  };

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  const handleColorChange = (color: any) => {
    setTextColor(color.hex);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => applyFormatting('bold')}
              className={`p-2 rounded ${isBold ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition-colors`}
              aria-label="Bold"
            >
              <FaBold className="text-white" />
            </button>
            <button
              onClick={() => applyFormatting('italic')}
              className={`p-2 rounded ${isItalic ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition-colors`}
              aria-label="Italic"
            >
              <FaItalic className="text-white" />
            </button>
            <button
              onClick={() => applyFormatting('underline')}
              className={`p-2 rounded ${isUnderline ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition-colors`}
              aria-label="Underline"
            >
              <FaUnderline className="text-white" />
            </button>
            <button
              onClick={() => applyFormatting('strikethrough')}
              className={`p-2 rounded ${isStrikethrough ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition-colors`}
              aria-label="Strikethrough"
            >
              <FaStrikethrough className="text-white" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="p-2 rounded bg-gray-700 hover:bg-blue-500 transition-colors"
              aria-label="Decrease font size"
            >
              <FaMinus className="text-white" />
            </button>
            <span className="text-white">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="p-2 rounded bg-gray-700 hover:bg-blue-500 transition-colors"
              aria-label="Increase font size"
            >
              <FaPlus className="text-white" />
            </button>
          </div>
          <div className="relative">
            <select
              value={fontFamily}
              onChange={handleFontFamilyChange}
              className="appearance-none bg-gray-700 text-white py-2 pl-3 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 transition-colors"
            >
              <option>Arial</option>
              <option>Times New Roman</option>
              <option>Courier New</option>
              <option>Georgia</option>
              <option>Verdana</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <RiArrowDropDownLine className="h-5 w-5" />
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="w-8 h-8 rounded"
              style={{ backgroundColor: textColor }}
              aria-label="Select text color"
            ></button>
            {showColorPicker && (
              <div className="absolute z-10 mt-2">
                <SketchPicker color={textColor} onChange={handleColorChange} />
              </div>
            )}
          </div>
        </div>
        <textarea
          id="blog-textarea"
          value={text}
          onChange={handleTextChange}
          onSelect={handleTextSelect}
          className="w-full h-64 p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          style={{ fontSize: `${fontSize}px`, fontFamily, color: textColor }}
          placeholder="Start typing your blog post..."
        ></textarea>
        <div className="text-white">
          <h3 className="text-xl font-bold mb-2">Preview:</h3>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: text }}
            style={{ fontSize: `${fontSize}px`, fontFamily, color: textColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogTypingSection;