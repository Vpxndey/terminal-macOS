import { useState, useRef, useEffect } from 'react';
import { commandDatabase } from './data/commands';
import { CommandResult } from './components/CommandResult';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ command: string; description: string }[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (input: string) => {
    const searchTerms = input.toLowerCase().split(' ');
    
    const matchedCommands = commandDatabase.filter(cmd => 
      searchTerms.some(term => 
        cmd.task.toLowerCase().includes(term) ||
        cmd.description.toLowerCase().includes(term)
      )
    );

    setResults(matchedCommands.map(cmd => ({
      command: cmd.command,
      description: cmd.description
    })));
  };

  const generateSuggestions = () => {
    const commonTasks = [
      "show system info",
      "check storage space",
      "install homebrew",
      "show ip address",
      "install development tools",
      "monitor system performance"
    ];
    setSuggestions(commonTasks);
  };

  useEffect(() => {
    generateSuggestions();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Terminal AI Assistant</h1>
          <p className="text-gray-400 text-lg">Your intelligent guide to macOS terminal commands</p>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-8 mb-8 shadow-2xl border border-gray-700">
          <label htmlFor="query" className="block text-xl font-medium mb-4">
            How can I help you today? 🤖
          </label>
          <div className="flex gap-4">
            <input
              ref={inputRef}
              id="query"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
              placeholder="Ask me anything about terminal commands..."
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-400"
            />
            <button
              onClick={() => handleSearch(query)}
              className="bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center gap-2"
            >
              <span>Ask AI</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          {suggestions.length > 0 && !results.length && (
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Try asking about:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(suggestion);
                      handleSearch(suggestion);
                    }}
                    className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {results.length > 0 ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Here's what I found:</h2>
              {results.map((result, index) => (
                <CommandResult
                  key={index}
                  command={result.command}
                  description={result.description}
                />
              ))}
            </>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">I can help you with:</h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-blue-400">System Management</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>System information</li>
                    <li>Disk space and memory</li>
                    <li>CPU and battery status</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-green-400">Development Tools</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Installing programming languages</li>
                    <li>Setting up development environments</li>
                    <li>Version control systems</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-purple-400">Network Operations</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Network diagnostics</li>
                    <li>WiFi management</li>
                    <li>IP configuration</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-yellow-400">File Operations</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>File management</li>
                    <li>Directory operations</li>
                    <li>Search and navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;