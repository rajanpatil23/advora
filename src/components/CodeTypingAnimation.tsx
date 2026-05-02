import { useState, useEffect } from 'react';

const codeLines = [
  { text: 'const', type: 'keyword' },
  { text: ' App', type: 'function' },
  { text: ' = ', type: 'normal' },
  { text: '() ', type: 'normal' },
  { text: '=>', type: 'keyword' },
  { text: ' {', type: 'normal' },
  { text: '\n  ', type: 'normal' },
  { text: 'const', type: 'keyword' },
  { text: ' [', type: 'normal' },
  { text: 'data', type: 'variable' },
  { text: ', ', type: 'normal' },
  { text: 'setData', type: 'function' },
  { text: '] = ', type: 'normal' },
  { text: 'useState', type: 'function' },
  { text: '([])', type: 'normal' },
  { text: '\n\n  ', type: 'normal' },
  { text: 'useEffect', type: 'function' },
  { text: '(() ', type: 'normal' },
  { text: '=>', type: 'keyword' },
  { text: ' {', type: 'normal' },
  { text: '\n    ', type: 'normal' },
  { text: 'fetchData', type: 'function' },
  { text: '()', type: 'normal' },
  { text: '\n  ', type: 'normal' },
  { text: '}, [])', type: 'normal' },
  { text: '\n\n  ', type: 'normal' },
  { text: 'return', type: 'keyword' },
  { text: ' (', type: 'normal' },
  { text: '\n    ', type: 'normal' },
  { text: '<', type: 'normal' },
  { text: 'div', type: 'tag' },
  { text: '>', type: 'normal' },
  { text: '\n      ', type: 'normal' },
  { text: '{', type: 'normal' },
  { text: 'data', type: 'variable' },
  { text: '.', type: 'normal' },
  { text: 'map', type: 'function' },
  { text: '(', type: 'normal' },
  { text: 'item', type: 'variable' },
  { text: ' ', type: 'normal' },
  { text: '=>', type: 'keyword' },
  { text: '\n        ', type: 'normal' },
  { text: '<', type: 'normal' },
  { text: 'Card', type: 'component' },
  { text: ' ', type: 'normal' },
  { text: 'key', type: 'prop' },
  { text: '={', type: 'normal' },
  { text: 'item', type: 'variable' },
  { text: '.', type: 'normal' },
  { text: 'id', type: 'prop' },
  { text: '} />', type: 'normal' },
  { text: '\n      ', type: 'normal' },
  { text: ')}', type: 'normal' },
  { text: '\n    ', type: 'normal' },
  { text: '</', type: 'normal' },
  { text: 'div', type: 'tag' },
  { text: '>', type: 'normal' },
  { text: '\n  ', type: 'normal' },
  { text: ')', type: 'normal' },
  { text: '\n', type: 'normal' },
  { text: '}', type: 'normal' },
];

const getColorClass = (type: string) => {
  switch (type) {
    case 'keyword':
      return 'text-[#c586c0]'; // Purple for keywords
    case 'function':
      return 'text-[#dcdcaa]'; // Yellow for functions
    case 'variable':
      return 'text-[#9cdcfe]'; // Light blue for variables
    case 'tag':
      return 'text-[#569cd6]'; // Blue for HTML tags
    case 'component':
      return 'text-[#4ec9b0]'; // Teal for components
    case 'prop':
      return 'text-[#9cdcfe]'; // Light blue for props
    case 'string':
      return 'text-[#ce9178]'; // Orange for strings
    default:
      return 'text-[#d4d4d4]'; // Default gray
  }
};

const CodeTypingAnimation = () => {
  const [displayedCode, setDisplayedCode] = useState<typeof codeLines>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => [...prev, codeLines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + Math.random() * 100);

      return () => clearTimeout(timeout);
    } else {
      // Reset after a pause
      const resetTimeout = setTimeout(() => {
        setDisplayedCode([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm shadow-2xl border border-slate-700 overflow-hidden w-[300px]">
      {/* Window header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-slate-500 text-xs ml-2">App.tsx</span>
      </div>
      
      {/* Code content */}
      <div className="h-[160px] overflow-hidden">
        <pre className="whitespace-pre-wrap leading-relaxed text-xs">
          {displayedCode.map((segment, i) => (
            <span key={i} className={getColorClass(segment.type)}>
              {segment.text}
            </span>
          ))}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-primary`}>|</span>
        </pre>
      </div>
    </div>
  );
};

export default CodeTypingAnimation;
