'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '#/hooks/useApp';
import DataItem from './DataItem';
import { useGlobalContext } from '#/context/global';
import { schemaJson } from '#/lib/demos';
import { SchemaObject } from '#/types/schema';
import { toSchemaTypestring } from '#/lib/stringFactory';
import { usePathname, useSearchParams } from 'next/navigation';
import { GlobalNavItem } from './GlobalSideBar';

interface MongodbListsProps {
  type: string;
  id?: string;
  filter?: any;
}
// export default function MongodbList()  {

//   return (
//   <div><table className="table ">
//   <thead >
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>

//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>

//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>

//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table> </div>)

// }
export default function MongoDbLists({ type, id, filter }: MongodbListsProps) {
  const schemaProperties = useRef(schemaJson[type].properties);


  const tableHead = useRef(
    Object.keys(schemaProperties.current).map(
      (property) => schemaProperties.current[property].name,
    ),
  );
  const [datas, setDatas] = useState<any>([]);
  const { userId, setUserId, data, setData } = useGlobalContext();
  const app = useApp();
  const schemaObj = useRef<SchemaObject>(schemaJson[toSchemaTypestring(type)]);

  useEffect(() => {
    console.log('In mongodblists props', { type }, filter);
    if (app?.currentUser) {
      const mongo = app?.currentUser?.mongoClient('mongodb-atlas');
      const recordsCollection = mongo.db('qrcodeTraceability').collection(type);
      recordsCollection.find(filter).then((foundRecords) => {
        console.log(foundRecords.length);
        setDatas((_currentDatas: any[]) => [...foundRecords]);
      }).catch( 
        error => console.error(error) 
      )
    }
  }, [app?.currentUser, filter, type]);

  const updateItem = (e: Event) => {
    e.preventDefault()
		const eTarget = e.target

		// $(e.target.parentNode.parentNode).find('td.value-cell')
		// 		.attr('contenteditable', 'true').each(
		// 			(index, element)=>{
		// 				$(element).addClass('table-active')
		// 				valueBefore[element.id] = element.innerText
		// 			}
		// 		);
  };

  return (
    <div id="data-table" className="overflow-x-scroll">
      <h1 className='table-head'>Data from MongoDB realmapp service</h1>
      <table className="table bg-azure">
        <thead>
          <tr>
            <th>#</th>
            {tableHead.current?.map((item: string, index: number) => (
              <th scope="col" key={index}>
                {item}
              </th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {datas
            ? datas.map((record: any, index: number) => (
                <DataItem
                  dataItem={record}
                  index={index}
                  id={record._id}
                  key={record._id}
                />
              ))
            : `No ${type}`}
        </tbody>
        <tfoot>
          <tr>
            <td>{`Total documents ${datas.length}`}</td>
            <td>
              <GlobalNavItem
                item={{
                  name: "Insert new one",
                  slug: `/admin/${schemaObj.current.name}/insert`,
                  description: `Insert a new ${schemaObj.current.name} item`,
                }}
                link={`/admin/${schemaObj.current.name}/insert`}
                close={() => {}}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

//(objectKey, index) =>
//<th scope='col' key={index}>{schema.current.properties[objectKey].name}</th>
