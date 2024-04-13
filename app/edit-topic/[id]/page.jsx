import React from 'react'
import EditTopicForm from '../../../components/EditTopicForm';

const getTopicById = async(id) => {
  try{
    const res =  await fetch(`http://localhost:3000/api/topics/${id}`,{     
      cache: 'no-store'     
     
    });

    if(!res.ok){
      throw new Error("failed to fetch topic")
    }else{
      return res.json();
    }
  }catch(error){
    console.log(error)
  }
}

const page = async({params}) => {
  const {id} = params;
  const {topic} = await getTopicById(id);
  const {title, description} = topic;
  return (
    <EditTopicForm title={title} description={description} id={id}/>
  )
}

export default page
