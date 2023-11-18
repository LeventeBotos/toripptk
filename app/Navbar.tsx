"use client";
import { Button } from "@/components/ui/button";
import { collection, onSnapshot, query } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { db } from "./Firebase";

const Navbar = () => {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    let queryRef = query(collection(db, "tantárgyak")); // create a query with limit

    const unsubscribe = onSnapshot(queryRef, (snapshot: any) => {
      // pass the query to onSnapshot
      const updatedDocuments = snapshot.docs.map((doc: any) => doc.data());
      setDocuments(updatedDocuments);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when component unmounts
    };
  }, []);
  return (
    <nav className="bg-white dark:bg-[#111111] shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex justify-between items-center">
            <div>
              <a
                className="text-gray-800 dark:text-white gradient text-2xl font-bold md:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="/"
              >
                PPT-k
              </a>
            </div>
            <div className="hidden">
              <Button size="icon" variant="outline">
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex flex-row -mx-4 ">
            {documents.map((doc, index) => (
              <Link
                key={index}
                className="my-1 text-gray-800 dark:text-gray-200 ease-in-out duration-300 hover:text-blue-500 dark:hover:text-blue-400 mx-2 md:mx-4 md:my-0"
                href={doc.url}
              >
                {doc.name}
              </Link>
            ))}
            {/* <Link
              className="my-1 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Site 1
            </Link>
            <Link
              className="my-1 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Site 2
            </Link>
            <Link
              className="my-1 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Site 3
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
