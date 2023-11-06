"use client";
import React, { useEffect, useState } from "react";
import { app, db } from "./Firebase";
import { collection, limit, onSnapshot, query } from "firebase/firestore";
import { GrPlay, GrPlayFill } from "react-icons/gr";

const Content: React.FC<any> = ({ tantargy }) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [enabled, setEnabled] = useState<number[]>([]);

  useEffect(() => {
    let queryRef = query(collection(db, tantargy));

    const unsubscribe = onSnapshot(queryRef, (snapshot: any) => {
      const updatedDocuments = snapshot.docs.map((doc: any) => doc.data());
      setDocuments(updatedDocuments);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="flex flex-col p-10 gap-10">
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
          {enabled.includes(index) ? (
            <iframe
              src={`https://view.officeapps.live.com/op/embed.aspx?src=${doc.url}`}
              className="w-full aspect-video rounded-xl"
              loading="lazy"
            />
          ) : (
            <div
              onClick={(e) => {
                e.preventDefault();
                setEnabled([...enabled, index]);
              }}
              className="w-full aspect-video text-4xl md:text-7xl bg-white rounded-lg text-white flex flex-col justify-evenly items-center"
            >
              <GrPlayFill />
            </div>
          )}
        </a>
      ))}
    </div>
  );
};

export default Content;
