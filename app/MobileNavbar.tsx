"use client";
import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./Firebase";

const MobileNavbar = () => {
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
    <div className="h-20 sticky top-0 left-0 z-20 bg-white w-full md:hidden gap-4 flex items-center justify-start overflow-x-scroll  p-2">
      {documents.map((doc, index) => (
        <a
          key={index}
          href={doc.url}
          className=" px-3 bg-primary active:bg-accent active:text-white rounded-xl  flex flex-col justify-evenly items-center h-12"
        >
          <p>{String(doc.name)}</p>
        </a>
      ))}
    </div>
  );
};

export default MobileNavbar;
