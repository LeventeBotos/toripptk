"use client";
import React, { useEffect, useState } from "react";
import { app, db } from "./Firebase";
import { collection, limit, onSnapshot, query } from "firebase/firestore";

const Content: React.FC<any> = ({ tantargy }) => {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    let queryRef = query(collection(db, tantargy)); // create a query with limit

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
    <div className="flex flex-col px-10 gap-10">
      {documents.length === 0 ? (
        <div className="w-full text-2xl font-bold text-center flex flex-col justify-center h-96">
          Még semmi sincs feltöltve
        </div>
      ) : (
        <div className="hidden"></div>
      )}

      {documents.map((doc, index) => (
        <a
          href={`https://view.officeapps.live.com/op/embed.aspx?src=${doc.url}`}
          key={index}
          className="rounded-xl cursor-pointer bg-primary hover:bg-secondary transition-all ease-in-out duration-200 p-4 text-center text-xl gap-4 flex flex-col"
        >
          <p className="underline">{doc.title}</p>
          {/* <img
            src={doc.img}
            alt={doc.title}
            className="w-full rounded-xl object-contain"
          /> */}
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${doc.url}`}
            className="w-full aspect-video rounded-xl"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default Content;
