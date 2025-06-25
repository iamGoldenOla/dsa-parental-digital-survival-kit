"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: "blog" | "resource" | "toolkit";
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock search results - in a real app, this would be an API call
  const mockSearch = (searchQuery: string): SearchResult[] => {
    const allContent = [
      {
        title: "Understanding Your Child's Digital World",
        description:
          "A comprehensive guide to the apps, games, and platforms your children are using.",
        url: "/blog/understanding-digital-world",
        type: "blog",
      },
      {
        title: "Digital Safety Assessment",
        description: "Evaluate your family's current digital safety practices.",
        url: "/toolkit/safety-assessment",
        type: "toolkit",
      },
      {
        title: "Family Link App Guide",
        description:
          "Google's parental control app for managing your child's digital experience.",
        url: "/resources/family-link",
        type: "resource",
      },
    ] as const;

    return allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        setResults(mockSearch(query));
        setIsLoading(false);
      }, 300);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 text-text/70 hover:text-primary transition-colors"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
        <span className="hidden md:inline">Search</span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <div className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Search</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text/70 hover:text-text transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for articles, resources, and more..."
                  className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-text/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>

              {/* Results */}
              <div className="mt-4">
                {isLoading ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <Link
                        key={index}
                        href={result.url}
                        className="block p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-start space-x-4">
                          <span className="text-sm font-medium text-primary">
                            {result.type}
                          </span>
                          <div>
                            <h4 className="font-medium">{result.title}</h4>
                            <p className="text-sm text-text/70">
                              {result.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : query.length > 2 ? (
                  <p className="text-center py-4 text-text/70">
                    No results found for "{query}"
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
