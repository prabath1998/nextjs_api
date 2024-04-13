import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from 'react-icons/hi'

const getTopics = async () => {
  const baseUrl = process.env.BASE_URL;
try {
  const res = await fetch(`${baseUrl}`,{
    cache: 'no-store'
  })

  if(!res.ok){
    throw new Error('Failed to get topics');
  }
 
  return res.json();
} catch (error) {
  console.log(error);
}

}

const TopicsList =  async () => {


  const {topics} = await getTopics();

  return (
    <>
    {topics.map(topic => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
        </div>

        <div className="flex gap-2 ">
            <RemoveBtn id={topic._id}/>
            <Link href={`/edit-topic/${topic._id}`}>
                <HiPencilAlt size={24}/>
            </Link>
        </div>
      </div>
    ))}
    
    </>
  );
};

export default TopicsList;
