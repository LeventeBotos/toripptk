"use client";
import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./Firebase";

const DesktopNavbar = () => {
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
    <div className="w-1/3 absolute top-0 left-0 z-10 bg-whitee md:flex text-xl h-full pt-10 hidden items-center flex-col gap-4 p-2">
      {documents.map((doc, index) => (
        <a
          key={index}
          href={doc.url}
          className="w-2/3 bg-primary hover:bg-accent hover:text-white rounded-xl transition-all ease-in-out duration-200 flex flex-col justify-evenly items-center h-12"
        >
          <p>{String(doc.name)}</p>
        </a>
      ))}
    </div>
  );
};

export default DesktopNavbar;
