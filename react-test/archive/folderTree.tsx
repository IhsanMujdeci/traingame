"use client";

import {string} from "prop-types";
import {useContext, useEffect, useState} from "react";
import {FeatureFlags, FeatureFlagsProvider} from "./featureFlags";

const Files = {
  type: "folder",
  name: "parent",
  data: [
    {
      type: "folder",
      name: "root",
      data: [
        {
          type: "folder",
          name: "src",
          data: [
            {
              type: "file",
              name: "index.js",
            },
          ],
        },
        {
          type: "folder",
          name: "public",
          data: [
            {
              type: "file",
              name: "index.ts",
            },
          ],
        },
        {
          type: "file",
          name: "index.html",
        },
        {
          type: "folder",
          name: "data",
          data: [
            {
              type: "folder",
              name: "images",
              data: [
                {
                  type: "file",
                  name: "image.png",
                },
                {
                  type: "file",
                  name: "image2.webp",
                },
              ],
            },
            {
              type: "file",
              name: "logo.svg",
            },
          ],
        },
        {
          type: "file",
          name: "style.css",
        },
      ],
    },
  ],
};

type FilesType = {
  type: string,
  name: string,
  data?: FilesType[]
}

type folderViewProps = {
  files: FilesType,
  level: number,
}

const right = "▶"
const down = "▼"
function FolderView({files , level}: folderViewProps){

  const featureFlags = useContext(FeatureFlags)
  const [isExpanded, setIsExpanded] = useState(false)

  const [arrowDirection, setArrowDirection] = useState("")

  function getArrow(){
    if(!files.data){
      return ""
    }
    if(isExpanded){
      return 'down'
    }
    return 'right'
  }

  return <div>
    <div
      style={{paddingLeft: (level * 10) + 'px', cursor: files.data ? "pointer" : "default", display: 'flex'}}
      onClick={()=>{setIsExpanded(!isExpanded)}}
    >
      <Arrow direction={getArrow()}/>
      {files.name}
    </div>
    {files.data && isExpanded && files.data.map(d => <FolderView files={d} level={level+1}/>)}
  </div>
}

function Arrow({direction}: {direction: string}){

  const [arrow, setArrow] = useState("")

  useEffect(()=>{
    switch (direction){
      case "right":
        setArrow(right)
        break;
      case "down":
        setArrow(down)
        break;
      default: setArrow("")
    }
  }, [direction])


  return <div style={{width: arrow ? '17px': 0}}>
    {arrow}
  </div>
}



export default function Home() {
  return (
    <FeatureFlagsProvider>
      <main>

      </main>
    </FeatureFlagsProvider>
  );
}