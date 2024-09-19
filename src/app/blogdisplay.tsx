// "use client"
// import React, { useState } from 'react';
// import { FaTimes, FaBold, FaItalic, FaUnderline } from 'react-icons/fa';
// import { MdFormatColorText, MdFormatSize } from 'react-icons/md';

// const BlogDisplay = () => {
//   const [blogContent, setBlogContent] = useState(
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   );
//   const [textStyle, setTextStyle] = useState({
//     fontWeight: 'normal',
//     fontStyle: 'normal',
//     textDecoration: 'none',
//     color: 'white',
//     fontSize: '16px'
//   });

//   const handleFormatChange = (property: string, value: string) => {
//     setTextStyle(prevStyle => ({ ...prevStyle, [property]: value }));
//   };

//   const handleClose = () => {
//     console.log('Close button clicked');
//     // Add your close functionality here
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col justify-between">
//       <div className="max-w-3xl mx-auto w-full">
//         <h1 className="text-4xl font-bold mb-8">Blog Title</h1>
//         <div className="mb-6 flex flex-wrap gap-2">
//           <button
//             onClick={() => handleFormatChange('fontWeight', textStyle.fontWeight === 'bold' ? 'normal' : 'bold')}
//             className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
//             aria-label="Toggle Bold"
//           >
//             <FaBold />
//           </button>
//           <button
//             onClick={() => handleFormatChange('fontStyle', textStyle.fontStyle === 'italic' ? 'normal' : 'italic')}
//             className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
//             aria-label="Toggle Italic"
//           >
//             <FaItalic />
//           </button>
//           <button
//             onClick={() => handleFormatChange('textDecoration', textStyle.textDecoration === 'underline' ? 'none' : 'underline')}
//             className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
//             aria-label="Toggle Underline"
//           >
//             <FaUnderline />
//           </button>
//           <button
//             onClick={() => handleFormatChange('color', textStyle.color === 'white' ? '#FFA500' : 'white')}
//             className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
//             aria-label="Change Text Color"
//           >
//             <MdFormatColorText />
//           </button>
//           <button
//             onClick={() => handleFormatChange('fontSize', textStyle.fontSize === '16px' ? '18px' : '16px')}
//             className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
//             aria-label="Change Font Size"
//           >
//             <MdFormatSize />
//           </button>
//         </div>
//         <div 
//           className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 transition-all duration-300 ease-in-out"
//           style={textStyle}
//         >
//           {blogContent}
//         </div>
//         <img 
//           src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
//           alt="Person typing on a laptop"
//           className="w-full h-64 object-cover rounded-lg mb-8"
//         />
//       </div>
//       <div className="flex justify-center">
//         <button
//           onClick={handleClose}
//           className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//           aria-label="Close"
//         >
//           <FaTimes className="mr-2 inline-block" /> Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogDisplay;
