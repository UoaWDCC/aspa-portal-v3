"use client";

import { Executive } from "@/components/Contact/Card/ExecutiveCard";
import { ExecutiveCollection } from "@/components/Contact/Collection/ExecutiveCollection";
import { getExecutives } from "@/data/service/executive";
import { useEffect, useState } from "react";





async function execProfileHandler() : Promise<Executive[]> {
    try {
      const executives = await getExecutives();
      console.log('Executives:', executives);
      return executives;
    } catch (error) {
      console.error('Error fetching executives:', error);
      return [];
    }
  }



export default function ContactPage() {

    const [executives, setExecutives] = useState<Executive[]>([])

    useEffect(() => {
        console.log('useEffect is running');
        execProfileHandler().then((executives) => {
            setExecutives(executives);
        })
    }, [])
    return (
        //moves the body down from under the header, should probably fix this in layout
        <div style={{paddingTop: '180px', paddingBottom: '30px'}} >

            <ExecutiveCollection executives={executives}></ExecutiveCollection>

       

        </div>

    );
}