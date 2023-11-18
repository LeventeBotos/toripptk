"use client";

import { Button } from "@/components/ui/button";
import {
  Timestamp,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "./Firebase";
import Navbar from "./Navbar";

// export default function Component() {
export const V0: React.FC<{ tantargy: string; name: string }> = ({
  tantargy,
  name,
}) => {
  // Your component code here

  const [documents, setDocuments] = useState<any[]>([]);
  const [enabled, setEnabled] = useState<number[]>([]);

  useEffect(() => {
    const queryRef = query(collection(db, tantargy), orderBy("date", "desc"));

    const unsubscribe = onSnapshot(queryRef, (snapshot: any) => {
      const updatedDocuments = snapshot.docs.map((doc: any) => doc.data());
      setDocuments(updatedDocuments);
      console.log(updatedDocuments);
    });

    return unsubscribe;
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] text-[#111111] dark:text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 dark:text-white text-3xl font-medium">
          {name}
        </h3>
        {documents.length === 0 ? (
          <div className="w-full text-2xl font-bold text-center flex flex-col justify-center h-96">
            Még semmi sincs feltöltve
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {documents.map((document: any, index: number) => (
            <a
              key={index}
              href={`https://view.officeapps.live.com/op/embed.aspx?src=${document.url}`}
              className="w-full max-w-xs mx-auto rounded-md shadow-md overflow-hidden dark:bg-[#191919]"
            >
              {enabled.includes(index) ? (
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=${document.url}`}
                  className="w-full aspect-video rounded-xl "
                  loading="lazy"
                />
              ) : (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setEnabled([...enabled, index]);
                  }}
                  className="w-full aspect-video text-4xl md:text-7xl bg-gray-100 dark:bg-[#333333] rounded-lg text-white flex flex-col justify-evenly items-center"
                >
                  <svg
                    className=" h-10 w-10 dark:text-[#555555] text-black"
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
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              )}
              <div className="py-5 text-center">
                <h2 className="text-xl text-gray-700 dark:text-white font-medium">
                  {document.title}
                </h2>
                <span className="text-gray-500 dark:text-gray-200 text-sm">
                  {/* {document.date} */}
                  {new Date(document.date.seconds * 1000).toDateString()}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
